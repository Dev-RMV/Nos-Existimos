import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QRCodeFloat from "@/components/QRCodeFloat";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nós Existimos — Autistas no Mercado de Trabalho",
    template: "%s — Nós Existimos",
  },
  description:
    "Site informativo sobre os direitos, a inclusão e os recursos de apoio para pessoas autistas no mercado de trabalho.",
  keywords: ["autismo", "TEA", "mercado de trabalho", "inclusão", "neurodiversidade", "direitos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main id="conteudo-principal" className="flex-1">
            {children}
          </main>
          <Footer />
          <QRCodeFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
