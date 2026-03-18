import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "./_components/ui/sonner";
import { Separator } from "./_components/ui/separator";

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
    <html lang="pt-BR">
      <body className={`${montserrat.className} dark bg-black scroll-smooth`}>
        <main className="flex-1 flex flex-col justify-center items-center w-full">
          {children}
        </main>
        <Separator className="opacity-20" />
        <footer className="w-full flex justify-center items-center py-6">
          <p className="text-xs font-semibold text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Marcos Henrique Araújo. All rights
            reserved.
          </p>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
