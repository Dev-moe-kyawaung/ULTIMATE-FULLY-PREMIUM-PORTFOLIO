import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moe Kyaw Aung — Full-Stack Developer",
  description:
    "Premium developer portfolio showcasing Next.js, React, and full-stack projects by Moe Kyaw Aung.",
  openGraph: {
    title: "Moe Kyaw Aung — Full-Stack Developer",
    description:
      "Premium developer portfolio showcasing Next.js, React, and full-stack projects.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#020617" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
