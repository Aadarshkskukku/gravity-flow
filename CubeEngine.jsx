import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls, Box, Text } from '@react-three/drei';

// ആസറ്റുകൾ ഇമ്പോർട്ട് ചെയ്യുക (Upload the square images to 'assets' folder)
const textures = [
  '/assets/sneaker.png',  // Sneaker on Top
  '/assets/emerald.png',  // Emerald Rings
  '/assets/comic1.png',   // Comics
  '/assets/diamond.png',  // Diamond Rings
  '/assets/wedding.png',  // Wedding Jewelry
  '/assets/comic2.png'    // More Comics
];

export default function RubiksCube() {
  const meshRef = useRef();
  const [solved, setSolved] = useState(false);
  const [discountCode, setDiscountCode] = useState(null);

  // Solved state logic - Simplified check
  useEffect(() => {
    if (solved) {
      setDiscountCode('SUPREME_CORE_20'); // 20% Discount
      console.log('Gravity Flow: Cube Solved. Supeme Core Activated.');
    }
  }, [solved]);

  // Touch/Click rotation effect
  const handlePointerDown = (e) => {
    if (solved) return;
    const face = e.intersections[0].faceIndex;
    if (face === 0 || face === 1) { // Rotate Top Face example
       console.log('Rotating Top Face');
       setSolved(true); // Simulate a solve for now
    }
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />

      <Box ref={meshRef} args={[1, 1, 1]} position={[0, 0, 0]} onPointerDown={handlePointerDown}>
        {textures.map((url, index) => (
          <meshStandardMaterial key={index} attach={`material-${index}`} map={new THREE.TextureLoader().load(url)} metalness={0.7} roughness={0.1} />
        ))}
      </Box>

      {solved && discountCode && (
        <Text
          position={[0, 1.5, 0]}
          color="#a855f7"
          fontSize={0.2}
          maxWidth={2}
          textAlign="center"
          font="https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZZ2-2_7wB4m57e-k-7G_G.woff"
        >
          { `DISCOUNT UNLOCKED! CODE: ${discountCode}` }
        </Text>
      )}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
}
