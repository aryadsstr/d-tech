"use client";
import { useEffect, useRef } from "react";

export default function Starfield2D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resizeCanvas = () => {
      // Pastikan ukuran canvas sesuai viewport sebenarnya
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);

    const w = window.innerWidth;
    const h = window.innerHeight;

    // Jumlah bintang dinamis tergantung lebar layar
    const numStars = Math.floor(w < 768 ? w / 2 : w / 1.5);

    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * w,
    }));

    const draw = () => {
      ctx.fillStyle = "rgba(10, 15, 31, 0.4)";
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

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        backgroundColor: "#0A0F1F",
      }}
    />
  );
}
