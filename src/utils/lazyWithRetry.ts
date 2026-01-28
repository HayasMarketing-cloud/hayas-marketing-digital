import React, { lazy } from "react";

type DefaultExport<T> = { default: T };
type Importer<T> = () => Promise<DefaultExport<T>>;

export interface LazyWithRetryOptions {
  /** Number of retries after the first failed attempt */
  retries?: number;
  /** Delay between retries (ms) */
  retryDelayMs?: number;
  /** If it looks like a chunk/module fetch error, reload the page once */
  reloadOnChunkError?: boolean;
  /** SessionStorage key used to prevent reload loops */
  reloadCacheKey?: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const isChunkLoadError = (err: unknown) => {
  const msg = err instanceof Error ? err.message : String(err);
  return (
    /Failed to fetch dynamically imported module/i.test(msg) ||
    /Importing a module script failed/i.test(msg) ||
    /Loading chunk \d+ failed/i.test(msg) ||
    /ChunkLoadError/i.test(msg)
  );
};

/**
 * Wraps React.lazy with a retry strategy to avoid blank screens caused by transient
 * dynamic-import failures (e.g. stale caches after deployments or brief network hiccups).
 */
export function lazyWithRetry<T extends React.ComponentType<any>>(
  importer: Importer<T>,
  options: LazyWithRetryOptions = {}
) {
  const {
    retries = 1,
    retryDelayMs = 250,
    reloadOnChunkError = true,
    reloadCacheKey = "lazyWithRetry:reloaded",
  } = options;

  return lazy(async () => {
    let attempt = 0;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        return await importer();
      } catch (err) {
        attempt += 1;
        const chunkError = isChunkLoadError(err);

        // Retry a couple of times (useful for transient dev-server hiccups)
        if (attempt <= retries) {
          if (retryDelayMs > 0) await sleep(retryDelayMs);
          continue;
        }

        // If it's a classic chunk/dynamic import fetch failure, reload once to recover
        if (reloadOnChunkError && chunkError && typeof window !== "undefined") {
          try {
            const key = `${reloadCacheKey}:${window.location.pathname}`;
            if (!sessionStorage.getItem(key)) {
              sessionStorage.setItem(key, "1");
              window.location.reload();
            }
          } catch {
            // If storage fails, just fall through and throw the original error
          }
        }

        throw err;
      }
    }
  });
}
