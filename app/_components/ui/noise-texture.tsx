"use client";

import React, { useEffect, useRef } from "react";

export default function NoiseTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 200;
    canvas.height = 200;

    // Create noise pattern
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      // Make noise very subtle
      data[i] = 255; // r
      data[i + 1] = 255; // g
      data[i + 2] = 255; // b
      data[i + 3] = value < 200 ? 0 : 10; // alpha (very transparent)
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
  }, []);

  return (
    <div className="fixed inset-0 -z-10 opacity-10 pointer-events-none">
      <canvas ref={canvasRef} />
    </div>
  );
}
