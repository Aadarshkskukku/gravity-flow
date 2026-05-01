import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Environment, Text, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// 10.50.100 Gravity Flow Animation & Discount Logic
function RubiksCube() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    // Cinematic Rotation
    meshRef.current.rotation.x += delta * 0.4;
    meshRef.current.rotation.y += delta * 0.2;
    // Gravity pulse effect
    const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.03;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />

      {/* Simplified Box for instant build - Upload image placeholders later */}
      <Box ref={meshRef} args={[2, 2, 2]} position={[0, 0, 0]} >
        <meshStandardMaterial color="#a855f7" metalness={0.9} roughness={0.1} emissive="#6020c0" emissiveIntensity={0.2} />
      </Box>

      <Text
        position={[0, 2.8, 0]}
        color="#a855f7"
        fontSize={0.2}
        maxWidth={3}
        textAlign="center"
        font="https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZZ2-2_7wB4m57e-k-7G_G.woff"
      >
        {"DISCOUNT CODE UNLOCKED!\nCODE: SUPREME_CORE_20"}
      </Text>
      
      <Sparkles count={50} scale={3} size={2} color="#a855f7" />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000', margin: 0, overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 1.5, 6], fov: 60 }}>
        <Suspense fallback={null}>
          <RubiksCube />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
