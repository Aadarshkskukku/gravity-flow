import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { 
  ShoppingCart, Activity, Cpu, ChevronRight, Zap, Box, 
  ShieldCheck, Globe, Fingerprint, Search, LayoutGrid, 
  TrendingUp, Wallet, Terminal, Bot, Server, Lock, 
  Layers, BarChart3, Settings, ZapOff, Sparkles, Scan, Radar, Command,
  Database, Radio, Cpu as Processor, ArrowUpRight, Github, Twitter
} from 'lucide-react';

// --- MASTER UTILS & HOOKS ---
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";
import useGravity from "../hooks/useGravity";
import useMagnetic from "../hooks/useMagnetic";

const Index = () => {
  const [gravityOn, setGravityOn] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [nodes, setNodes] = useState(2405);
  const [neuralSync, setNeuralSync] = useState(89);
  const [isScanning, setIsScanning] = useState(false);
  const [terminalText, setTerminalText] = useState("> INITIALIZING_SHIPLOOT_X_CORE...");
  
  const sceneRef = useGravity(gravityOn);
  const { position, magnetic, reset } = useMagnetic();
  const { scrollY } = useScroll();
  
  const yHero = useTransform(scrollY, [0, 500], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleX = useSpring(useTransform(scrollY, [0, 1000], [0, 1]), { stiffness: 100, damping: 30 });

  // --- MASTERBRAIN DATA FEED ---
  useEffect(() => {
    const logs = [
      "> NODE_SYNC_SUCCESSFUL",
      "> DEPLOYING_QUANTUM_SHADERS",
      "> STRIPE_PAYMENT_GATEWAY_READY",
      "> AI_CONCIERGE_ONLINE",
      "> ENCRYPTING_USER_SESSION"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setNodes(prev => prev + Math.floor(Math.random() * 12) - 5);
      setNeuralSync(Math.floor(Math.random() * (100 - 92) + 92));
      setTerminalText(logs[i % logs.length]);
      i++;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "min-h-screen bg-[#000] text-white selection:bg-purple-600 font-sans overflow-x-hidden transition-all duration-1000",
      gravityOn ? "cursor-crosshair" : "cursor-default"
    )}>
      
      {/* 🧬 Z-INDEX 1000: BIOMETRIC AUTH SCANNER */}
      <AnimatePresence>
        {isScanning && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] pointer-events-none border-[1px] border-purple-500/30 backdrop-blur-[4px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-purple-600/10" />
            <motion.div 
              initial={{ top: "-10%" }} animate={{ top: "110%" }} transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 right-0 h-[2px] bg-white shadow-[0_0_100px_#fff]" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌌 Z-INDEX 0: QUANTUM BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e0b3d_0%,transparent_50%)]" />
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      </div>

      {/* 🍎 Z-INDEX 1: GRAVITY ENGINE */}
      <div ref={sceneRef} className="fixed inset-0 z-[1] pointer-events-none" />

      {/* 🛰️ NAV-BAR: OMNI HUD */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-6 flex justify-between items-center backdrop-blur-2xl border-b border-white/5 bg-black/40">
        <div className="flex items-center gap-4">
          <motion.div 
            whileTap={{ scale: 0.9 }} onClick={() => setIsAdminMode(!isAdminMode)}
            className={cn(
              "w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 cursor-pointer transition-all duration-500",
              isAdminMode ? "bg-purple-600 shadow-[0_0_30px_#7c3aed] border-transparent" : "bg-zinc-900"
            )}
          >
            <Command size={20} className={isAdminMode ? "animate-pulse" : ""} />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-widest text-purple-500 italic">CORE_V12.ALPHA</span>
            <h1 className="text-xl font-black italic tracking-tighter uppercase leading-none">SHIPLOOT X</h1>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10 bg-white/5 px-8 py-3 rounded-2xl border border-white/10">
           <div className="flex flex-col">
              <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Neural Sync</span>
              <div className="flex items-center gap-3">
                <div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div animate={{ width: `${neuralSync}%` }} className="h-full bg-purple-500" />
                </div>
                <span className="text-[10px] font-black text-purple-400">{neuralSync}%</span>
              </div>
           </div>
           <div className="w-px h-8 bg-white/10" />
           <div className="flex flex-col">
              <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest">Active Nodes</span>
              <span className="text-xs font-black tracking-widest text-white">{nodes}</span>
           </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end mr-4">
            <span className="text-[8px] font-bold text-green-500 animate-pulse">● LIVE_FEED</span>
            <span className="text-[9px] font-mono text-zinc-400">{terminalText}</span>
          </div>
          <Button onClick={() => setGravityOn(!gravityOn)} className="bg-zinc-900 border border-white/10 hover:bg-white hover:text-black rounded-xl px-4 h-11 text-[9px] font-black uppercase transition-all">
            {gravityOn ? <ZapOff size={14} className="mr-2" /> : <Zap size={14} className="mr-2" />}
            {gravityOn ? "Phys_Off" : "Phys_On"}
          </Button>
          <div className="p-3 bg-white text-black rounded-xl hover:rotate-12 transition-transform cursor-pointer">
            <ShoppingCart size={18} />
          </div>
        </div>
      </nav>

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-purple-500 z-[1000] origin-left" style={{ scaleX }} />

      {/* 🚀 HERO SECTION: BEYOND DESIGN */}
      <main className="relative z-10 pt-64 pb-20 flex flex-col items-center px-6">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="max-w-7xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-12"
          >
            <Sparkles size={12} className="text-purple-400" />
            <span className="text-[9px] font-black tracking-[6px] uppercase text-zinc-400">Revolutionizing Commerce</span>
          </motion.div>

          <h2 className="text-[22vw] md:text-[16rem] font-black tracking-[-0.09em] leading-[0.75] italic uppercase mb-16 select-none">
            SHIP<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-500 to-zinc-900 drop-shadow-[0_20px_50px_rgba(168,85,247,0.3)]">LOOT X</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
            <motion.div animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
              <Button 
                onMouseMove={magnetic} onMouseLeave={reset} onClick={() => { triggerScan(); }}
                className="bg-white text-black px-16 py-14 rounded-3xl font-black text-2xl hover:bg-purple-600 hover:text-white transition-all shadow-[0_30px_60px_rgba(255,255,255,0.1)] group"
              >
                INITIALIZE DROP <ArrowUpRight className="ml-3 group-hover:rotate-45 transition-transform" size={28} />
              </Button>
            </motion.div>
            
            <div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-xl flex items-center gap-6 group hover:border-purple-500/50 transition-all cursor-pointer">
               <div className="relative">
                  <Fingerprint size={40} className="text-purple-500" />
                  <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
               </div>
               <div className="text-left">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Master Status</p>
                  <p className="text-xl font-black italic uppercase">Access_Granted</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* 🛍️ DYNAMIC PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-64 px-6 w-full">
           {[1, 2, 3].map((item) => (
             <motion.div
               key={item}
               whileHover={{ y: -20, rotateY: 10 }}
               className="group relative bg-zinc-900/20 border border-white/5 p-12 rounded-[60px] backdrop-blur-3xl overflow-hidden"
             >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-600/10 blur-[80px] group-hover:bg-purple-600/30 transition-all" />
                
                <div className="h-64 mb-10 flex items-center justify-center relative">
                   <Box size={100} className="text-zinc-800 group-hover:text-white group-hover:scale-110 transition-all duration-700 z-10" />
                   <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/20 rounded-full scale-50 group-hover:scale-100 transition-all duration-1000" />
                </div>

                <div className="relative z-10">
                  <span className="text-purple-500 font-black text-[10px] tracking-widest uppercase">Generation_Alpha</span>
                  <h3 className="text-5xl font-black italic uppercase mt-2 mb-6">UNIT_0{item}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-black italic">$1,499</span>
                    <Button variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white hover:text-black">ACQUIRE</Button>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </main>

      {/* 📊 ADMIN OVERLAY: QUANTUM DASHBOARD */}
      <AnimatePresence>
        {isAdminMode && (
          <motion.div
            initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}
            className="fixed top-24 right-6 bottom-6 w-full md:w-96 z-[90] bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-10">
              <h4 className="text-2xl font-black italic uppercase">Master_Command</h4>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>

            <div className="space-y-6">
              {[
                { label: "Neural Integrity", val: "99.2%", icon: Scan },
                { label: "Global Traffic", val: "1.2M/sec", icon: Globe },
                { label: "Stripe Sync", val: "Active", icon: Wallet },
                { label: "Encryption", val: "AES-512", icon: Lock }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 flex items-center gap-4">
                  <stat.icon className="text-purple-500" size={20} />
                  <div>
                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-lg font-black uppercase italic">{stat.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-purple-600/10 border border-purple-500/20 rounded-3xl">
               <p className="text-[10px] font-bold italic mb-4 opacity-70">TERMINAL_OUTPUT</p>
               <div className="font-mono text-[9px] text-purple-300 space-y-1">
                 <p>{">"} SYS_CHECK_OK</p>
                 <p className="animate-pulse">{">"} READY_FOR_DEPLOYMENT_V12</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🤖 MASTER AI BRAIN: DRAGGABLE CONCIERGE */}
      <motion.div drag whileDrag={{ scale: 1.1, rotate: 10 }} className="fixed bottom-8 left-8 z-[500] cursor-grab active:cursor-grabbing">
        <div className="bg-white text-black px-8 py-6 rounded-[35px] flex items-center gap-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-[6px] border-black">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center relative overflow-hidden">
             <Bot size={24} className="text-purple-500 z-10" />
             <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-purple-500/20 blur-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Assistant</span>
            <span className="text-md font-black uppercase italic tracking-tighter">AI: EVOLUTION_ACTIVE</span>
          </div>
        </div>
      </motion.div>

      {/* 🌐 OMEGA TERMINAL FOOTER */}
      <footer className="py-32 px-6 border-t border-white/5 mt-64 bg-zinc-950/30 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
           <div className="space-y-6">
              <h5 className="text-6xl font-black italic uppercase tracking-tighter">SHIPLOOT X</h5>
              <div className="flex gap-6">
                <Twitter className="text-zinc-600 hover:text-white transition-colors cursor-pointer" size={20} />
                <Github className="text-zinc-600 hover:text-white transition-colors cursor-pointer" size={20} />
                <Globe className="text-zinc-600 hover:text-white transition-colors cursor-pointer" size={20} />
              </div>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
              <div className="space-y-4">
                <p className="text-[10px] font-black text-purple-500 uppercase tracking-widest">Protocol</p>
                <ul className="text-zinc-500 space-y-2 text-xs font-bold uppercase italic">
                  <li className="hover:text-white cursor-pointer transition-colors">Neural_Link</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Quantum_Auth</li>
                </ul>
              </div>
              <div className="space-y-4 text-right md:text-left">
                <p className="text-[10px] font-black text-purple-500 uppercase tracking-widest">Design</p>
                <p className="text-[10px] font-black uppercase italic text-zinc-400">Masterbrain_V12.0</p>
                <p className="text-[8px] font-bold opacity-30">© 2026 REVOLUTION</p>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
