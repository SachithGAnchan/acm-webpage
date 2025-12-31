import React, { useEffect, useRef } from 'react';

const DotsBackground = ({ 
  dotCount = 100,
  dotColor = 'rgba(100, 200, 255, 0.6)',
  dotSize = 2,
  speed = 0.5,
  fadeDistance = 200
}) => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = document.documentElement.scrollHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = document.documentElement.scrollHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', () => {
      height = document.documentElement.scrollHeight;
      canvas.height = height;
    });

    class Dot {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.radius = dotSize + Math.random() * dotSize;
        this.originalRadius = this.radius;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        this.x = Math.max(0, Math.min(width, this.x));
        this.y = Math.max(0, Math.min(height, this.y));

        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < fadeDistance) {
          this.radius = this.originalRadius * (1 + (fadeDistance - distance) / fadeDistance);
        } else {
          this.radius = this.originalRadius;
        }
      }

      draw() {
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let opacity = 0.6;
        if (distance < fadeDistance) {
          opacity = 0.6 + (fadeDistance - distance) / fadeDistance * 0.4;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor.replace(/[\d.]+\)$/, `${opacity})`);
        ctx.fill();
      }
    }

    dotsRef.current = Array.from({ length: dotCount }, () => new Dot());

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      dotsRef.current.forEach(dot => {
        dot.update();
        dot.draw();
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dotCount, dotColor, dotSize, speed, fadeDistance]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default DotsBackground;