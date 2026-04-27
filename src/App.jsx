import React, { Suspense } from 'react';
import HeroScene from './components/HeroCube';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Futuristic Background Elements
const NeuralBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />
  </div>
);

// 2. Master Navigation Bar
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-black/10 border-b border-white/5">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center font-black text-white italic">S</div>
      <span className="text-white font-black tracking-tighter text-xl">SHIPLOOT X</span>
    </div>
    <div className="hidden md:flex gap-8 text-white/60 font-medium text-xs tracking-widest uppercase">
      <a href="#" className="hover:text-purple-400 transition-colors">Neural_Vault</a>
      <a href="#" className="hover:text-purple-400 transition-colors">Quantum_Shop</a>
      <a href="#" className="hover:text-purple-400 transition-colors">Evolution_Logs</a>
    </div>
    <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-tighter hover:bg-purple-500 hover:text-white transition-all duration-500">
      Acquire_Loot
    </button>
  </nav>
);

function App() {
  return (
    <main className="relative min-h-screen bg-[#050505] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <NeuralBackground />
      <Navbar />

      {/* Hero Section: The Kinetic Cube Interface */}
      <section className="relative z-10 h-screen w-full flex items-center justify-center">
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Suspense fallback={<div className="text-purple-500 font-mono animate-pulse text-center pt-[50vh]">INITIALIZING_NEURAL_CORE...</div>}>
              <HeroScene />
            </Suspense>
          </motion.div>
        </AnimatePresence>

        {/* Dynamic HUD (Heads-Up Display) Overlay */}
        <div className="absolute bottom-12 left-8 md:left-12 z-20 space-y-2 pointer-events-none">
          <p className="text-purple-500 font-mono text-[10px] tracking-[0.3em] uppercase animate-pulse">Core_V13.0_Evolution_Active</p>
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter italic leading-none">
            UNLEASH THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">QUANTUM_LOOT</span>
          </h2>
        </div>
      </section>

      {/* Information Layer */}
      <section className="relative z-10 p-20 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-purple-400 font-mono text-xs uppercase tracking-widest">01 / Neural_Integrity</h3>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Our 3D interactive interface uses zero-gravity physics to showcase world-class products in a revolutionary way.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-purple-400 font-mono text-xs uppercase tracking-widest">02 / Global_Sync</h3>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Real-time stock updates synced directly with the SHIPLOOT X master command center.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-purple-400 font-mono text-xs uppercase tracking-widest">03 / Bio_Encryption</h3>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              AES-512 level security for every acquisition within the neural vault.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
