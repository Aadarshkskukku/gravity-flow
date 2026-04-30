import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Center, 
  Stars, 
  Float, 
  MeshDistortMaterial, 
  PerspectiveCamera,
} from '@react-three/drei';
import * as THREE from 'three';

// --- 🤖 THE NEURAL MONOLITH CORE ---
function NeuralMonolith() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.4;
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.position.y = Math.sin(t) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.5;
    }
  });

  return (
    <group>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh ref={meshRef} castShadow>
          <octahedronGeometry args={[1.5, 0]} />
          <MeshDistortMaterial 
            color="#FFD700" 
            speed={5} 
            distort={0.4} 
            radius={1} 
            metalness={1} 
            roughness={0} 
          />
        </mesh>
      </Float>

      {/* Cybernetic Pulse Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshStandardMaterial 
          color="#00ffcc" 
          emissive="#00ffcc" 
          emissiveIntensity={10} 
          toneMapped={false} 
        />
      </mesh>
    </group>
  );
}

// --- 🎇 DATA PARTICLES (Background Intelligence) ---
function DataParticles() {
  const points = useMemo(() => {
    const p = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) p[i] = (Math.random() - 0.5) * 20;
    return p;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={points.length / 3} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00ffcc" transparent opacity={0.4} />
    </points>
  );
}

// --- 🌏 MAIN ARCHITECT INTERFACE ---
export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000', position: 'relative', overflow: 'hidden' }}>
      
      {/* HUD - SCANNED SYSTEM OVERLAY */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '40px',
        zIndex: 10,
        color: '#00ffcc',
        fontFamily: '"Courier New", monospace',
        pointerEvents: 'none',
        textShadow: '0 0 15px rgba(0,255,204,0.8)'
      }}>
        <h1 style={{ letterSpacing: '12px', margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>SHIPLOOT X</h1>
        <p style={{ color: '#ffffff', opacity: 0.6, marginTop: '8px' }}>ARCHITECT: AADARSH | STATUS: REVOLUTION_ACTIVE</p>
        
        <div style={{ fontSize: '12px', marginTop: '30px', borderLeft: '2px solid #00ffcc', paddingLeft: '15px' }}>
          <div style={{ marginBottom: '5px' }}>{" > "} INITIALIZING_NEURAL_LINK... OK</div>
          <div style={{ marginBottom: '5px' }}>{" > "} SUPREME_CORE_V15_DEPLOYED</div>
          <div style={{ marginBottom: '5px' }}>{" > "} TERMUX_NODE_V25_OPTIMIZED</div>
          <div style={{ color: '#FFD700' }}>{" > "} MASTER_CONTROL_GRANTED</div>
        </div>
      </div>

      <Canvas shadows gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
        <color attach="background" args={['#010101']} />
        
        <Stars radius={100} depth={50} count={8000} factor={4} saturation={0} fade speed={1} />
        <DataParticles />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#FFD700" />
        <spotLight position={[-10, 10, 5]} angle={0.15} penumbra={1} intensity={2} color="#00ffcc" />

        <Suspense fallback={null}>
          <Center>
            <NeuralMonolith />
          </Center>
        </Suspense>

        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          maxDistance={15} 
          minDistance={4} 
        />
      </Canvas>

      {/* FOOTER METRICS */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        width: '100%',
        textAlign: 'center',
        color: 'rgba(0,255,204,0.3)',
        fontFamily: 'monospace',
        fontSize: '10px',
        letterSpacing: '2px'
      }}>
        [LATENCY: 0.02ms] | [CORES: 16] | [OWNER: AADARSH] | 2026-FINAL-REV
      </div>
    </div>
  );
}
