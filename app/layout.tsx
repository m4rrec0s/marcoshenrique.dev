import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "./_components/ui/sonner";
import Header from "./_components/header";
import { Separator } from "./_components/ui/separator";
import AdvancedBackground from "./_components/ui/advanced-background";

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
      <body
        className={`${montserrat.className} flex flex-col min-h-screen relative dark`}
      >
        <AdvancedBackground enableMatrix={true} />
        <Header />
        <main className="flex-1 flex flex-col justify-center items-center w-full relative z-10">
          {children}
        </main>
        <Separator className="opacity-50" />
        <footer className="w-full flex justify-center items-center py-6 relative z-10">
          <p className="text-xs font-semibold text-center">
            © {new Date().getFullYear()} Marcos Henrique Araújo. All rights
            reserved.
          </p>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
