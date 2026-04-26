import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, ArrowRight, Zap, MessageCircle, Star, 
  ShieldCheck, Coins, TrendingUp, Cpu, Activity, 
  Globe, Fingerprint, Box, ChevronRight 
} from 'lucide-react';
import { Button } from "../components/ui/button.tsx";
import { cn, calculateDemandScore, formatNeuralPrice } from "../lib/utils.ts";

const CURRENCIES = {
  USD: { symbol: '$', rate: 1 },
  INR: { symbol: '₹', rate: 83.5 },
  AED: { symbol: 'DH', rate: 3.67 },
  BTC: { symbol: '₿', rate: 0.000015 },
  ETH: { symbol: 'Ξ', rate: 0.00028 }
};

const Index = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [activeUsers, setActiveUsers] = useState(142);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stock, setStock] = useState(3);
  const [score, setScore] = useState(88);

  // 🧠 NEURAL CORE LOGIC: Dynamic Real-time Updates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    
    const neuralHeartbeat = setInterval(() => {
      const newUserCount = activeUsers + Math.floor(Math.random() * 5);
      setActiveUsers(newUserCount);
      setScore(calculateDemandScore(85, newUserCount % 20));
    }, 5000);

    const stockDepletion = setInterval(() => {
      setStock(prev => (prev > 1 ? prev - 1 : 3));
    }, 60000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(neuralHeartbeat);
      clearInterval(stockDepletion);
    };
  }, [activeUsers]);

  const getPrice = (usd: number) => {
    const cur = CURRENCIES[selectedCurrency as keyof typeof CURRENCIES];
    return formatNeuralPrice(usd * cur.rate, selectedCurrency);
  };

  return (
    <div className="bg-[#020202] text-white min-h-screen selection:bg-purple-600 font-sans overflow-x-hidden">
      
      {/* 🔮 NEURAL OVERLAY: Advanced Liquid Environment */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, #5b21b6 0%, transparent 45%)`,
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.1),transparent_50%)]" />
      </div>

      {/* 🛰️ OMNI-HUD: Global Navigation 4.0 */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center backdrop-blur-2xl border-b border-white/5 bg-black/40">
        <div className="group cursor-pointer">
          <motion.h1 
            whileHover={{ skewX: -10, scale: 1.05 }} 
            className="text-3xl font-black italic tracking-tighter uppercase leading-none"
          >
            SHIPLOOT <span className="text-purple-600 underline decoration-double">X</span>
          </motion.h1>
          <div className="flex items-center gap-2 mt-1">
             <Activity size={10} className="text-green-500 animate-pulse" />
             <span className="text-[8px] font-black tracking-[4px] text-gray-500 uppercase">{activeUsers} NODES ACTIVE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6 bg-white/5 border border-white/10 p-2 pl-6 rounded-full backdrop-blur-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <div className="hidden lg:flex items-center gap-4 px-4 border-r border-white/10">
            <span className="text-[8px] font-black text-purple-400 uppercase tracking-widest animate-pulse">Demand Score: {score}%</span>
          </div>
          <select 
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="bg-transparent text-[10px] font-black outline-none uppercase tracking-[2px] cursor-pointer hover:text-purple-400 transition-colors"
          >
            {Object.keys(CURRENCIES).map(code => <option key={code} value={code} className="bg-black text-white">{code}</option>)}
          </select>
          <motion.div 
            whileTap={{ scale: 0.9 }}
            className="relative p-4 bg-purple-600 rounded-full hover:bg-purple-500 cursor-pointer shadow-lg shadow-purple-600/30 group"
          >
            <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 bg-white text-black text-[9px] w-5 h-5 flex items-center justify-center rounded-full font-black border-2 border-black">2</span>
          </motion.div>
        </div>
      </nav>

      {/* 🚀 KINETIC HERO: The Powerhouse */}
      <main className="relative z-10 pt-64 pb-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          <div className={cn(
            "inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border transition-all duration-700 mb-12 backdrop-blur-xl",
            score > 90 ? "border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]" : "border-white/10"
          )}>
            <Cpu size={14} className="text-purple-500 animate-spin-slow" />
            <span className="text-[10px] font-black tracking-[6px] uppercase text-purple-300">Omni-Gen Protocol v4.0</span>
          </div>
          
          <h2 className="text-[18vw] md:text-[16rem] font-black tracking-[-0.08em] leading-[0.7] italic uppercase mb-16 select-none">
            AIR <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-800 drop-shadow-2xl">DRIVE</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-10">
            <Button className="bg-white text-black px-20 py-12 rounded-full font-black text-2xl hover:bg-purple-600 hover:text-white transition-all transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(124,58,237,0.4)] group">
              INITIATE DROP <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
            <div className="text-left border-l-2 border-purple-600/50 pl-10 space-y-2">
               <div className="flex items-center gap-2">
                  <Fingerprint size={16} className="text-purple-500" />
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[4px]">Biometric Secured</p>
               </div>
               <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-white" />
                  <span className="text-xl font-black italic tracking-tighter uppercase">SHIPLOOT AUTHENTIC</span>
               </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* 💎 PRODUCT SHOWCASE: Next-Gen Grid */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-10 max-w-[1500px] mx-auto pb-64">
        
        {/* CARD: PHANTOM RED */}
        <motion.div 
          whileHover={{ y: -25, scale: 1.02 }} 
          className="group h-[850px] bg-[#050505] rounded-[90px] border border-white/5 relative p-16 overflow-hidden bg-gradient-to-br from-red-950/20 via-transparent to-transparent shadow-2xl transition-all"
        >
          <div className="flex justify-between items-start z-20 relative">
            <div className="bg-red-600 text-white px-8 py-3 rounded-full text-[10px] font-black tracking-[3px] uppercase animate-pulse shadow-lg shadow-red-600/40">
              URGENT: {stock} UNITS LEFT
            </div>
            <div className="p-4 bg-black/40 rounded-3xl backdrop-blur-md border border-white/5 flex gap-1">
               {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#7c3aed" className="text-purple-600" />)}
            </div>
          </div>
          
          <h3 className="text-[8rem] font-black italic tracking-tighter leading-[0.8] mt-24 mb-6 uppercase z-20 relative mix-blend-difference">
            PHANTOM<br/><span className="text-red-600">RED</span>
          </h3>

          <div className="space-y-6 z-20 relative">
            <p className="text-8xl font-black tracking-tighter italic">{getPrice(399)}</p>
            <div className="inline-flex items-center gap-4 bg-white/5 px-8 py-4 rounded-full border border-white/10 backdrop-blur-3xl group-hover:border-purple-500/50 transition-colors">
               <Coins size={20} className="text-yellow-500" />
               <span className="text-[14px] font-black uppercase tracking-widest text-gray-300">OMNI-LEDGER VERIFIED</span>
            </div>
          </div>

          <div className="mt-20 p-12 bg-white/5 rounded-[60px] border border-white/10 backdrop-blur-3xl group-hover:bg-white/[0.07] transition-all relative z-20">
             <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-black uppercase text-gray-500 tracking-[5px]">Network Load</span>
                <span className="text-red-500 font-black italic text-sm tracking-tighter animate-bounce">SYNCING...</span>
             </div>
             <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden p-1">
                <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: `${score}%` }} 
                   transition={{ duration: 2, ease: "easeOut" }} 
                   className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 h-full rounded-full" 
                />
             </div>
          </div>

          <Button className="absolute bottom-16 left-16 right-16 py-12 rounded-[50px] bg-white text-black font-black text-2xl hover:bg-red-600 hover:text-white transition-all shadow-2xl z-20">
            ADD TO COLLECTION
          </Button>
        </motion.div>

        {/* CARD: NEON VOLT */}
        <motion.div 
          whileHover={{ y: -25, scale: 1.02 }} 
          className="group h-[850px] bg-[#050505] rounded-[90px] border border-purple-500/20 relative p-16 overflow-hidden bg-gradient-to-br from-purple-900/20 via-transparent to-transparent shadow-2xl transition-all"
        >
          <div className="flex justify-between items-start z-20 relative">
             <div className="p-6 bg-purple-600/20 rounded-full border border-purple-500/30">
                <TrendingUp className="text-purple-500 w-12 h-12" />
             </div>
             <div className="text-right">
                <p className="text-[12px] font-black text-gray-500 tracking-[6px] uppercase">Elite Asset</p>
                <div className="flex items-center gap-2 mt-2 justify-end">
                   <Box size={14} className="text-purple-500" />
                   <p className="text-sm font-bold text-white tracking-widest uppercase">ID: SFX-042</p>
                </div>
             </div>
          </div>
          
          <h3 className="text-[8rem] font-black italic tracking-tighter leading-[0.8] mt-24 mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-neutral-700 z-20 relative">
            NEON<br/>VOLT
          </h3>
          <p className="text-8xl font-black tracking-tighter italic mb-10 z-20 relative">{getPrice(449)}</p>
          
          <div className="grid grid-cols-2 gap-8 mt-6 z-20 relative">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[50px] backdrop-blur-3xl group-hover:bg-purple-600/10 transition-colors">
               <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-4">Architecture</p>
               <p className="font-black text-2xl italic uppercase text-purple-400">NEURAL-KNIT</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[50px] backdrop-blur-3xl group-hover:bg-purple-600/10 transition-colors">
               <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-4">Availability</p>
               <p className="font-black text-2xl italic uppercase text-white">GLOBAL-SYNC</p>
            </div>
          </div>

          <Button className="absolute bottom-16 left-16 right-16 py-12 rounded-[50px] bg-purple-600 text-white font-black text-2xl hover:bg-white hover:text-black transition-all shadow-2xl z-20">
            SECURE UNIT
          </Button>
        </motion.div>

      </section>

      {/* 💬 NEURAL CHAT CONCIERGE */}
      <div className="fixed bottom-12 right-12 z-[200]">
        <motion.button 
          whileHover={{ scale: 1.15, rotate: -15 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white w-28 h-28 rounded-full shadow-[0_40px_100px_rgba(255,255,255,0.2)] flex items-center justify-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <MessageCircle size={44} className="text-black z-10 group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 bg-red-600 text-[10px] font-black px-4 py-2 rounded-full border-4 border-black animate-bounce shadow-xl">
            AI LIVE
          </div>
        </motion.button>
      </div>

    </div>
  );
};

export default Index;
