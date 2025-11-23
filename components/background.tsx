import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const dots: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = [];
    const spacing = 40; 
    const mouse = { x: -1000, y: -1000 };

    const initDots = () => {
      dots.length = 0;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            originX: i * spacing + spacing / 2,
            originY: j * spacing + spacing / 2,
            vx: 0,
            vy: 0
          });
        }
      }
    };

    initDots();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initDots();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = '#050505'; // Match body background
      ctx.fillRect(0, 0, width, height);

      const maxDist = 150;

      dots.forEach((dot) => {
        // Physics
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Spring back to origin
        const springForce = 0.05;
        const ax = (dot.originX - dot.x) * springForce;
        const ay = (dot.originY - dot.y) * springForce;
        
        dot.vx += ax;
        dot.vy += ay;
        
        // Friction
        dot.vx *= 0.9;
        dot.vy *= 0.9;

        // Mouse Interaction (Repel)
        if (dist < maxDist) {
          const angle = Math.atan2(dy, dx);
          const force = (maxDist - dist) / maxDist;
          const push = -2; // Repel force
          
          dot.vx += Math.cos(angle) * push * force;
          dot.vy += Math.sin(angle) * push * force;
        }

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Draw Grid Dot
        const isActive = dist < maxDist;
        
        // If close to mouse, draw lines to neighbors
        // This is too expensive O(N^2), so we just draw line to mouse if close
        if (isActive) {
           ctx.beginPath();
           ctx.moveTo(dot.x, dot.y);
           ctx.lineTo(mouse.x, mouse.y);
           ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * ((maxDist - dist) / maxDist)})`;
           ctx.stroke();
           
           ctx.fillStyle = '#06b6d4';
           ctx.beginPath();
           ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
           ctx.fill();
        } else {
           ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
           ctx.beginPath();
           ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
           ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default Background;