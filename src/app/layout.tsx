import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "K Rishi Chowdary | Full-Stack Web Developer | Java Enterprise",
  description: "K Rishi Chowdary is a Computer Science & Engineering student at Sai Tirumala NVR, specialized in full-stack web development and Java enterprise technologies. Premium portfolio showcasing full-stack systems, clean architecture, and technical certifications.",
  authors: [{ name: "K Rishi Chowdary" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${caveat.variable} h-full antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-full bg-[#05040a] text-zinc-100 overflow-x-hidden selection:bg-[#8B5CF6] selection:text-[#05040a] font-sans">
        {children}
      </body>
    </html>
  );
}
