import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/app/providers";
import NeonCursor from "@/components/NeonCurson";

export const metadata = {
  title: "Arya Disastra | D-Tech — Future In Our Hands",
  description:
    "Official website of Arya Disastra — founder of D-Tech, a digital innovation studio specializing in scalable fullstack, DevOps, and system analysis solutions.",
  keywords: [
    "Arya Disastra",
    "D-Tech",
    "DTech",
    "Fullstack Developer Indonesia",
    "System Analyst Indonesia",
    "DevOps Engineer",
    "Software Engineer Bandung",
    "Web Developer Indonesia",
    "Go Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Docker Engineer",
  ],
  authors: [
    { name: "Arya Disastra", url: "https://d-tech.dev" },
  ],
  creator: "Arya Disastra",
  publisher: "D-Tech",
  openGraph: {
    title: "Arya Disastra | D-Tech — Future In Our Hands",
    description:
      "D-Tech is a digital solution company founded by Arya Disastra, focusing on scalable systems, cloud architectures, and modern applications.",
    url: "https://d-tech.dev",
    siteName: "D-Tech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://d-tech.dev/icon.png",
        width: 1200,
        height: 630,
        alt: "D-Tech | Arya Disastra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Disastra | D-Tech",
    description:
      "Explore Arya Disastra’s projects and digital innovations at D-Tech.",
    creator: "@aryadsstr",
    images: ["https://d-tech.dev/icon.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  metadataBase: new URL("https://d-tech.dev"),
  alternates: {
    canonical: "https://d-tech.dev",
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
            "@type": "Person",
            name: "Arya Disastra",
            url: "https://d-tech.dev",
            jobTitle: "System Analyst, Fullstack Developer, DevOps Engineer",
            worksFor: {
              "@type": "Organization",
              name: "D-Tech",
              url: "https://d-tech.dev",
            },
            sameAs: [
              "https://github.com/aryadsstr",
              "https://www.linkedin.com/in/aryadsstr",
              "https://instagram.com/ardsstr_",
            ],
            image: "https://d-tech.dev/icon.png",
            description:
              "Founder of D-Tech. Expert in system architecture, fullstack web development, and DevOps automation.",
            nationality: "Indonesia",
          }),
        }}
      />
      
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
              "https://github.com/aryadsstr",
              "https://www.linkedin.com/in/aryadsstr",
            ],
            description:
              "D-Tech provides scalable software development, cloud infrastructure, and system design services.",
            founder: {
              "@type": "Person",
              name: "Arya Disastra",
              url: "https://d-tech.dev",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bandung",
              addressRegion: "West Java",
              addressCountry: "ID",
            },
          }),
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "D-Tech",
            url: "https://d-tech.dev",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://d-tech.dev/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
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
