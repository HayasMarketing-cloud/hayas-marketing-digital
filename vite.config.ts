import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Chunk para vendor (bibliotecas principales)
          vendor: ['react', 'react-dom', 'react-router-dom'],
          
          // Chunk para UI (componentes de UI)
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          
          // Chunk para casos de éxito (lazy load group)
          'casos-exito': [
            './src/pages/CasoExitoAsendia.tsx',
            './src/pages/CasoExitoNexoVital.tsx',
            './src/pages/CasoExitoIVirgenExtra.tsx',
          ],
          
          // Blog posts - removed to allow automatic route-based splitting
          
          // Chunk para servicios (lazy load group)
          'servicios': [
            './src/pages/TiendaOnline.tsx',
            './src/pages/DisenoWeb.tsx',
            './src/pages/SeoPositioning.tsx',
          ]
        }
      }
    },
    // Optimización del bundle
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    target: 'es2015',
    sourcemap: false,
    // Optimizaciones adicionales para SPA
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: false, // Acelera builds
  },
  // Optimizaciones adicionales
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
}));
