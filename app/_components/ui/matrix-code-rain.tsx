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

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]:;\"',./<>?|\\`~!@#$%^&*()_+-=";

    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }
    function draw() {
      if (!ctx) return;

      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() < density) {
          const char = chars[Math.floor(Math.random() * chars.length)];

          const x = i * fontSize;

          const y = drops[i] * fontSize;

          const alpha = opacity * (1 - Math.random() * 0.1);
          ctx.fillStyle = color
            .replace(")", `, ${alpha})`)
            .replace("rgb", "rgba");

          if (y > 0 && y < (canvas?.height ?? 0)) ctx.fillText(char, x, y);

          drops[i]++;

          if (drops[i] * fontSize > (canvas?.height ?? 0) && Math.random() > 0.98) {
            drops[i] = Math.floor(Math.random() * -20);
          }
        }
      }
    }

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
