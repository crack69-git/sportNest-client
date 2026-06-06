import { Inter } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/Components/Shared/NavbarSection";
import FooterSection from "@/Components/Shared/FooterSection";
import { Bounce, ToastContainer } from "react-toastify";

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
        <main className="flex-1">
          {children}
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </main>
        <FooterSection />
        {/* <ToastContainer /> */}
      </body>
    </html>
  );
}
