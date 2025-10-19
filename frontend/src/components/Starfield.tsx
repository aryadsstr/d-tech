"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Import 2D fallback
import Starfield2D from "./Starfield2d";

// Lazy load 3D component (biar gak berat waktu SSR)
const Starfield3D = dynamic(() => import("./Starfield3d"), { ssr: false });

export default function Starfield() {
  const [use3D, setUse3D] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    setUse3D(width > 768); // di atas 768px pakai 3D
  }, []);

  return use3D ? <Starfield3D /> : <Starfield2D />;
}
