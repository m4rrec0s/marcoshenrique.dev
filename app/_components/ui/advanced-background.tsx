"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/_lib/utils";
import MatrixCodeRain from "./matrix-code-rain";

interface AdvancedBackgroundProps {
  enableMatrix?: boolean;
  enableTechGrid?: boolean;
  enableParticles?: boolean;
  enableCyberLines?: boolean;
}

export default function AdvancedBackground({
  enableMatrix = false,
  enableTechGrid = true,
  enableParticles = true,
  enableCyberLines = true,
}: AdvancedBackgroundProps) {
  return (
    <>
      {/* Base dark background */}
      <div className="fixed inset-0 -z-20 bg-[#030014]" />

      {/* Optional Matrix rain effect */}
      {enableMatrix && (
        <MatrixCodeRain
          color="rgba(3, 140, 127, 0.6)"
          opacity={0.5}
          density={0.03}
          className="-z-19"
        />
      )}

      {/* Gradient halo effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary center halo with pulsing animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(3, 140, 127, 0.15) 0%, rgba(3, 140, 127, 0) 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Secondary halos for depth */}
        <motion.div
          className="absolute top-[30%] right-[15%] w-[300px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0) 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-[20%] left-[20%] w-[350px] h-[350px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(169, 217, 208, 0.1) 0%, rgba(169, 217, 208, 0) 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      {/* Technical starry grid */}
      {enableTechGrid && <TechGrid />}

      {/* Connected nodes/particles */}
      {enableParticles && <ConnectedNodes />}

      {/* Cybernetic lines */}
      {enableCyberLines && <CyberneticLines />}

      {/* Subtle animated noise overlay */}
      <NoiseOverlay />
    </>
  );
}

// Starry technical grid background
function TechGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Grid settings
    const gridSize = 40;
    const starDensity = 0.1; // 10% of grid points will have stars
    const dotSize = 1;
    let time = 0;

    // Animation function
    const animate = () => {
      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle horizontal and vertical grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 0.5;

      // Horizontal lines
      for (let y = gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Create "stars" at grid intersections
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        for (let y = gridSize; y < canvas.height; y += gridSize) {
          // Only draw stars at some of the grid points for a sparser look
          if (Math.random() > 1 - starDensity) {
            // Calculate distance from center for intensity
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const distance = Math.sqrt(
              Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
            );
            const maxDistance =
              Math.sqrt(
                Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)
              ) / 2;
            const intensity = 1 - distance / maxDistance;

            // Add subtle pulsing effect
            const pulse =
              Math.sin(time * 0.5 + x * 0.01 + y * 0.01) * 0.3 + 0.7;

            // Draw the grid dot
            ctx.fillStyle = `rgba(255, 255, 255, ${0.2 * intensity * pulse})`;
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fill();

            // Occasionally draw a larger star
            if (Math.random() < 0.1) {
              ctx.fillStyle = `rgba(255, 255, 255, ${0.4 * intensity * pulse})`;
              ctx.beginPath();
              ctx.arc(x, y, dotSize * 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
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

  return <canvas ref={canvasRef} className="fixed inset-0 -z-15 opacity-70" />;
}

// Connected nodes with lines, similar to particle networks
function ConnectedNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Node settings
    const nodeCount = Math.min(
      40,
      Math.floor((canvas.width * canvas.height) / 50000)
    );
    const connectionDistance = 200;

    // Define nodes
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color:
        Math.random() < 0.7
          ? "rgba(3, 140, 127, 0.7)"
          : Math.random() < 0.5
          ? "rgba(79, 70, 229, 0.6)"
          : "rgba(255, 255, 255, 0.6)",
    }));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.speedX;
        node.y += node.speedY;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.speedX *= -1;
        if (node.y < 0 || node.y > canvas.height) node.speedY *= -1;

        // Draw node
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Calculate line opacity based on distance
            const opacity = 1 - distance / connectionDistance;

            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
            ctx.lineWidth = opacity * 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
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

  return <canvas ref={canvasRef} className="fixed inset-0 -z-14 opacity-60" />;
}

// Cybernetic decorative lines that appear occasionally
function CyberneticLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Lines settings
    const lines: any[] = [];
    const linesCount = 5;
    let time = 0;

    // Initialize lines
    for (let i = 0; i < linesCount; i++) {
      const isHorizontal = Math.random() > 0.5;
      const lineLength = Math.random() * 200 + 100;

      lines.push({
        isHorizontal,
        position: isHorizontal
          ? Math.random() * canvas.height
          : Math.random() * canvas.width,
        start: 0,
        length: lineLength,
        speed: Math.random() * 3 + 1,
        color:
          Math.random() < 0.6
            ? "rgba(3, 140, 127, 0.4)"
            : "rgba(79, 70, 229, 0.3)",
        active: false,
        activationTime: Math.random() * 200,
        thickness: Math.random() * 1.5 + 0.5,
      });
    }

    // Animation loop
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw lines
      lines.forEach((line) => {
        // Check if it's time to activate a line
        if (!line.active && time % line.activationTime < 1) {
          line.active = true;
          line.start = line.isHorizontal ? -line.length : -line.length;
        }

        // Update active lines
        if (line.active) {
          line.start += line.speed;

          // Reset line when it goes off screen
          if (
            line.start >
            (line.isHorizontal ? canvas.width : canvas.height) + line.length
          ) {
            line.active = false;
            line.position = line.isHorizontal
              ? Math.random() * canvas.height
              : Math.random() * canvas.width;
            line.speed = Math.random() * 3 + 1;
            line.length = Math.random() * 200 + 100;
            line.color =
              Math.random() < 0.6
                ? "rgba(3, 140, 127, 0.4)"
                : "rgba(79, 70, 229, 0.3)";
            line.thickness = Math.random() * 1.5 + 0.5;
          }

          // Draw line
          ctx.strokeStyle = line.color;
          ctx.lineWidth = line.thickness;
          ctx.beginPath();

          if (line.isHorizontal) {
            ctx.moveTo(line.start, line.position);
            ctx.lineTo(line.start + line.length, line.position);
          } else {
            ctx.moveTo(line.position, line.start);
            ctx.lineTo(line.position, line.start + line.length);
          }

          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-13 opacity-70" />;
}

// Subtle noise overlay for added texture
function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // We're creating a small canvas for better performance
    canvas.width = 200;
    canvas.height = 200;

    // Create noise pattern
    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;

        data[i] = 255; // r
        data[i + 1] = 255; // g
        data[i + 2] = 255; // b
        data[i + 3] = value < 230 ? 0 : 15; // Very subtle noise
      }

      ctx.putImageData(imageData, 0, 0);

      // Get base64 image from canvas
      const dataURL = canvas.toDataURL();

      // Apply as background to parent element
      const parent = canvas.parentElement;
      if (parent) {
        parent.style.backgroundImage = `url(${dataURL})`;
        parent.style.backgroundRepeat = "repeat";
        // Hide the canvas since we're using its data as a background
        canvas.style.display = "none";
      }
    };

    createNoise();

    // Recreate noise every few seconds for a subtle animation effect
    const interval = setInterval(createNoise, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-12 opacity-20 pointer-events-none">
      <canvas ref={canvasRef} />
    </div>
  );
}
