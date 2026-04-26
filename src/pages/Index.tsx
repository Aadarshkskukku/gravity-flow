import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, ArrowRight, Zap, Globe, MessageCircle, 
  ShieldCheck, Activity, Cpu, TrendingUp, 
  ChevronRight, Sparkles, Box, Fingerprint,
  Radar, Eye, Crown, Radio, Target
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeNodes, setActiveNodes] = useState(247);
  const [demandScore, setDemandScore] = useState(96.4);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSyncing, setIsSyncing] = useState(true);

  // 🧬 NEURAL INTERFACE LOGIC
  useEffect(() => {
    const timer = setTimeout(() => setIsSyncing(false), 2000);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const coreHeartbeat = setInterval(() => {
      setActiveNodes(prev => prev + Math.floor(Math.random() * 3) - 1);
      setDemandScore(prev => Math.min(99.9, Math.max(94.2, prev + (Math.random() * 0.4 - 0.2))));
    }, 4000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(coreHeartbeat);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-[#000000] text-white min-h-screen selection:bg-purple-600/50 overflow-x-hidden font-sans antialiased">
      
      {/* 🌌 QUANTUM OVERLAY: Liquid Motion Environment */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 transition-transform duration-700 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(91, 33, 182, 0.15), transparent 80%)`,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(124,58,237,0.1),transparent_70%)]" />
      </div>

      {/* 🛰️ OMNI-HUD V6: The Command Center */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-3xl border-b border-white/5 bg-black/40">
        <div className="flex items-center gap-6">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 90 }}
            className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20"
          >
            <Target size={20} className="text-white" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-black italic tracking-tighter uppercase leading-none">SHIPLOOT <span className="text-purple-500">X</span></span>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
              <span className="text-[7px] font-black tracking-[4px] text-zinc-500 uppercase">{activeNodes} ACTIVE NODES</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 text-[9px] font-black tracking-[5px] uppercase text-zinc-400">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Neural_Vault</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Eco_System</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex items-center gap-4">
             <div className="bg-zinc-900 px-4 py-2 rounded-full border border-white/10">
                <span className="text-[9px] font-black text-purple-500 tracking-widest uppercase">Score: {demandScore.toFixed(1)}%</span>
             </div>
             <motion.button whileTap={{ scale: 0.9 }} className="relative p-3 bg-white text-black rounded-full hover:bg-purple-600 hover:text-white transition-all">
                <ShoppingCart size={18} />
             </motion.button>
          </div>
        </div>
      </nav>

      {/* 🚀 KINETIC HERO: The Master Drop */}
      <main className="relative z-10 pt-56 pb-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-12 backdrop-blur-xl">
            <Cpu size={14} className="text-purple-500 animate-pulse" />
            <span className="text-[9px] font-black tracking-[8px] uppercase text-zinc-400">Omni-Gen Protocol v6.0-Final</span>
          </div>

          <h2 className="text-[15vw] md:text-[14rem] font-black tracking-[-0.06em] leading-[0.75] italic uppercase mb-16 select-none">
            AIR <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-800">DRIVE</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <Button className="bg-white text-black px-16 py-12 rounded-full font-black text-2xl hover:bg-purple-600 hover:text-white transition-all group overflow-hidden">
               <span className="flex items-center gap-4 uppercase italic tracking-tighter">
                 Explore Core <ChevronRight className="group-hover:translate-x-2 transition-transform" />
               </span>
            </Button>
            <div className="flex flex-col items-start border-l-2 border-purple-600/50 pl-8 text-left">
              <div className="flex items-center gap-2 mb-1">
                <Fingerprint size={16} className="text-purple-500" />
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Biometric Access</span>
              </div>
              <p className="text-lg font-black italic tracking-tighter uppercase">Shiploot Certified Asset</p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* 💎 HYPER-GRID: The Next-Gen Assets */}
      <section className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-12 p-6 md:p-12 max-w-[1700px] mx-auto pb-48">
        
        {/* ASSET ALPHA: PHANTOM BLACK */}
        <motion.div 
          whileHover={{ y: -20 }}
          className="group relative h-[800px] bg-zinc-950 rounded-[80px] border border-white/5 overflow-hidden flex flex-col p-12"
        >
          <div className="absolute top-0 right-0 p-12">
            <Crown size={32} className="text-zinc-800 group-hover:text-purple-500 transition-colors duration-700" />
          </div>

          <div className="mt-4">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 mb-6">
                <Radio size={12} className="text-red-500 animate-pulse" />
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Live Demand: High</span>
             </div>
             <h3 className="text-8xl md:text-9xl font-black italic tracking-tighter leading-none uppercase">
               PHANTOM<br/>SHOCK
             </h3>
          </div>

          <div className="mt-12 space-y-4">
             <p className="text-6xl font-black italic tracking-tighter">$399.00</p>
             <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "85%" }} 
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                />
             </div>
          </div>

          <Button className="mt-auto h-24 rounded-[40px] bg-white text-black font-black text-2xl hover:bg-red-600 hover:text-white transition-all uppercase italic">
            Acquire Unit
          </Button>
        </motion.div>

        {/* ASSET BETA: NEON DRIVE */}
        <motion.div 
          whileHover={{ y: -20 }}
          className="group relative h-[800px] bg-gradient-to-br from-purple-900/10 to-zinc-950 rounded-[80px] border border-purple-500/20 overflow-hidden flex flex-col p-12"
        >
          <div className="flex justify-between items-start">
             <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
                <Box size={28} className="text-purple-500" />
             </div>
             <div className="text-right">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Elite Registry</span>
                <p className="text-xl font-black italic">ID: 088-SFX</p>
             </div>
          </div>

          <h3 className="text-8xl md:text-9xl font-black italic tracking-tighter leading-none mt-12 uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
            NEON<br/>PULSE
          </h3>
          
          <div className="mt-12 grid grid-cols-2 gap-4">
             <div className="bg-white/5 p-6 rounded-[30px] border border-white/5 backdrop-blur-md">
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Architecture</span>
                <p className="text-lg font-black uppercase italic text-purple-400">Carbon-Knit</p>
             </div>
             <div className="bg-white/5 p-6 rounded-[30px] border border-white/5 backdrop-blur-md">
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Sole Tech</span>
                <p className="text-lg font-black uppercase italic">Nitro-Air</p>
             </div>
          </div>

          <Button className="mt-auto h-24 rounded-[40px] bg-purple-600 text-white font-black text-2xl hover:bg-white hover:text-black transition-all uppercase italic">
            Secure Entry
          </Button>
        </motion.div>

      </section>

      {/* 🔮 NEURAL FOOTER: Data Integrity */}
      <footer className="relative z-10 py-20 px-12 border-t border-white/5 bg-black/80 backdrop-blur-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 opacity-40">
           <div className="flex items-center gap-4">
              <Activity size={16} className="text-purple-500" />
              <span className="text-[9px] font-black tracking-[6px] uppercase">SHIPLOOT X // Neural Network v6.0.4</span>
           </div>
           <p className="text-[9px] font-black tracking-[6px] uppercase text-center md:text-right">
             Proprietary Tech // No Human Access Required // 2026 Evolution
           </p>
        </div>
      </footer>

      {/* 🤖 NEURAL CHAT AI: The Guide */}
      <div className="fixed bottom-10 right-10 z-[200]">
        <motion.button
          whileHover={{ scale: 1.1, rotate: -10 }}
          className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] border-8 border-black group"
        >
          <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-600 rounded-full border-4 border-black" />
        </motion.button>
      </div>

    </div>
  );
};

export default Index;

