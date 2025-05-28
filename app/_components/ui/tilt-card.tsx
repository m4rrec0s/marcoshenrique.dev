"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  glareOpacity?: number;
  tiltAmount?: number;
  borderRadius?: number;
  perspective?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  glareColor = "#ffffff",
  glareOpacity = 0.2,
  tiltAmount = 10,
  borderRadius = 12,
  perspective = 1000,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Transform to -1 to 1 range
    const xPercent = (x / rect.width) * 2 - 1;
    const yPercent = (y / rect.height) * 2 - 1;

    // Calculate rotation (inverted for natural feel)
    const rotX = -yPercent * tiltAmount;
    const rotY = xPercent * tiltAmount;

    setRotation({ x: rotX, y: rotY });
    setGlarePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        perspective: `${perspective}px`,
        borderRadius: `${borderRadius}px`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        },
      }}
    >
      {/* Card content */}
      <motion.div
        className="w-full h-full"
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
        animate={{
          z: isHovered ? 50 : 0,
        }}
      >
        {children}
      </motion.div>

      {/* Glare effect */}
      {glare && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at ${glarePosition.x}px ${glarePosition.y}px, ${glareColor} 0%, transparent 70%)`,
            mixBlendMode: "overlay",
            borderRadius: `${borderRadius}px`,
          }}
          animate={{
            opacity: isHovered ? glareOpacity : 0,
          }}
          transition={{
            opacity: { duration: 0.3 },
          }}
        />
      )}

      {/* Subtle border glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: `${borderRadius}px`,
          border: "1px solid transparent",
        }}
        animate={{
          boxShadow: isHovered
            ? "0 0 15px 2px rgba(3, 140, 127, 0.2), inset 0 0 15px 2px rgba(3, 140, 127, 0.1)"
            : "0 0 0 0 transparent, inset 0 0 0 0 transparent",
        }}
        transition={{
          boxShadow: { duration: 0.3 },
        }}
      />
    </motion.div>
  );
}
