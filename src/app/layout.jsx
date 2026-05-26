import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/Components/Shared/NavbarSection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Homepage",
  description:
    "This is the homepage of the sports facility booking application.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressContentEditableWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarSection />
        <main>{children}</main>
      </body>
    </html>
  );
}
