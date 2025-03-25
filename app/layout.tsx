import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "./_components/ui/sonner";
import { BackgroundLines } from "./_components/ui/background-lines";

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
    <html lang="pt-BR" className="">
      <body className={montserrat.className}>
        <BackgroundLines className="bg-background">{children}</BackgroundLines>

        <Toaster />
      </body>
    </html>
  );
}
