import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// @ts-expect-error - JS module sin types
import { prerenderOg } from "./scripts/prerender-og.mjs";

// Plugin: pre-render index.html por ruta con OG meta personalizadas (post-build)
const prerenderOgPlugin = (): Plugin => ({
  name: 'prerender-og',
  apply: 'build',
  async closeBundle() {
    // Strict: si falla, rompe el build de forma visible (no swallow).
    // El script ya valida cobertura (written >= expected) y lanza si falta algo.
    await prerenderOg('dist');
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerenderOgPlugin(),
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
          // Solo vendor: React core se cachea entre navegaciones.
          // Páginas y componentes UI se separan automáticamente por Vite
          // en chunks individuales gracias al lazy loading.
          vendor: ['react', 'react-dom', 'react-router-dom'],
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
