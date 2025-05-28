"use client";

import React, { useEffect, useRef } from "react";

export default function GridPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set up canvas dimensions
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Grid settings
    const gridSize = 40;
    const dotSize = 1;
    let time = 0;

    // Animation function
    const animate = () => {
      time += 0.1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create grid of dots
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        for (let y = gridSize; y < canvas.height; y += gridSize) {
          // Calculate distance from center for intensity
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const distance = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );
          const maxDistance =
            Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) /
            2;
          const intensity = 1 - distance / maxDistance;

          // Add slight movement to each dot
          const offsetX = Math.sin(time * 0.01 + y * 0.01) * 2;
          const offsetY = Math.cos(time * 0.01 + x * 0.01) * 2;

          // Fade dots based on distance from center
          ctx.fillStyle = `rgba(255, 255, 255, ${0.2 * intensity})`;
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, dotSize, 0, Math.PI * 2);
          ctx.fill();

          // Draw connecting lines if dots are close enough
          if (x < canvas.width - gridSize && y < canvas.height - gridSize) {
            // Horizontal line
            ctx.beginPath();
            ctx.moveTo(x + offsetX, y + offsetY);
            ctx.lineTo(
              x + gridSize + Math.sin(time * 0.01 + (y + gridSize) * 0.01) * 2,
              y + offsetY
            );
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * intensity})`;
            ctx.stroke();

            // Vertical line
            ctx.beginPath();
            ctx.moveTo(x + offsetX, y + offsetY);
            ctx.lineTo(
              x + offsetX,
              y + gridSize + Math.cos(time * 0.01 + (x + gridSize) * 0.01) * 2
            );
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * intensity})`;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-20" />;
}
