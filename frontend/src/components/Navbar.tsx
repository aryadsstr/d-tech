"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-dark-bg/80 backdrop-blur-lg border-b border-primary/20 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-primary text-xl font-bold">D-Tech.dev</h1>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-primary transition-colors ${
                  path === item.href ? "text-primary" : "text-light-text"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
