import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  ShoppingCart, Activity, Cpu, ChevronRight, Zap, Box, 
  ShieldCheck, Globe, Fingerprint, Search, LayoutGrid, 
  TrendingUp, Wallet, Terminal, Bot, Server, Lock, 
  Layers, BarChart3, Settings, ZapOff, Sparkles, Scan, Radar, Command
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useMagnetic from "@/hooks/useMagnetic";

const Index = () => {
  // --- MASTER STATE ENGINE ---
  const [gravityOn, setGravityOn] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [nodes, setNodes] = useState(2405);
  const [neuralSync, setNeuralSync] = useState(89);
  const [isScanning, setIsScanning] = useState(false);
  
  // --- PHYSICS & SCROLL LOGIC ---
  const sceneRef = useGravity(gravityOn);
  const { magnetic, reset } = useMagnetic();
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const scaleX = useSpring(useTransform(scrollY, [0, 1000], [0, 1]), { stiffness: 100, damping: 30 });

  // --- NEURAL HEARTBEAT ---
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev + Math.floor(Math.random() * 10) - 4);
      setNeuralSync(Math.floor(Math.random() * (100 - 85) + 85));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const triggerScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <div className={cn(
      "min-h-screen bg-[#000] text-white selection:bg-purple-600 font-sans overflow-x-hidden transition-colors duration-1000",
      gravityOn ? "cursor-crosshair" : "cursor-default"
    )}>
      
      {/* 🧬 QUANTUM BIOMETRIC OVERLAY */}
      <AnimatePresence>
        {isScanning && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] pointer-events-none border-[20px] border-purple-500/20 backdrop-blur-[2px]"
          >
            <motion.div 
              initial={{ top: "-10%" }} animate={{ top: "110%" }} transition={{ duration: 2, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-purple-500 shadow-[0_0_50px_#a855f7]" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌌 DYNAMIC PARTICLE FIELD */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a0b2e,transparent)]" />
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div ref={sceneRef} className="fixed inset-0 z-[1] pointer-events-none" />

      {/* 🔮 TOP NEURAL HUD */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-white to-purple-600 z-[1000] origin-left" style={{ scaleX }} />

      {/* 🛰️ OMNI-HUD V10 REVOLUTION */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center backdrop-blur-xl border-b border-white/5 bg-black/40">
        <div className="flex items-center gap-6">
          <motion.div 
            whileHover={{ rotate: 90 }} onClick={() => setIsAdminMode(!isAdminMode)}
            className={cn(
              "w-14 h-14 flex items-center justify-center font-black text-2xl italic transition-all duration-700 cursor-pointer rounded-2xl border border-white/10",
              isAdminMode ? "bg-purple-600 shadow-[0_0_40px_#7c3aed]" : "bg-white text-black"
            )}
          >
            {isAdminMode ? <Radar className="animate-spin-slow" /> : <Command />}
          </motion.div>
          
          <div className="hidden md:flex flex-col">
            <span className="text-[8px] font-black tracking-[4px] text-purple-500 uppercase opacity-70">Neural Core v10.4</span>
            <h1 className="text-2xl font-black italic tracking-tighter uppercase leading-none">SHIPLOOT X</h1>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-12 bg-white/5 px-10 py-3 rounded-full border border-white/10 backdrop-blur-3xl">
           <div className="flex flex-col items-center">
              <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Neural Sync</span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div animate={{ width: `${neuralSync}%` }} className="h-full bg-purple-500" />
                </div>
                <span className="text-[10px] font-black text-purple-400">{neuralSync}%</span>
              </div>
           </div>
           <div className="flex flex-col items-center border-l border-white/10 pl-12">
              <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest">Active Nodes</span>
              <span className="text-xs font-black tracking-widest">{nodes}</span>
           </div>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={() => setGravityOn(!gravityOn)} className="hidden sm:flex bg-zinc-900 border border-white/10 hover:bg-purple-600 rounded-full px-6 h-12 text-[9px] font-black tracking-[3px]">
            {gravityOn ? <ZapOff size={16} className="mr-2" /> : <Zap size={16} className="mr-2 text-purple-500" />}
            {gravityOn ? "GRAVITY OFF" : "ZERO-G MODE"}
          </Button>
          <div className="p-4 bg-white text-black rounded-full hover:scale-110 active:scale-90 transition-transform cursor-pointer shadow-xl">
            <ShoppingCart size={20} />
          </div>
        </div>
      </nav>

      {/* 🚀 ULTIMATE HERO: THE CODING REVOLUTION */}
      <main className="relative z-10 pt-64 pb-20 flex flex-col items-center px-6">
        <motion.div style={{ y: y1 }} className="max-w-7xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-purple-600/10 border border-purple-500/20 mb-16 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-[9px] font-black tracking-[8px] uppercase text-purple-200">World Number One OS</span>
          </motion.div>

          <h2 className="text-[18vw] md:text-[14rem] font-black tracking-[-0.08em] leading-[0.7] italic uppercase mb-20 select-none">
            SHIP<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-zinc-700">LOOT X</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-12">
            <Button 
              onMouseMove={magnetic} onMouseLeave={reset} onClick={triggerScan}
              className="bg-white text-black px-24 py-16 rounded-[40px] font-black text-3xl hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 shadow-[0_40px_100px_rgba(124,58,237,0.2)]"
            >
              INITIALIZE DROP <ChevronRight className="ml-4" size={32} />
            </Button>
            
            <div className="text-left flex items-center gap-6 bg-white/5 p-8 rounded-[40px] border border-white/5 hover:border-purple-500/30 transition-colors backdrop-blur-xl">
               <div className="relative">
                  <Fingerprint size={48} className="text-purple-500" />
                  {isScanning && <motion.div layoutId="scan" className="absolute inset-0 border-2 border-white rounded-full animate-ping" />}
               </div>
               <div>
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Protocol Status</p>
                  <p className="text-2xl font-black italic uppercase tracking-tighter">Verified Access</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* 📊 MASTER COMMAND DASHBOARD */}
        <AnimatePresence>
          {isAdminMode && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mt-40 px-10"
            >
               {[
                 { label: "Revenue Stream", val: "$24.8M", icon: TrendingUp, color: "text-purple-500" },
                 { label: "Neural Integrity", val: "OMEGA-9", icon: Scan, color: "text-white" },
                 { label: "System Uptime", val: "99.99%", icon: Server, color: "text-green-500" }
               ].map((stat, i) => (
                 <div key={i} className="bg-zinc-900/40 p-12 rounded-[60px] border border-white/5 backdrop-blur-3xl hover:border-purple-500/40 transition-all group">
                    <stat.icon className={cn("mb-6 transition-transform group-hover:scale-110", stat.color)} size={40} />
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[6px]">{stat.label}</p>
                    <h4 className="text-5xl font-black italic mt-3 tracking-tighter">{stat.val}</h4>
                 </div>
               ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🛍️ PRODUCT HOLOGRAPHS V10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto mt-64 px-6">
           {[1, 2, 3].map((item) => (
             <motion.div 
               key={item} whileHover={{ y: -30 }}
               className="group relative bg-zinc-900/10 border border-white/5 p-16 rounded-[100px] backdrop-blur-3xl transition-all duration-700"
             >
                <div className="absolute top-12 right-12">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping" />
                </div>
                <div className="h-72 mb-12 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-purple-600/5 blur-[120px] rounded-full group-hover:bg-purple-600/20 transition-all duration-1000" />
                   <Box size={140} className="text-zinc-800 group-hover:text-white group-hover:rotate-[15deg] transition-all duration-700" />
                </div>
                <h3 className="text-6xl font-black italic tracking-tighter uppercase mb-8 leading-none">UNIT_0{item}<br/><span className="text-purple-600">EVOLVE</span></h3>
                <div className="flex justify-between items-center pt-4">
                   <span className="text-4xl font-black italic tracking-tighter">$1,499</span>
                   <Button className="bg-white text-black rounded-full px-12 h-16 font-black uppercase text-[11px] tracking-widest hover:bg-purple-600 hover:text-white transition-all shadow-lg">ACQUIRE</Button>
                </div>
             </motion.div>
           ))}
        </div>
      </main>

      {/* 🤖 NEURAL AI CONCIERGE (MASTER-BRAIN) */}
      <motion.div drag whileDrag={{ scale: 1.1 }} className="fixed bottom-12 left-12 z-[500]">
        <div className="bg-white text-black p-10 rounded-[50px] flex items-center gap-8 shadow-[0_50px_100px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing border-[12px] border-black">
          <div className="relative">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center animate-pulse">
              <Bot size={32} className="text-purple-500" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 border-4 border-black rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-[4px]">Neural Master</span>
            <span className="text-lg font-black uppercase italic tracking-tighter">AI: READY TO CODE</span>
          </div>
        </div>
      </motion.div>

      {/* 🌐 OMEGA TERMINAL FOOTER */}
      <footer className="py-48 px-12 border-t border-white/5 mt-64 bg-zinc-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-20">
           <div className="space-y-10">
              <h5 className="text-6xl font-black italic uppercase tracking-tighter">SHIPLOOT X</h5>
              <p className="text-[11px] font-black tracking-[6px] uppercase text-zinc-500 max-w-md leading-relaxed">
                Empowering the trillion-dollar generation through quantum commerce and neural design architecture.
              </p>
           </div>
           <div className="flex flex-col items-end gap-12">
              <div className="flex gap-10">
                <Globe className="text-zinc-500 hover:text-purple-500 transition-colors" size={28} />
                <Layers className="text-zinc-500 hover:text-purple-500 transition-colors" size={28} />
                <Terminal className="text-zinc-500 hover:text-purple-500 transition-colors" size={28} />
              </div>
              <span className="text-[12px] font-black tracking-[12px] uppercase opacity-30 italic">© 2026 CODING_REVOLUTION</span>
           </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
