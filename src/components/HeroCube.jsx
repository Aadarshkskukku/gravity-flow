import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// 1. ഓരോ ഫെയ്‌സിലും ഇമേജ് ലോഡ് ചെയ്യാനുള്ള ലോജിക്
const CubeFace = ({ index, textureUrl, position, rotation }) => {
  const [hovered, setHover] = useState(false);
  
  return (
    <mesh 
      position={position} 
      rotation={rotation}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => window.location.href = `/product/${index}`}
    >
      <planeGeometry args={[0.95, 0.95]} />
      <meshStandardMaterial 
        color={hovered ? "#9b51e0" : "#ffffff"} 
        emissive={hovered ? "#9b51e0" : "#000000"}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// 2. മെയിൻ സിനിമാറ്റിക് ക്യൂബ് എഞ്ചിൻ
const KineticCube = () => {
  const cubeRef = useRef();

  // ഓട്ടോമാറ്റിക് റൊട്ടേഷൻ ലോജിക്
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    cubeRef.current.rotation.x = THREE.MathUtils.lerp(cubeRef.current.rotation.x, Math.cos(t / 2) / 8 + 0.25, 0.1);
    cubeRef.current.rotation.y = THREE.MathUtils.lerp(cubeRef.current.rotation.y, Math.sin(t / 4) / 4, 0.1);
    cubeRef.current.rotation.z = THREE.MathUtils.lerp(cubeRef.current.rotation.z, Math.sin(t / 4) / 4, 0.1);
  });

  return (
    <group ref={cubeRef}>
      {/* മെയിൻ ക്യൂബ് ബോഡി - Obsidian Finish */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <MeshDistortMaterial 
          color="#050505" 
          speed={2} 
          distort={0.1} 
          metalness={1} 
          roughness={0.1} 
        />
      </mesh>

      {/* പർപ്പിൾ എനർജി ഗ്ലോ - Core Vortex */}
      <mesh scale={1.1}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#9b51e0" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
};

export default function HeroScene() {
  return (
    <div className="h-screen w-full bg-[#000000]">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={40} />
        
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#9b51e0" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />

        <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
          <KineticCube />
        </Float>

        {/* ഷാഡോ ഇഫക്റ്റ് - പ്രീമിയം ലുക്കിനായി */}
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} color="#9b51e0" />

        <OrbitControls enableZoom={false} enablePan={false} dampingFactor={0.05} />
      </Canvas>
      
      {/* Overlay Text */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-black tracking-tighter opacity-10 blur-[2px]">SHIPLOOT X</h1>
      </div>
    </div>
  );
}
