import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, ArrowRight, Zap, Globe, MessageCircle, Star, ShieldCheck, Coins, TrendingUp, Cpu, Activity, ZapOff } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    const userInterval = setInterval(() => setActiveUsers(prev => prev + Math.floor(Math.random() * 3)), 8000);
    const stockInterval = setInterval(() => setStock(prev => (prev > 1 ? prev - 1 : 3)), 60000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(userInterval);
      clearInterval(stockInterval);
    };
  }, []);

  const getPrice = (usd: number) => {
    const cur = CURRENCIES[selectedCurrency as keyof typeof CURRENCIES];
    return `${cur.symbol}${(usd * cur.rate).toLocaleString(undefined, { 
      maximumFractionDigits: selectedCurrency.length > 2 ? 6 : 2 
    })}`;
  };

  return (
    <div ref={containerRef} className="bg-[#020202] text-white min-h-screen selection:bg-purple-600 font-sans overflow-x-hidden">
      
      {/* 🔮 NEURAL OVERLAY: DYNAMIC INTERACTIVE ENVIRONMENT */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, #4c1d95 0%, transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 w-full h-[1000px] bg-gradient-to-b from-purple-900/10 via-transparent to-transparent blur-[120px]" />
      </div>

      {/* 🛰️ GLOBAL HUD: ELITE NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-black/20">
        <div className="group cursor-pointer">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none group-hover:skew-x-[-10deg] transition-transform">
            SHIPLOOT <span className="text-purple-600 underline decoration-double">X</span>
          </h1>
          <div className="flex items-center gap-2 mt-1">
             <Activity size={10} className="text-green-500 animate-pulse" />
             <span className="text-[8px] font-black tracking-[3px] text-gray-500 uppercase">{activeUsers} LIVE NODES</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8 bg-white/5 border border-white/10 p-2 pl-6 rounded-full backdrop-blur-2xl">
          <div className="hidden md:flex gap-6 text-[9px] font-black tracking-[4px] text-gray-400 uppercase">
             <span className="hover:text-white cursor-pointer">Archive</span>
             <span className="hover:text-white cursor-pointer text-purple-500">Neural Labs</span>
          </div>
          <select 
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="bg-transparent text-[10px] font-black outline-none uppercase tracking-[2px] cursor-pointer"
          >
            {Object.keys(CURRENCIES).map(code => <option key={code} value={code} className="bg-black text-white">{code}</option>)}
          </select>
          <div className="relative p-4 bg-purple-600 rounded-full hover:scale-110 transition-all cursor-pointer group">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black border-2 border-purple-600">2</span>
          </div>
        </div>
      </nav>

      {/* 🚀 KINETIC CORE: HERO SECTION */}
      <main className="relative z-10 pt-64 pb-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-10 shadow-2xl backdrop-blur-xl">
            <Cpu size={14} className="text-purple-500 animate-spin-slow" />
            <span className="text-[10px] font-black tracking-[6px] uppercase text-purple-300">Gravity Flow 2.0 Enabled</span>
          </div>
          
          <h2 className="text-[18vw] md:text-[20rem] font-black tracking-[-0.09em] leading-[0.7] italic uppercase mb-12">
            AIR <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-900 drop-shadow-2xl">DRIVE</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-20">
            <Button size="lg" className="bg-white text-black px-20 py-12 rounded-full font-black text-2xl hover:bg-purple-600 hover:text-white transition-all transform hover:-translate-y-2 group">
              INITIATE DROP <ArrowRight className="ml-4 group-hover:translate-x-3 transition-transform" />
            </Button>
            <div className="text-left border-l-2 border-purple-600/50 pl-10 space-y-2">
               <p className="text-[10px] font-black text-gray-500 uppercase tracking-[4px]">Verified Infrastructure</p>
               <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-purple-500" />
                  <span className="text-xl font-black italic tracking-tighter uppercase">Shiploot AI Secured</span>
               </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* 💎 OMNI-SHOWCASE: PRODUCT GRID */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-10 max-w-[1400px] mx-auto pb-64">
        
        {/* CARD 01: PHANTOM RED */}
        <motion.div 
          whileHover={{ y: -25, rotateY: -5 }} 
          className="group h-[850px] bg-[#050505] rounded-[80px] border border-white/5 relative p-16 overflow-hidden bg-gradient-to-br from-red-950/20 via-transparent to-transparent"
        >
          <div className="flex justify-between items-start z-20 relative">
            <div className="bg-red-600 text-white px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase animate-pulse shadow-lg shadow-red-600/20">
              URGENT: {stock} UNITS LEFT
            </div>
            <div className="flex gap-1 bg-black/50 p-3 rounded-full backdrop-blur-md">
               {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#7c3aed" className="text-purple-600" />)}
            </div>
          </div>
          
          <h3 className="text-[8rem] font-black italic tracking-tighter leading-[0.8] mt-20 mb-6 uppercase z-20 relative">PHANTOM<br/><span className="text-red-600">RED</span></h3>
          <div className="space-y-4 z-20 relative">
            <p className="text-7xl font-black tracking-tighter italic">{getPrice(399)}</p>
            <div className="inline-flex items-center gap-3 bg-white/5 px-6 py-3 rounded-3xl border border-white/10 backdrop-blur-2xl">
               <Coins size={16} className="text-yellow-500" />
               <span className="text-[12px] font-black uppercase">{(399 * 0.000015).toFixed(6)} BTC</span>
            </div>
          </div>
          
          <div className="mt-16 p-10 bg-white/5 rounded-[60px] border border-white/10 backdrop-blur-3xl group-hover:border-purple-500/50 transition-all z-20 relative">
             <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-black uppercase text-gray-400 tracking-[4px]">Market Demand Score</span>
                <span className="text-red-500 font-black italic text-sm tracking-tighter">PHASE: CRITICAL</span>
             </div>
             <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden p-1 border border-white/5">
                <motion.div initial={{ width: 0 }} animate={{ width: '98%' }} transition={{ duration: 4, ease: "easeOut" }} className="bg-gradient-to-r from-red-600 to-purple-600 h-full rounded-full" />
             </div>
          </div>

          <Button className="absolute bottom-16 left-16 right-16 py-12 rounded-[50px] bg-white text-black font-black text-2xl hover:bg-red-600 hover:text-white transition-all shadow-[0_40px_80px_rgba(0,0,0,0.5)] z-20">ADD TO VAULT</Button>
        </motion.div>

        {/* CARD 02: NEON VOLT */}
        <motion.div 
          whileHover={{ y: -25, rotateY: 5 }} 
          className="group h-[850px] bg-[#050505] rounded-[80px] border border-purple-500/20 relative p-16 overflow-hidden bg-gradient-to-br from-purple-900/10 via-transparent to-transparent shadow-[0_0_100px_rgba(124,58,237,0.05)]"
        >
          <div className="flex justify-between items-start z-20 relative">
             <TrendingUp className="text-purple-500 w-16 h-16 animate-bounce" />
             <div className="text-right">
                <p className="text-[11px] font-black text-gray-500 tracking-[5px] uppercase">Limited Deployment</p>
                <p className="text-sm font-bold text-white tracking-widest mt-2 uppercase border-b-2 border-purple-600 inline-block">Asset #042/100</p>
             </div>
          </div>
          
          <h3 className="text-[8rem] font-black italic tracking-tighter leading-[0.8] mt-20 mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-neutral-700 z-20 relative">NEON<br/>VOLT</h3>
          <p className="text-7xl font-black tracking-tighter italic mb-8 z-20 relative">{getPrice(449)}</p>
          
          <div className="grid grid-cols-2 gap-6 mt-10 z-20 relative">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] backdrop-blur-3xl group-hover:bg-purple-600/5 transition-colors">
               <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Core Tech</p>
               <p className="font-black text-xl italic uppercase text-purple-400">NEURAL-KNIT</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] backdrop-blur-3xl group-hover:bg-purple-600/5 transition-colors">
               <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Environment</p>
               <p className="font-black text-xl italic uppercase text-white">METAVERSE +</p>
            </div>
          </div>

          <Button className="absolute bottom-16 left-16 right-16 py-12 rounded-[50px] bg-purple-600 text-white font-black text-2xl hover:bg-white hover:text-black transition-all shadow-[0_40px_80px_rgba(124,58,237,0.3)] z-20">SECURE UNIT</Button>
        </motion.div>

      </section>

      {/* 💬 NEURAL CONCIERGE: FLOATING ASSISTANT */}
      <div className="fixed bottom-12 right-12 z-[200]">
        <motion.button 
          whileHover={{ scale: 1.15, rotate: -15 }}
          className="bg-white w-28 h-28 rounded-full shadow-[0_40px_100px_rgba(255,255,255,0.15)] flex items-center justify-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <MessageCircle size={42} className="text-black relative z-10" />
          <div className="absolute -top-2 -right-2 bg-red-600 text-[10px] font-black px-4 py-1.5 rounded-full border-4 border-black animate-bounce">AI LIVE</div>
        </motion.button>
      </div>

    </div>
  );
};

export default Index;
