import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/app/providers";
import NeonCursor from "@/components/NeonCurson";

export const metadata = {
  title: "D-Tech | Future In Our Hands",
  description:
    "D-Tech is a digital solution company focusing on scalable systems, modern architectures, and future-ready applications.",
  openGraph: {
    title: "D-Tech | Future In Our Hands",
    description:
      "We build scalable digital systems for the future — powered by innovation, technology, and expertise.",
    url: "https://d-tech.dev",
    siteName: "D-Tech",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 800,
        alt: "D-Tech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "D-Tech",
            url: "https://d-tech.dev",
            logo: "https://d-tech.dev/icon.png",
            sameAs: [
              "https://www.linkedin.com/in/aryadsstr",
              "https://github.com/aryadsstr"
            ],
            description: "D-Tech provides fullstack, system analyst, and DevOps services.",
          }),
        }}
      />

      <body className="bg-dark text-light transition-colors duration-300">
        <NeonCursor />
        <Providers>
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
