import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, Zap, Shield, Layers, Globe, Binary, Activity, Fingerprint, Database } from "lucide-react";
import { useEffect, useState } from "react";

// --- GLOBAL MASTERBRAIN DATA SOURCE ---
const products = [
  { id: 1, name: "NEURAL_CORE_V12", price: "2.40 ETH", icon: Cpu, color: "rgba(168, 85, 247, 0.6)", status: "SYNAPTIC_LINK_OK", load: "12%" },
  { id: 2, name: "QUANTUM_LINK", price: "1,800 USD", icon: Zap, color: "rgba(59, 130, 246, 0.6)", status: "ENCRYPTED_STREAM", load: "45%" },
  { id: 3, name: "VOID_ENCRYPTION", price: "0.55 BTC", icon: Shield, color: "rgba(16, 185, 129, 0.6)", status: "AES-1024_ACTIVE", load: "02%" },
  { id: 4, name: "BIO_SCANNER_S5", price: "950 USD", icon: Fingerprint, color: "rgba(249, 115, 22, 0.6)", status: "BIOMETRIC_SYNC", load: "88%" },
  { id: 5, name: "ORBITAL_OS", price: "5,000 USD", icon: Globe, color: "rgba(236, 72, 153, 0.6)", status: "SATELLITE_UPLINK", load: "31%" },
  { id: 6, name: "DATA_ARCHITECT", price: "7,200 USD", icon: Database, color: "rgba(6, 182, 212, 0.6)", status: "ROOT_ACCESS_GRANTED", load: "19%" },
];

const QuantumCard = ({ product }: { product: typeof products[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative group h-[450px] bg-zinc-950 border border-white/5 rounded-[50px] flex flex-col items-center justify-between p-10 cursor-crosshair overflow-hidden transition-all duration-700 hover:border-purple-500/50 hover:shadow-[0_0_80px_rgba(168,85,247,0.15)]"
    >
      {/* 🧬 Background Neural Mesh */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      {/* 🔮 Dynamic Aura Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity blur-[100px] duration-1000"
        style={{ background: `radial-gradient(circle at center, ${product.color} 0%, transparent 70%)` }}
      />

      {/* 🛰️ Floating Core Unit */}
      <div style={{ transform: "translateZ(100px)" }} className="relative flex flex-col items-center">
        <div className="p-8 bg-zinc-900/50 rounded-full border border-white/10 group-hover:scale-110 group-hover:border-white/30 transition-all duration-700">
          <product.icon size={60} className="text-white group-hover:drop-shadow-[0_0_20px_white]" />
        </div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -inset-2 border-t border-b border-purple-500/30 rounded-full" />
      </div>

      {/* 📊 Intelligence Readout */}
      <div style={{ transform: "translateZ(60px)" }} className="w-full space-y-6 z-10 text-center">
        <div>
          <h3 className="text-3xl font-black italic tracking-tighter text-white group-hover:tracking-widest transition-all duration-500">{product.name}</h3>
          <div className="flex justify-center items-center gap-3 mt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase">{product.status}</span>
          </div>
        </div>

        <div className="flex justify-between items-end border-t border-white/5 pt-6">
          <div className="text-left">
            <p className="text-[8px] font-bold text-zinc-600 uppercase mb-1">Processing_Load</p>
            <div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
               <motion.div initial={{ width: 0 }} whileInView={{ width: product.load }} className="h-full bg-purple-500" />
            </div>
          </div>
          <p className="text-2xl font-black italic text-white group-hover:text-purple-400 transition-colors">{product.price}</p>
        </div>
      </div>

      {/* 🚀 Advanced Acquisition Trigger */}
      <button className="absolute bottom-[-100px] group-hover:bottom-6 w-[80%] py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full transition-all duration-500 hover:bg-purple-600 hover:text-white">
        EXECUTE_PROTOCOL
      </button>
    </motion.div>
  );
};

export const QuantumGrid = () => {
  return (
    <div className="relative py-40 px-6 bg-black min-h-screen">
      {/* 🌍 World Node Interface */}
      <div className="max-w-7xl mx-auto mb-32 relative">
        <div className="absolute -top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <h2 className="text-8xl font-black italic tracking-tighter uppercase leading-[0.8]">
          <span className="text-white">QUANTUM_</span><br/>
          <span className="text-zinc-800 outline-text group-hover:text-zinc-700">DISTRIBUTION</span>
        </h2>
        <div className="mt-8 flex gap-8 items-center">
          <div className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-[10px] font-black text-emerald-500 tracking-widest uppercase">
            System_Status: Optimal
          </div>
          <div className="text-zinc-600 text-[10px] font-medium tracking-[0.2em]">
            GLOBAL_UID: 0x992_BRAIN_V12
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => <QuantumCard key={p.id} product={p} />)}
      </div>

      {/* 🌌 Atmospheric Particles */}
      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
        }
      `}</style>
    </div>
  );
};
