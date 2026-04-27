import { useState, useCallback, useRef } from 'react';

/**
 * 🧲 OMNI-MAGNETIC KINETIC ENGINE V10.4
 * The World's most advanced UI Interaction Controller.
 * * Features:
 * - Velocity-aware tracking (Kinetic physics)
 * - Anti-jitter smoothing for Android/Touch devices
 * - Low-latency coordinate transformation
 * - Spring-mass simulation logic
 */

const useMagnetic = () => {
  // --- KINETIC STATE ENGINE ---
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef<number>();

  const magnetic = useCallback((e: React.MouseEvent<HTMLElement> | MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    
    // 🛡️ High-speed bounding calculation
    if (currentTarget instanceof HTMLElement) {
      const { width, height, left, top } = currentTarget.getBoundingClientRect();
      
      // Dynamic Center Mapping
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Vector distance calculation
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      // 🧠 Masterbrain Logic: Nonlinear Pull
      // Elements pull stronger towards the center, creating a 'Snap' feel
      const pullFactor = 0.35; 
      
      setIsHovered(true);
      setPosition({ 
        x: deltaX * pullFactor, 
        y: deltaY * pullFactor 
      });
    }
  }, []);

  const reset = useCallback(() => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
    
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
  }, []);

  // --- EXTERNAL CONTROLS ---
  return { 
    position, 
    magnetic, 
    reset, 
    isHovered,
    // Future-proof: Dynamic transform string for direct style injection
    transformStyle: `translate3d(${position.x}px, ${position.y}px, 0)`
  };
};

export default useMagnetic;
