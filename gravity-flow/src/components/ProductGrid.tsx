import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const products = [
  { id: 1, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", name: "SNEAKER_X", code: "UNIT_01_RELOAD" },
  { id: 2, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", name: "QUANTUM_WATCH", code: "UNIT_02_SYNC" },
  { id: 3, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", name: "NEURAL_SONIC", code: "UNIT_03_LINK" },
  { id: 4, img: "https://images.unsplash.com/photo-1526170315870-ef6897388a22", name: "OPTIC_CORE", code: "UNIT_04_VIEW" },
  { id: 5, img: "https://images.unsplash.com/photo-1585333127302-0402878346f3", name: "TITAN_PEN", code: "UNIT_05_WRITE" },
  { id: 6, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f", name: "VOID_GLASSES", code: "UNIT_06_SCAN" },
];

export const QuantumCubeGrid = () => {
  const [entropy, setEntropy] = useState(0.992);
  const [glitch, setGlitch] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(mouseY, [-400, 400], [45, -45]);
  const rotateY = useTransform(mouseX, [-400, 400], [-45, 45]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntropy(Math.random() * (0.999 - 0.990) + 0.990);
      if(Math.random() > 0.9) setGlitch(true);
      else setGlitch(false);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen py-20 bg-[#020202] overflow-hidden flex flex-col items-center justify-center font-mono cursor-none"
    >
      {/* 🧬 ALPHA_NEXUS BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full opacity-20 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan" />
      </div>

      {/* 🟢 CUSTOM CURSOR (World Control Point) */}
      <motion.div 
        className="fixed w-4 h-4 border border-cyan-400 z-[100] rounded-full pointer-events-none"
        style={{ x: mouseX, y: mouseY, left: '50%', top: '50%' }}
      />

      <div className="z-10 text-center mb-16 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] text-emerald-500 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          SYSTEM_STATUS: ALPHA_REVOLUTION_ACTIVE
        </div>
        
        <h1 className={`text-6xl font-black tracking-tighter text-white uppercase transition-all duration-75 ${glitch ? 'skew-x-12 translate-x-1 text-red-500' : ''}`}>
          ALPH<span className="text-purple-600">A</span>_NEXUS
        </h1>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent my-2" />
        <p className="text-[10px] text-zinc-500 tracking-[1em]">GLOBAL_CONTROL_v1.0</p>
      </div>

      {/* 📦 THE REVOLUTION CUBE */}
      <div className="relative w-80 h-80 perspective-2000">
        <motion.div 
          style={{ rotateX, rotateY }}
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative preserve-3d"
        >
          {[
            { pos: "translateZ(160px)", img: products[0] },
            { pos: "translateZ(-160px) rotateY(180deg)", img: products[1] },
            { pos: "translateX(160px) rotateY(90deg)", img: products[2] },
            { pos: "translateX(-160px) rotateY(-90deg)", img: products[3] },
            { pos: "translateY(-160px) rotateX(90deg)", img: products[4] },
            { pos: "translateY(160px) rotateX(-90deg)", img: products[5] },
          ].map((face, i) => (
            <div 
              key={i}
              style={{ transform: face.pos }}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl border-2 border-white/5 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden shadow-[0_0_50px_-12px_rgba(168,85,247,0.4)]"
            >
              {/* FACE HUD ELEMENTS */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="absolute top-2 left-2 text-[8px] text-white/40 flex flex-col">
                <span>COORD: {i+1}.0.4</span>
                <span className="text-cyan-500 font-bold">STABLE</span>
              </div>
              
              <img 
                src={face.img.img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000" 
              />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white text-black text-[9px] font-black px-2 py-0.5 inline-block mb-1">
                  {face.img.code}
                </div>
                <div className="text-xl text-white font-black italic tracking-tighter drop-shadow-lg">
                  {face.img.name}
                </div>
              </div>

              {/* SCANNER LINE ON FACE */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-20 w-full animate-scan-face pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🧬 NEXT-GEN DATA ANALYTICS */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl border-y border-white/5 py-10 px-6">
        <div className="flex flex-col">
          <span className="text-zinc-600 text-[10px] mb-2 uppercase">Core Synchronization</span>
          <span className="text-white text-xl font-bold italic">{(entropy * 100).toFixed(4)}%</span>
        </div>
        <div className="flex flex-col border-l border-white/5 pl-6">
          <span className="text-zinc-600 text-[10px] mb-2 uppercase">Uplink Encryption</span>
          <span className="text-emerald-500 text-xl font-bold tracking-widest">AES_256</span>
        </div>
        <div className="flex flex-col border-l border-white/5 pl-6">
          <span className="text-zinc-600 text-[10px] mb-2 uppercase">World Traffic</span>
          <span className="text-white text-xl font-bold uppercase">Active_Global</span>
        </div>
        <div className="flex flex-col border-l border-white/5 pl-6">
          <span className="text-zinc-600 text-[10px] mb-2 uppercase">Control Protocol</span>
          <span className="text-purple-500 text-xl font-bold italic">ALPHA_CMD</span>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        @keyframes scan-face {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        .animate-scan { animation: scan 8s linear infinite; }
        .animate-scan-face { animation: scan-face 3s ease-in-out infinite; }
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};
