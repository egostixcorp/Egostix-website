import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme-provider";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import ProductTeaserCard from "@/components/Card/product-card";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const Barracude = localFont({
  src: [{ path: "./font/Barracuda-regular.ttf" }],
  // display: "swap",
  variable: "--font-barracuda",
});
// const space = Space_Grotesk({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-space",
// });
export const metadata: Metadata = {
  metadataBase: new URL("https://egostix.com/"),
  title: "Egostix Engineering — Empowering Individual Ego to Shape the World",
  description:
    "We are a product innovation company committed to building bold, impactful technologies for the future of health, human life, and society.",
  keywords: [
    "Egostix",
    "Egostic",
    "Egostix Engineering",
    "intelligence infrastructure",
    "cross-industry platform",
    "healthcare technology",
    "defence intelligence",
    "industrial automation",
    "robotics systems",
    "AI decision engine",
    "data interoperability",
    "real-time operations platform",
    "digital nervous system",
  ],
  authors: [{ name: "Egostix Engineering", url: "https://www.egostix.com/" }],
  creator: "Egostix Engineering",
  publisher: "Egostix Engineering",
  openGraph: {
    type: "website",
    url: "https://www.egostix.com/",
    title: "Egostix Engineering — Empowering Individual Ego to Shape the World",
    description:
      "We are a product innovation company committed to building bold, impactful technologies for the future of health, human life, and society.",
    siteName: "Egostix Engineering",
    // images: [
    //   {
    //     url: "/og/egostix-og.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Egostix Engineering — India's Cross-Industry Intelligence Network",
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Egostix Engineering | India's Intelligence Network",
  //   description:
  //     "Unified data architecture, AI decision engine, and real-time interoperability powering the next generation of India's critical industries.",
  //   images: ["/og/egostix-og.png"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${Barracude.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <ProductTeaserCard />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
