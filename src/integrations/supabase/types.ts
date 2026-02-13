export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      briefing_templates: {
        Row: {
          audience_id: string | null
          content_type: string
          created_at: string
          guidelines: string | null
          id: string
          is_active: boolean | null
          name: string
          structure: Json | null
          updated_at: string
        }
        Insert: {
          audience_id?: string | null
          content_type: string
          created_at?: string
          guidelines?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          structure?: Json | null
          updated_at?: string
        }
        Update: {
          audience_id?: string | null
          content_type?: string
          created_at?: string
          guidelines?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          structure?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "briefing_templates_audience_id_fkey"
            columns: ["audience_id"]
            isOneToOne: false
            referencedRelation: "content_audiences"
            referencedColumns: ["id"]
          },
        ]
      }
      content_audiences: {
        Row: {
          created_at: string
          demographics: Json | null
          description: string | null
          goals: Json | null
          id: string
          is_active: boolean | null
          name: string
          pain_points: Json | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          demographics?: Json | null
          description?: string | null
          goals?: Json | null
          id?: string
          is_active?: boolean | null
          name: string
          pain_points?: Json | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          demographics?: Json | null
          description?: string | null
          goals?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          pain_points?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      content_categories: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          parent_id: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          parent_id?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          parent_id?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "content_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      content_ideas: {
        Row: {
          content_type: string | null
          created_at: string
          description: string | null
          estimated_traffic: number | null
          id: string
          keyword_id: string | null
          notes: string | null
          priority: string | null
          published_url: string | null
          status: string | null
          target_audience: string | null
          title: string
          updated_at: string
        }
        Insert: {
          content_type?: string | null
          created_at?: string
          description?: string | null
          estimated_traffic?: number | null
          id?: string
          keyword_id?: string | null
          notes?: string | null
          priority?: string | null
          published_url?: string | null
          status?: string | null
          target_audience?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          content_type?: string | null
          created_at?: string
          description?: string | null
          estimated_traffic?: number | null
          id?: string
          keyword_id?: string | null
          notes?: string | null
          priority?: string | null
          published_url?: string | null
          status?: string | null
          target_audience?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_ideas_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          },
        ]
      }
      content_sources: {
        Row: {
          category: string | null
          created_at: string
          id: string
          is_active: boolean | null
          last_checked_at: string | null
          name: string
          notes: string | null
          reliability_score: number | null
          source_type: string | null
          updated_at: string
          url: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          last_checked_at?: string | null
          name: string
          notes?: string | null
          reliability_score?: number | null
          source_type?: string | null
          updated_at?: string
          url?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          last_checked_at?: string | null
          name?: string
          notes?: string | null
          reliability_score?: number | null
          source_type?: string | null
          updated_at?: string
          url?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          name: string | null
          phone: string | null
          stripe_customer_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          name?: string | null
          phone?: string | null
          stripe_customer_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          phone?: string | null
          stripe_customer_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      indexation_checks: {
        Row: {
          checked_at: string | null
          google_cache_date: string | null
          google_position: number | null
          google_snippet: string | null
          google_title: string | null
          id: string
          is_indexed: boolean | null
          page_path: string
          raw_response: Json | null
        }
        Insert: {
          checked_at?: string | null
          google_cache_date?: string | null
          google_position?: number | null
          google_snippet?: string | null
          google_title?: string | null
          id?: string
          is_indexed?: boolean | null
          page_path: string
          raw_response?: Json | null
        }
        Update: {
          checked_at?: string | null
          google_cache_date?: string | null
          google_position?: number | null
          google_snippet?: string | null
          google_title?: string | null
          id?: string
          is_indexed?: boolean | null
          page_path?: string
          raw_response?: Json | null
        }
        Relationships: []
      }
      keyword_groups: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          parent_id: string | null
          updated_at: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          parent_id?: string | null
          updated_at?: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          parent_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "keyword_groups_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "keyword_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_search_results: {
        Row: {
          id: string
          is_ai_overview: boolean | null
          is_featured: boolean | null
          keyword_id: string
          position: number | null
          search_engine: string
          snippet: string | null
          title: string | null
          tracked_at: string
          url: string | null
        }
        Insert: {
          id?: string
          is_ai_overview?: boolean | null
          is_featured?: boolean | null
          keyword_id: string
          position?: number | null
          search_engine: string
          snippet?: string | null
          title?: string | null
          tracked_at?: string
          url?: string | null
        }
        Update: {
          id?: string
          is_ai_overview?: boolean | null
          is_featured?: boolean | null
          keyword_id?: string
          position?: number | null
          search_engine?: string
          snippet?: string | null
          title?: string | null
          tracked_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "keyword_search_results_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          },
        ]
      }
      keywords: {
        Row: {
          bing_position: number | null
          chatgpt_mentions: number | null
          cpc: number | null
          created_at: string
          difficulty: number | null
          google_position: number | null
          group_id: string | null
          id: string
          is_favorite: boolean | null
          is_objective: boolean | null
          keyword: string
          last_tracked_at: string | null
          notes: string | null
          perplexity_mentions: number | null
          search_volume: number | null
          status: Database["public"]["Enums"]["keyword_status"]
          strategy_type: Database["public"]["Enums"]["seo_strategy_type"]
          trend: string | null
          updated_at: string
        }
        Insert: {
          bing_position?: number | null
          chatgpt_mentions?: number | null
          cpc?: number | null
          created_at?: string
          difficulty?: number | null
          google_position?: number | null
          group_id?: string | null
          id?: string
          is_favorite?: boolean | null
          is_objective?: boolean | null
          keyword: string
          last_tracked_at?: string | null
          notes?: string | null
          perplexity_mentions?: number | null
          search_volume?: number | null
          status?: Database["public"]["Enums"]["keyword_status"]
          strategy_type?: Database["public"]["Enums"]["seo_strategy_type"]
          trend?: string | null
          updated_at?: string
        }
        Update: {
          bing_position?: number | null
          chatgpt_mentions?: number | null
          cpc?: number | null
          created_at?: string
          difficulty?: number | null
          google_position?: number | null
          group_id?: string | null
          id?: string
          is_favorite?: boolean | null
          is_objective?: boolean | null
          keyword?: string
          last_tracked_at?: string | null
          notes?: string | null
          perplexity_mentions?: number | null
          search_volume?: number | null
          status?: Database["public"]["Enums"]["keyword_status"]
          strategy_type?: Database["public"]["Enums"]["seo_strategy_type"]
          trend?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "keywords_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "keyword_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          amount_total: number
          created_at: string
          currency: string
          customer_id: string
          id: string
          metadata: Json | null
          product_id: string
          status: string
          stripe_payment_intent_id: string | null
          stripe_session_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
        }
        Insert: {
          amount_total: number
          created_at?: string
          currency?: string
          customer_id: string
          id?: string
          metadata?: Json | null
          product_id: string
          status?: string
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
        }
        Update: {
          amount_total?: number
          created_at?: string
          currency?: string
          customer_id?: string
          id?: string
          metadata?: Json | null
          product_id?: string
          status?: string
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          currency: string
          id: string
          order_id: string
          payment_method_type: string | null
          status: string
          stripe_payment_id: string
          stripe_webhook_data: Json | null
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          id?: string
          order_id: string
          payment_method_type?: string | null
          status: string
          stripe_payment_id: string
          stripe_webhook_data?: Json | null
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          id?: string
          order_id?: string
          payment_method_type?: string | null
          status?: string
          stripe_payment_id?: string
          stripe_webhook_data?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          billing_interval: string | null
          billing_type: string
          category: string
          created_at: string
          currency: string
          description: string | null
          id: string
          is_active: boolean
          name: string
          price_amount: number
          stripe_price_id: string
          stripe_product_id: string
          updated_at: string
        }
        Insert: {
          billing_interval?: string | null
          billing_type?: string
          category: string
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
          price_amount: number
          stripe_price_id: string
          stripe_product_id: string
          updated_at?: string
        }
        Update: {
          billing_interval?: string | null
          billing_type?: string
          category?: string
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
          price_amount?: number
          stripe_price_id?: string
          stripe_product_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      rate_limit_log: {
        Row: {
          created_at: string | null
          endpoint: string
          id: string
          identifier: string
          request_count: number | null
          window_start: string
        }
        Insert: {
          created_at?: string | null
          endpoint: string
          id?: string
          identifier: string
          request_count?: number | null
          window_start?: string
        }
        Update: {
          created_at?: string | null
          endpoint?: string
          id?: string
          identifier?: string
          request_count?: number | null
          window_start?: string
        }
        Relationships: []
      }
      seo_alerts: {
        Row: {
          alert_type: string
          created_at: string | null
          details: Json | null
          id: string
          is_read: boolean | null
          message: string
          page_path: string
          resolved_at: string | null
          severity: string
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          details?: Json | null
          id?: string
          is_read?: boolean | null
          message: string
          page_path: string
          resolved_at?: string | null
          severity?: string
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          details?: Json | null
          id?: string
          is_read?: boolean | null
          message?: string
          page_path?: string
          resolved_at?: string | null
          severity?: string
        }
        Relationships: []
      }
      seo_history: {
        Row: {
          id: string
          missing_fields: Json | null
          missing_fields_count: number | null
          page_path: string
          seo_optimized: boolean | null
          snapshot_at: string | null
          status: string | null
        }
        Insert: {
          id?: string
          missing_fields?: Json | null
          missing_fields_count?: number | null
          page_path: string
          seo_optimized?: boolean | null
          snapshot_at?: string | null
          status?: string | null
        }
        Update: {
          id?: string
          missing_fields?: Json | null
          missing_fields_count?: number | null
          page_path?: string
          seo_optimized?: boolean | null
          snapshot_at?: string | null
          status?: string | null
        }
        Relationships: []
      }
      seo_pages: {
        Row: {
          about: Json | null
          additional_schema: Json | null
          canonical: string
          category: string | null
          created_at: string | null
          description: string
          estimated_traffic: number | null
          faqs: Json | null
          h1: string
          h2_primary: string | null
          h2_secondary: Json | null
          h3_strategic: Json | null
          id: string
          in_language: string | null
          is_indexable: boolean | null
          keywords: Json | null
          last_optimized_at: string | null
          mentions: Json | null
          og_image: string | null
          og_type: string | null
          optimization_priority: number | null
          path: string
          pillar_page: string | null
          priority_score: number | null
          related_pages: Json | null
          robots: string | null
          schema_type: string | null
          strategic_importance: string | null
          title: string
          translation_of: string | null
          updated_at: string | null
        }
        Insert: {
          about?: Json | null
          additional_schema?: Json | null
          canonical: string
          category?: string | null
          created_at?: string | null
          description: string
          estimated_traffic?: number | null
          faqs?: Json | null
          h1: string
          h2_primary?: string | null
          h2_secondary?: Json | null
          h3_strategic?: Json | null
          id?: string
          in_language?: string | null
          is_indexable?: boolean | null
          keywords?: Json | null
          last_optimized_at?: string | null
          mentions?: Json | null
          og_image?: string | null
          og_type?: string | null
          optimization_priority?: number | null
          path: string
          pillar_page?: string | null
          priority_score?: number | null
          related_pages?: Json | null
          robots?: string | null
          schema_type?: string | null
          strategic_importance?: string | null
          title: string
          translation_of?: string | null
          updated_at?: string | null
        }
        Update: {
          about?: Json | null
          additional_schema?: Json | null
          canonical?: string
          category?: string | null
          created_at?: string | null
          description?: string
          estimated_traffic?: number | null
          faqs?: Json | null
          h1?: string
          h2_primary?: string | null
          h2_secondary?: Json | null
          h3_strategic?: Json | null
          id?: string
          in_language?: string | null
          is_indexable?: boolean | null
          keywords?: Json | null
          last_optimized_at?: string | null
          mentions?: Json | null
          og_image?: string | null
          og_type?: string | null
          optimization_priority?: number | null
          path?: string
          pillar_page?: string | null
          priority_score?: number | null
          related_pages?: Json | null
          robots?: string | null
          schema_type?: string | null
          strategic_importance?: string | null
          title?: string
          translation_of?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "seo_pages_translation_of_fkey"
            columns: ["translation_of"]
            isOneToOne: false
            referencedRelation: "seo_pages"
            referencedColumns: ["id"]
          },
        ]
      }
      sofia_config: {
        Row: {
          description: string | null
          id: string
          key: string
          updated_at: string
          updated_by: string | null
          value: string
        }
        Insert: {
          description?: string | null
          id?: string
          key: string
          updated_at?: string
          updated_by?: string | null
          value: string
        }
        Update: {
          description?: string | null
          id?: string
          key?: string
          updated_at?: string
          updated_by?: string | null
          value?: string
        }
        Relationships: []
      }
      sofia_leads: {
        Row: {
          company: string | null
          conversation_summary: string | null
          created_at: string
          email: string | null
          id: string
          interest: string | null
          name: string | null
          phone: string | null
          source_page: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          company?: string | null
          conversation_summary?: string | null
          created_at?: string
          email?: string | null
          id?: string
          interest?: string | null
          name?: string | null
          phone?: string | null
          source_page?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          company?: string | null
          conversation_summary?: string | null
          created_at?: string
          email?: string | null
          id?: string
          interest?: string | null
          name?: string | null
          phone?: string | null
          source_page?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_seo_priority: {
        Args: { page_row: Database["public"]["Tables"]["seo_pages"]["Row"] }
        Returns: number
      }
      cleanup_old_seo_history: { Args: never; Returns: undefined }
      cleanup_rate_limit_logs: { Args: never; Returns: undefined }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      keyword_status: "active" | "paused" | "archived"
      seo_strategy_type: "seo_clasico" | "aeo" | "geo" | "hibrido"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      keyword_status: ["active", "paused", "archived"],
      seo_strategy_type: ["seo_clasico", "aeo", "geo", "hibrido"],
    },
  },
} as const
