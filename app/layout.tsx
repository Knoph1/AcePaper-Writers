import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: {
    default: "AcePaper Writers - We Write. You Excel.",
    template: "%s | AcePaper Writers",
  },
  description:
    "Professional academic and business writing services by expert writers. Quality content, on-time delivery, and affordable prices.",
  applicationName: "AcePaper Writers",
  authors: [{ name: "Sylvester Omondi", url: "https://acepaper-writers.com" }],
  keywords: [
    "acepaper writers",
    "online writing",
    "academic writing",
    "professional writing",
    "freelance writing",
    "acepaper-writers",
    "sylvester omondi",
    "writing",
    "essay writing",
    "research papers",
    "dissertation writing",
    "thesis writing",
    "business writing",
    "content writing",
    "custom writing",
  ],
  creator: "Sylvester Omondi",
  publisher: "AcePaper Writers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.acepaper-writers.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-us",
    },
  },
  openGraph: {
    title: "AcePaper Writers - Professional Academic & Business Writing Services",
    description:
      "Connect with expert writers for high-quality academic and business content. Streamlined process, secure payments, and exceptional results.",
    url: "https://acepaper-writers.com",
    siteName: "AcePaper Writers",
    images: [
      {
        url: "https://acepaper-writers.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AcePaper Writers - Professional Writing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcePaper Writers - Professional Academic & Business Writing Services",
    description:
      "Connect with expert writers for high-quality academic and business content. Streamlined process, secure payments, and exceptional results.",
    images: ["https://acepaper-writers.com/twitter-image.jpg"],
    creator: "@acepaperwriters",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "Academic Writing Services",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
