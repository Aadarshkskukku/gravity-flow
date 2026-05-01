import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index';
import { QuantumCubeGrid } from './components/ProductGrid';
import { motion, AnimatePresence } from 'framer-motion';

// Masterbrain Intelligence: Global Overlay Component
const GlobalOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 animate-pulse" />
    <div className="absolute bottom-5 right-5 text-[10px] font-mono text-purple-500/50 tracking-[0.2em]">
      SYSTEM_V12_EVOLUTION_ACTIVE
    </div>
  </div>
);

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="bg-black min-h-screen selection:bg-purple-500 selection:text-white">
        <GlobalOverlay />
        <Router>
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Master Entry Point */}
                <Home />
                
                {/* Integration of World No.1 Quantum Interface */}
                <section className="relative z-10 bg-black">
                   <QuantumCubeGrid />
                </section>
              </motion.div>
            } />
          </Routes>
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
