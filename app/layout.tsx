import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollButton from "@/components/Shared/ScrollButton";

const dmSans = DM_Sans({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Diwan | Home",
  description: "Student Diwan Qatar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${dmSans.className}   scroll-smooth overflow-y-auto overflow-x-hidden`}>
        <Header />

        {children}

        <Footer />

        <ScrollButton />
      </body>
    </html>
  );
}
