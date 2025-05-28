"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Create gradient points
    const gradientPoints = [
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.2,
        radius: 300,
        color: "rgba(3, 140, 127, 0.15)",
      }, // Teal
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.8,
        radius: 350,
        color: "rgba(169, 217, 208, 0.15)",
      }, // Light teal
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.3,
        radius: 250,
        color: "rgba(79, 70, 229, 0.1)",
      }, // Indigo
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.7,
        radius: 400,
        color: "rgba(16, 24, 39, 0.2)",
      }, // Dark gray
    ];

    // Animation loop
    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.003;

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient blobs
      gradientPoints.forEach((point, index) => {
        const x = point.x + Math.sin(time + index) * 50;
        const y = point.y + Math.cos(time + index * 0.5) * 50;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, point.radius);
        gradient.addColorStop(0, point.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, point.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80" />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
}
