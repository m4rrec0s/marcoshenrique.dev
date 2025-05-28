"use client";

import React, { useEffect, useRef } from "react";

interface MatrixCodeRainProps {
  color?: string;
  fontSize?: number;
  opacity?: number;
  speed?: number;
  density?: number;
  className?: string;
}

export default function MatrixCodeRain({
  color = "#038C7F",
  fontSize = 12,
  opacity = 0.8,
  speed = 50,
  density = 0.05,
  className = "",
}: MatrixCodeRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Character set for the matrix
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]:;\"',./<>?|\\`~!@#$%^&*()_+-=";

    // Create an array of drops - one per column
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      // Start each drop at a random position above the canvas
      drops[i] = Math.floor(Math.random() * -100);
    }

    // Drawing function
    function draw() {
      // Add semi-transparent black rectangle on top of previous frame
      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      // Loop through the drops
      for (let i = 0; i < drops.length; i++) {
        // Only draw if this column is active (based on density)
        if (Math.random() < density) {
          // Choose a random character
          const char = chars[Math.floor(Math.random() * chars.length)];

          // Calculate x position (center character)
          const x = i * fontSize;

          // Calculate y position
          const y = drops[i] * fontSize;

          // Set alpha based on distance from top of trail
          const alpha = opacity * (1 - Math.random() * 0.1);
          ctx.fillStyle = color
            .replace(")", `, ${alpha})`)
            .replace("rgb", "rgba");

          // Draw character
          if (y > 0 && y < canvas.height) ctx.fillText(char, x, y);

          // Move drop down
          drops[i]++;

          // Reset drop to top with small random delay if it's at the bottom
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
            drops[i] = Math.floor(Math.random() * -20);
          }
        }
      }
    }

    // Animation loop
    const interval = setInterval(draw, speed);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, [color, fontSize, opacity, speed, density]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
