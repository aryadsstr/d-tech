import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "D-Tech Portfolio",
  description: "Arya Disastra - Fullstack Developer & DevOps Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
