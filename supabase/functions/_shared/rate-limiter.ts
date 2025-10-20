import { SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

export interface RateLimitConfig {
  maxRequests: number; // Maximum number of requests allowed
  windowMs: number; // Time window in milliseconds
  endpoint: string; // Endpoint identifier
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt?: Date;
}

/**
 * Check if a request should be rate limited
 * Uses a sliding window algorithm with database-backed storage
 * 
 * @param supabase - Supabase client with service role key
 * @param identifier - Unique identifier (IP address, user_id, email, etc.)
 * @param config - Rate limit configuration
 * @returns Result indicating if request is allowed and remaining quota
 */
export async function checkRateLimit(
  supabase: SupabaseClient,
  identifier: string,
  config: RateLimitConfig
): Promise<RateLimitResult> {
  try {
    const windowStart = new Date(Date.now() - config.windowMs);

    // Query recent requests within the time window
    const { data: recentRequests, error: queryError } = await supabase
      .from("rate_limit_log")
      .select("request_count, window_start")
      .eq("identifier", identifier)
      .eq("endpoint", config.endpoint)
      .gte("window_start", windowStart.toISOString())
      .order("window_start", { ascending: false })
      .limit(1);

    if (queryError) {
      console.error("Rate limit query error:", queryError);
      // Fail open - allow request if we can't check
      return { allowed: true, remaining: config.maxRequests };
    }

    // Calculate current request count
    let currentCount = 0;
    let existingWindowStart: Date | null = null;

    if (recentRequests && recentRequests.length > 0) {
      const recent = recentRequests[0];
      currentCount = recent.request_count || 0;
      existingWindowStart = new Date(recent.window_start);
    }

    // Check if limit exceeded
    if (currentCount >= config.maxRequests) {
      const resetAt = existingWindowStart
        ? new Date(existingWindowStart.getTime() + config.windowMs)
        : new Date(Date.now() + config.windowMs);

      return {
        allowed: false,
        remaining: 0,
        resetAt,
      };
    }

    // Increment counter
    const newCount = currentCount + 1;
    const now = new Date();

    // Use upsert to handle concurrent requests
    const { error: upsertError } = await supabase
      .from("rate_limit_log")
      .upsert(
        {
          identifier,
          endpoint: config.endpoint,
          request_count: newCount,
          window_start: existingWindowStart || now,
          created_at: now,
        },
        {
          onConflict: "identifier,endpoint",
        }
      );

    if (upsertError) {
      console.error("Rate limit upsert error:", upsertError);
      // Fail open - allow request if we can't update
      return { allowed: true, remaining: config.maxRequests - newCount };
    }

    return {
      allowed: true,
      remaining: config.maxRequests - newCount,
    };
  } catch (error) {
    console.error("Rate limit error:", error);
    // Fail open on unexpected errors
    return { allowed: true, remaining: config.maxRequests };
  }
}

/**
 * Clean up old rate limit records
 * Should be called periodically (e.g., via cron job)
 */
export async function cleanupRateLimitLogs(
  supabase: SupabaseClient
): Promise<void> {
  try {
    const { error } = await supabase.rpc("cleanup_rate_limit_logs");
    if (error) {
      console.error("Cleanup error:", error);
    }
  } catch (error) {
    console.error("Cleanup exception:", error);
  }
}
