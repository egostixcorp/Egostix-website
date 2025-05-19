import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme-provider";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
