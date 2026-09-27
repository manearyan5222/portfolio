import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { PERSONAL_INFO } from "@/data/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F5" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0E" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.primaryIdentity}`,
  description: `${PERSONAL_INFO.heroCopy} Personal portfolio and project case studies of Aryan Mane.`,
  keywords: [
    "Aryan Mane",
    "AI Enthusiast",
    "Student Developer",
    "Computer Vision",
    "Sentinel AI",
    "IoT",
    "Next.js",
    "Software Builder",
    "Full-Stack Developer",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://aryanmane.dev" }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryanmane.dev",
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.primaryIdentity}`,
    description: PERSONAL_INFO.heroCopy,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.primaryIdentity}`,
    description: PERSONAL_INFO.heroCopy,
    creator: "@aryanmanedev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.primaryIdentity,
    description: PERSONAL_INFO.heroCopy,
    url: "https://aryanmane.dev",
    sameAs: [
      PERSONAL_INFO.socials.github,
      PERSONAL_INFO.socials.linkedin,
      PERSONAL_INFO.socials.twitter,
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
