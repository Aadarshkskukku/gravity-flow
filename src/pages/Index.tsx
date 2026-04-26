import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  ShoppingCart, Activity, Cpu, ChevronRight, Zap, Box, 
  ShieldCheck, Globe, Fingerprint, Search, LayoutGrid, 
  TrendingUp, Wallet, Terminal, Bot, Server, Lock, 
  Layers, BarChart3, Settings, ZapOff, Sparkles, Scan, Radar
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useGravity from "@/hooks/useGravity";
import useMagnetic from "@/hooks/useMagnetic";

const Index = () => {
  const [gravityOn, setGravityOn] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [nodes, setNodes] = useState(2405);
  const [neuralSync, setNeuralSync] = useState(0);
  
  const sceneRef = useGravity(gravityOn);
  const { magnetic, reset } = useMagnetic();
  const { scrollY } = useScroll();
  
  // 🎭 PARALLAX & INTELLIGENT SCALING
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHeader = useTransform(scrollY, [0, 100], [1, 0.5]);
  const scaleX = useSpring(useTransform(scrollY, [0, 1000], [0, 1]), { stiffness: 100, damping: 30 });

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev + Math.floor(Math.random() * 10) - 4);
      setNeuralSync(Math.floor(Math.random() * 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "min-h-screen bg-[#000] text-white selection:bg-purple-600 font-sans overflow-x-hidden",
      gravityOn ? "cursor-crosshair" : "cursor-default"
    )}>
      
      {/* 🌌 QUANTUM DNA BACKGROUND (V10 EXCLUSIVE) */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a0b2e,transparent)]" />
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div ref={sceneRef} className="fixed inset-0 z-[1] pointer-events-none" />

      {/* 🔮 NEURAL PROGRESS HUD */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-white to-purple-600 z-[1000]" style={{ scaleX }} />

      {/* 🛰️ OMNI-HUD V10 */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-8 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-6">
          <motion.div 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAdminMode(!isAdminMode)}
            className={cn(
              "w-14 h-14 flex items-center justify-center font-black text-2xl italic transition-all duration-700 cursor-pointer rounded-2xl",
              isAdminMode ? "bg-purple-600 shadow-[0_0_50px_#7c3aed]" : "bg-white text-black"
            )}
          >
            {isAdminMode ? <Radar className="animate-spin-slow" /> : "X"}
          </motion.div>
          
          <div className="hidden md:flex flex-col">
            <span className="text-[10px] font-black tracking-[5px] text-purple-500 uppercase">System V10.0</span>
            <h1 className="text-2xl font-black italic tracking-tighter uppercase leading-none">SHIPLOOT X</h1>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-3xl">
           <div className="flex flex-col items-center">
              <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest">Neural Sync</span>
              <span className="text-xs font-black text-green-500">{neuralSync}%</span>
           </div>
           <div className="h-8 w-[1px] bg-white/10" />
           <div className="flex flex-col items-center">
              <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest">Nodes active</span>
              <span className="text-xs font-black">{nodes}</span>
           </div>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={() => setGravityOn(!gravityOn)} className="bg-zinc-900 border border-white/10 hover:bg-purple-600 rounded-full px-6 text-[10px] font-black tracking-widest">
            {gravityOn ? <ZapOff size={16} /> : <Zap size={16} className="text-purple-500" />}
          </Button>
          <div className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform cursor-pointer">
            <ShoppingCart size={20} />
          </div>
        </div>
      </nav>

      {/* 🚀 ULTIMATE HERO SECTION */}
      <main className="relative z-10 pt-64 pb-20 flex flex-col items-center px-6">
        <motion.div style={{ y: y1 }} className="max-w-7xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-purple-600/10 border border-purple-500/20 mb-16"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-[10px] font-black tracking-[10px] uppercase text-purple-200">The Future of Commerce</span>
          </motion.div>

          <h2 className="text-[20vw] md:text-[16rem] font-black tracking-[-0.1em] leading-[0.65] italic uppercase mb-20">
            SHIP<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-zinc-800 drop-shadow-[0_0_80px_rgba(124,58,237,0.3)]">LOOT</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-10">
            <Button 
              onMouseMove={magnetic} onMouseLeave={reset}
              className="bg-white text-black px-24 py-16 rounded-[40px] font-black text-3xl hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_30px_100px_rgba(255,255,255,0.1)]"
            >
              LAUNCH DROP <ChevronRight className="ml-4" size={32} />
            </Button>
            
            <div className="text-left flex items-center gap-6 bg-white/5 p-6 rounded-[30px] border border-white/5">
               <Fingerprint size={40} className="text-purple-500" />
               <div>
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Identity Verified</p>
                  <p className="text-xl font-black italic uppercase">Billionaire Tier</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* 📊 ADMIN MASTER HUD (V10 ADVANCED) */}
        <AnimatePresence>
          {isAdminMode && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mt-40 px-10"
            >
               <div className="bg-zinc-900/50 p-10 rounded-[50px] border border-purple-500/20 backdrop-blur-3xl">
                  <TrendingUp className="text-purple-500 mb-6" size={32} />
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[5px]">Revenue Stream</p>
                  <h4 className="text-5xl font-black italic mt-2">$24,000,000+</h4>
               </div>
               <div className="bg-zinc-900/50 p-10 rounded-[50px] border border-white/5 backdrop-blur-3xl">
                  <Scan className="text-white mb-6" size={32} />
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[5px]">Security Integrity</p>
                  <h4 className="text-5xl font-black italic mt-2">OMEGA_SEC</h4>
               </div>
               <div className="bg-purple-600 p-10 rounded-[50px] shadow-[0_20px_60px_rgba(124,58,237,0.4)]">
                  <Lock className="text-white mb-6" size={32} />
                  <p className="text-[10px] font-black text-white/50 uppercase tracking-[5px]">Admin Access</p>
                  <h4 className="text-5xl font-black italic mt-2">AUTHORIZED</h4>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🛍️ PRODUCT HOLOGRAPHS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mt-64 px-6">
           {[1, 2, 3].map((item) => (
             <motion.div 
               key={item} whileHover={{ scale: 1.05, y: -20 }}
               className="bg-zinc-900/20 border border-white/5 p-14 rounded-[80px] backdrop-blur-3xl hover:border-purple-600/50 transition-all group"
             >
                <div className="h-64 mb-10 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/30 transition-all" />
                   <Box size={120} className="text-zinc-800 group-hover:text-white transition-colors duration-700" />
                </div>
                <h3 className="text-6xl font-black italic tracking-tighter uppercase mb-6">UNIT_0{item}<br/><span className="text-purple-600 font-normal">CORE</span></h3>
                <div className="flex justify-between items-center">
                   <span className="text-3xl font-black italic">$1,299</span>
                   <Button className="bg-white text-black rounded-full px-10 h-14 font-black uppercase text-[10px] tracking-widest hover:bg-purple-600 hover:text-white transition-all">ACQUIRE</Button>
                </div>
             </motion.div>
           ))}
        </div>
      </main>

      {/* 🤖 NEURAL AI ASSISTANT (V10) */}
      <motion.div drag className="fixed bottom-12 left-12 z-[200]">
        <div className="bg-white text-black p-8 rounded-[40px] flex items-center gap-6 shadow-2xl cursor-grab active:cursor-grabbing border-8 border-black">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center animate-pulse">
            <Bot size={24} className="text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Neural Link</span>
            <span className="text-sm font-black uppercase italic">AI: Online</span>
          </div>
        </div>
      </motion.div>

      {/* 🌐 FOOTER: THE OMEGA TERMINAL */}
      <footer className="py-40 px-12 border-t border-white/5 mt-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 opacity-40 hover:opacity-100 transition-opacity duration-1000">
           <div>
              <h5 className="text-4xl font-black italic uppercase mb-8">SHIPLOOT X</h5>
              <p className="text-[10px] font-black tracking-[5px] uppercase text-zinc-500 max-w-sm">The world's most advanced AI commerce engine. Built for the next trillion dollars.</p>
           </div>
           <div className="flex flex-wrap gap-10 items-end justify-end">
              <Globe className="text-white hover:text-purple-500 cursor-pointer" />
              <Layers className="text-white hover:text-purple-500 cursor-pointer" />
              <Terminal className="text-white hover:text-purple-500 cursor-pointer" />
              <span className="text-[10px] font-black tracking-[8px] uppercase">EST 2026</span>
           </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
