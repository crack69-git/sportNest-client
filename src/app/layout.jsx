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
      suppressContentEditableWarning={true}
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="">
        <NavbarSection />
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
