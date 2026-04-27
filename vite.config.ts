import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // SWC മാറ്റി ഏറ്റവും സ്റ്റേബിൾ ആയ പ്ലഗിൻ ആക്കി
import path from "path";
import { componentTagger } from "lovable-tagger";

// --- MASTERBRAIN QUANTUM CONFIG V12.0.5 ---
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0", // Termux-ൽ ലോക്കൽ നെറ്റ്‌വർക്കിൽ വെബ്സൈറ്റ് കാണാൻ ഇത് സഹായിക്കും
    port: 8080,
    strictPort: true,
    hmr: {
      overlay: false, // എററുകൾ വന്ന് സ്ക്രീൻ ബ്ലോക്ക് ആകാതിരിക്കാൻ
    },
    watch: {
      usePolling: true, // Termux ഫയൽ സിസ്റ്റം മാറ്റങ്ങൾ വേഗത്തിൽ തിരിച്ചറിയാൻ
    }
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // ഡ്യൂപ്ലിക്കേഷൻ ഒഴിവാക്കി മെമ്മറി ലാഭിക്കാൻ
    dedupe: ["react", "react-dom", "framer-motion"],
  },
  build: {
    // വലിയ പ്രോജക്റ്റുകൾ ലോഡ് ചെയ്യുമ്പോൾ സ്പീഡ് കൂട്ടാൻ വേണ്ടിയുള്ള സെറ്റിംഗ്‌സ്
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion', 'lucide-react'],
        },
      },
    },
  },
  optimizeDeps: {
    // ആദ്യമേ ലോഡ് ചെയ്യേണ്ട പ്രധാന ലൈബ്രറികൾ
    include: ["lucide-react", "framer-motion", "clsx", "tailwind-merge"],
  }
}));
