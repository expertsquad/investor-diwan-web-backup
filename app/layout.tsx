import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollButton from "@/components/Shared/ScrollButton";

const dmSans = DM_Sans({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Investor Diwan | Home",
  description: "Investor Diwan Qatar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-[#14001E]  scroll-smooth`}>
        <Header />

        {children}

        <Footer />

        <ScrollButton />
      </body>
    </html>
  );
}
