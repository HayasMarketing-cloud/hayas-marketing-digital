// Declaración global de tipos para Google Tag Manager
declare global {
  interface Window {
    google_tag_manager?: any;
    dataLayer: Record<string, any>[];
    gtmDebugger?: {
      isLoaded(): boolean;
      verify(): void;
      getEventCount(): number;
      testEvent(eventName?: string): void;
      getLastEvents(count?: number): any[];
      enableDebugMode(): void;
    };
  }
}

export {};
