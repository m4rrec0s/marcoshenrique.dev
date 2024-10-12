import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "./_components/ui/background-beams";
import { Toaster } from "./_components/ui/sonner";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcos Araujo",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={montserrat.className}>
        {children}
        {/* <BackgroundBeams /> */}
        <Toaster />
      </body>
    </html>
  );
}
