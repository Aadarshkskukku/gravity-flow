import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center, Stars } from '@react-three/drei';

export default function App() {
  return (
      <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                    <color attach="background" args={['#050505']} />
                            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                                    <ambientLight intensity={0.5} />
                                            <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFD700" />
                                                    <Suspense fallback={null}>
                                                              <Center>
                                                                          <mesh rotation={[0.5, 0.5, 0]}>
                                                                                        <boxGeometry args={[2, 2, 2]} />
                                                                                                      <meshStandardMaterial 
                                                                                                                      color="#FFD700" 
                                                                                                                                      metalness={0.9} 
                                                                                                                                                      roughness={0.1} 
                                                                                                                                                                      emissive="#221100"
                                                                                                                                                                                    />
                                                                                                                                                                                                </mesh>
                                                                                                                                                                                                          </Center>
                                                                                                                                                                                                                  </Suspense>
                                                                                                                                                                                                                          <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.5} />
                                                                                                                                                                                                                                </Canvas>
                                                                                                                                                                                                                                      <div style={{ 
                                                                                                                                                                                                                                              position: 'absolute', 
                                                                                                                                                                                                                                                      top: '10%', 
                                                                                                                                                                                                                                                              width: '100%', 
                                                                                                                                                                                                                                                                      textAlign: 'center', 
                                                                                                                                                                                                                                                                              color: '#FFD700', 
                                                                                                                                                                                                                                                                                      pointerEvents: 'none',
                                                                                                                                                                                                                                                                                              fontFamily: 'sans-serif' 
                                                                                                                                                                                                                                                                                                    }}>
                                                                                                                                                                                                                                                                                                            <h1 style={{ fontSize: '3.5rem', margin: 0, fontWeight: '900', textShadow: '0 0 20px rgba(255,215,0,0.5)' }}>SHIPLOOT X</h1>
                                                                                                                                                                                                                                                                                                                    <p style={{ letterSpacing: '8px', opacity: 0.8, fontSize: '0.8rem' }}>LUXURY 3D EXPERIENCE</p>
                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                }import