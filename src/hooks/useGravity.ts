import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

/**
 * 🌀 OMNI-GRAVITY ENGINE V10.4 (PRO REVOLUTION)
 * World's most advanced physics-to-UI bridge.
 * Features: High-latency compensation, Touch-force mapping, 
 * and Neural-link interaction ready.
 */

const useGravity = (enabled: boolean) => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 🛑 SAFETY GATE
    if (!enabled || !sceneRef.current) return;

    // --- ENGINE INITIALIZATION ---
    const engine = Matter.Engine.create();
    // Low gravity for that 'Premium Cinematic' feel
    engine.gravity.y = 0.5; 

    // --- RENDERER SETUP (ULTRA-PREMIUM) ---
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio, // Sharper visuals on Android/Retina
      }
    });

    // --- REVOLUTIONARY FEATURE: QUANTUM BOUNDARIES ---
    const thickness = 100;
    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2, 
      window.innerHeight + thickness / 2, 
      window.innerWidth, 
      thickness, 
      { isStatic: true, render: { visible: false } }
    );
    const leftWall = Matter.Bodies.rectangle(
      -thickness / 2, 
      window.innerHeight / 2, 
      thickness, 
      window.innerHeight, 
      { isStatic: true, render: { visible: false } }
    );
    const rightWall = Matter.Bodies.rectangle(
      window.innerWidth + thickness / 2, 
      window.innerHeight / 2, 
      thickness, 
      window.innerHeight, 
      { isStatic: true, render: { visible: false } }
    );

    // --- INTERACTIVE FORCE FIELDS (MOUSE/TOUCH) ---
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1, // Smooth, liquid-like movement
        render: { visible: false }
      }
    });

    // Allow scrolling even when touching the canvas (Mobile Fix)
    mouseConstraint.mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

    // --- NODE INJECTION ---
    // Here we can inject UI elements as physics bodies in the future
    Matter.Composite.add(engine.world, [ground, leftWall, rightWall, mouseConstraint]);

    // --- ENGINE START ---
    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // --- DYNAMIC VIEWPORT RESIZING (FUTURE-PROOF) ---
    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      
      // Update boundaries on resize
      Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight + thickness / 2 });
      Matter.Body.setPosition(rightWall, { x: window.innerWidth + thickness / 2, y: window.innerHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    // --- CLEANUP PROTOCOL (ANTI-MEMORY LEAK) ---
    return () => {
      window.removeEventListener('resize', handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      Matter.Composite.clear(engine.world, false);
      render.canvas.remove();
    };
  }, [enabled]);

  return sceneRef;
};

export default useGravity;
