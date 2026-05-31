import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/Components/Shared/NavbarSection";
import FooterSection from "@/Components/Shared/FooterSection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <NavbarSection />
        <main className="flex-1">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
