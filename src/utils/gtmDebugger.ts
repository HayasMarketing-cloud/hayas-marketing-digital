/**
 * Utilidad para verificar que Google Tag Manager está funcionando correctamente
 * 
 * Uso desde la consola del navegador:
 * - gtmDebugger.verify() - Ver estado completo de GTM
 * - gtmDebugger.testEvent() - Enviar evento de prueba
 * - gtmDebugger.enableDebugMode() - Instrucciones para activar modo debug
 */

export const gtmDebugger = {
  /**
   * Verifica si GTM está cargado correctamente
   */
  isLoaded(): boolean {
    return !!(window.google_tag_manager && window.dataLayer);
  },

  /**
   * Muestra el estado completo de GTM en consola
   */
  verify(): void {
    console.log('=== 📊 Google Tag Manager Status ===');
    console.log('✓ GTM Loaded:', this.isLoaded());
    console.log('✓ DataLayer exists:', !!window.dataLayer);
    console.log('✓ DataLayer events:', window.dataLayer?.length || 0);
    console.log('✓ GTM Container:', window.google_tag_manager ? 'Activo' : 'No detectado');
    
    if (window.dataLayer && window.dataLayer.length > 0) {
      console.log('\n📋 Últimos 5 eventos:');
      console.table(window.dataLayer.slice(-5));
    } else {
      console.log('\n⚠️ No hay eventos en el dataLayer todavía');
    }
    
    console.log('\n💡 Tip: Usa gtmDebugger.testEvent() para enviar un evento de prueba');
  },

  /**
   * Obtiene el número de eventos en el dataLayer
   */
  getEventCount(): number {
    return window.dataLayer?.length || 0;
  },

  /**
   * Envía un evento de prueba al dataLayer
   */
  testEvent(eventName = 'test_event'): void {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      test_data: 'Test from gtmDebugger',
      timestamp: Date.now(),
      source: 'gtmDebugger'
    });
    console.log(`✅ Evento de prueba "${eventName}" enviado a GTM`);
    console.log('🔍 Revisa GTM Preview Mode o Tag Assistant para verlo');
  },

  /**
   * Obtiene los últimos N eventos del dataLayer
   */
  getLastEvents(count = 10): any[] {
    if (!window.dataLayer || window.dataLayer.length === 0) {
      return [];
    }
    return window.dataLayer.slice(-count);
  },

  /**
   * Instrucciones para activar el modo debug de GTM
   */
  enableDebugMode(): void {
    console.log('📖 Cómo activar el modo debug de GTM:\n');
    console.log('Opción 1: GTM Preview Mode (Recomendado)');
    console.log('  1. Ve a tu cuenta de GTM en https://tagmanager.google.com/');
    console.log('  2. Haz clic en "Preview" en la esquina superior derecha');
    console.log('  3. Introduce la URL de tu web');
    console.log('  4. Verás todos los eventos en tiempo real\n');
    
    console.log('Opción 2: Tag Assistant Legacy (Chrome)');
    console.log('  1. Instala la extensión "Tag Assistant Legacy" de Chrome');
    console.log('  2. Haz clic en el icono de la extensión');
    console.log('  3. Haz clic en "Enable" en tu web');
    console.log('  4. Recarga la página\n');
    
    console.log('Opción 3: Parámetro URL');
    console.log(`  Añade "?gtm_debug=true" a la URL: ${window.location.href}?gtm_debug=true`);
  }
};

// Exponer en window para uso desde consola del navegador
if (typeof window !== 'undefined') {
  window.gtmDebugger = gtmDebugger;
  
  // Log inicial para que los usuarios sepan que está disponible
  console.log('🔧 GTM Debugger disponible. Usa gtmDebugger.verify() para ver el estado de GTM');
}
