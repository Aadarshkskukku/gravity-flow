import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Cubelet = ({ position, textures }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      {textures.map((tex, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={tex} metalness={0.6} roughness={0.2} />
      ))}
    </mesh>
  );
};

const WorldClassCube = () => {
  const groupRef = useRef();
  
  // ലേറ്റസ്റ്റ് പ്രോഡക്റ്റ് ഇമേജുകൾ (നിങ്ങളുടെ ലിങ്ക് ഇവിടെ നൽകാം)
  const texs = useTexture([
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff', // Nike Shoes
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30', // Watch
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', // Headphones
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f', // Camera
    'https://images.unsplash.com/photo-1542219170-2c8dd68194cc', // Perfume
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'  // Tech
  ]);

  const cubelets = useMemo(() => {
    const items = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          items.push([x, y, z]);
        }
      }
    }
    return items;
  }, []);

  return (
    <group ref={groupRef}>
      {cubelets.map((pos, i) => (
        <Cubelet key={i} position={pos} textures={texs} />
      ))}
    </group>
  );
};

export default function Index() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#050505' }}>
      <Canvas shadows>
        {/* ക്യാമറ ദൂരം കൂട്ടിയത് വഴി ക്യൂബ് കൃത്യമായി കാണാം */}
        <PerspectiveCamera makeDefault position={[6, 6, 6]} fov={40} />
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        
        <React.Suspense fallback={null}>
          <WorldClassCube />
          <Environment preset="night" />
          <ContactShadows position={[0, -3, 0]} opacity={0.6} scale={10} blur={2.5} />
        </React.Suspense>

        {/* റിയൽ ഗെയിം കൺട്രോൾസ് */}
        <OrbitControls enableDamping={true} rotateSpeed={0.6} minDistance={5} maxDistance={12} />
      </Canvas>
      
      {/* HUD UI - Branding */}
      <div style={{ position: 'absolute', top: 40, left: 40, color: 'white', fontFamily: 'Arial Black' }}>
        <h1 style={{ fontSize: '2rem', letterSpacing: '-2px' }}>SHIPLOOT <span style={{color: '#a855f7'}}>X</span></h1>
      </div>
    </div>
  );
}
