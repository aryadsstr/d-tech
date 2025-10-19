"use client";
import { useEffect, useRef } from "react";

export default function Starfield2D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const numStars = Math.floor(w / 3); // jumlah bintang dinamis
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * w,
    }));

    const draw = () => {
      ctx.fillStyle = "rgba(10, 15, 31, 0.5)";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#00E0FF";
      stars.forEach((star) => {
        star.z -= 2;
        if (star.z <= 0) {
          star.z = w;
          star.x = Math.random() * w;
          star.y = Math.random() * h;
        }
        const k = 128 / star.z;
        const sx = star.x * k + w / 2;
        const sy = star.y * k + h / 2;
        if (sx >= 0 && sx <= w && sy >= 0 && sy <= h) {
          const size = (1 - star.z / w) * 2;
          ctx.beginPath();
          ctx.arc(sx, sy, size, 0, 2 * Math.PI);
          ctx.fill();
        }
      });
      requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 bg-dark"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
