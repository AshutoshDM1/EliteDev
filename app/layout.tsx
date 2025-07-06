import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Ashutosh Tiwari - Elite Full Stack Developer & UI/UX Designer",
    template: "%s | Ashutosh Tiwari"
  },
  description: "Elite Full Stack Developer & UI/UX Designer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences with cutting-edge solutions.",
  keywords: [
    "Ashutosh Tiwari",
    "Full Stack Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
    "Elite Developer",
    "Modern Web Development",
    "Responsive Design",
    "API Development",
    "Database Design",
    "Cloud Solutions"
  ],
  authors: [{ name: "Ashutosh Tiwari" }],
  creator: "Ashutosh Tiwari",
  publisher: "Ashutosh Tiwari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://elitedev.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitedev.tech",
    title: "Ashutosh Tiwari - Elite Full Stack Developer & UI/UX Designer",
    description: "Elite Full Stack Developer & UI/UX Designer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences with cutting-edge solutions.",
    siteName: "Ashutosh Tiwari Portfolio",
    images: [
      {
        url: "/main.png",
        width: 1200,
        height: 630,
        alt: "Ashutosh Tiwari - Elite Full Stack Developer Portfolio",
      },
      {
        url: "/main.png",
        width: 800,
        height: 600,
        alt: "Ashutosh Tiwari Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Tiwari - Elite Full Stack Developer & UI/UX Designer",
    description: "Elite Full Stack Developer & UI/UX Designer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences.",
    creator: "@ashutoshtiwari",
    site: "@ashutoshtiwari",
    images: [
      {
        url: "/main.png",
        alt: "Ashutosh Tiwari - Elite Full Stack Developer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO and Performance Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ashutosh Tiwari",
              jobTitle: "Full Stack Developer & UI/UX Designer",
              description: "Elite Full Stack Developer & UI/UX Designer specializing in React, Next.js, Node.js, and modern web technologies.",
              url: "https://elitedev.tech", // Replace with your actual domain
              image: "https://elitedev.tech/main.png", // Replace with your actual domain
              sameAs: [
                "https://github.com/ashutoshtiwari", // Replace with your actual profiles
                "https://linkedin.com/in/ashutoshtiwari",
                "https://twitter.com/ashutoshtiwari",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "UI/UX Design",
                "Full Stack Development",
                "Web Development",
                "API Development",
                "Database Design"
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance Developer"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#ffffff]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
