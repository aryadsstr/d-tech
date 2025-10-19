"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-dark/90 dark:bg-black/80 py-2 shadow-lg"
          : "bg-dark/40 dark:bg-black/40 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <Link href="/" className="flex items-center gap-3 magnetic">
          <Image src="/icon.png" alt="D-Tech Logo" width={40} height={40} />
          <span className="hidden sm:block text-primary font-semibold tracking-widest">
            D-TECH
          </span>
        </Link>
        <ul className="flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-light/80 hover:text-primary dark:text-light"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="border border-primary text-primary px-3 py-1 rounded-md hover:bg-primary hover:text-black transition"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
