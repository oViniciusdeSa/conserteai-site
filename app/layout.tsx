import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://conserteaí.com.br"),

  title: {
    default: "ConserteAí | Desentupidora 24h em São Paulo",
    template: "%s | ConserteAí",
  },

  description:
    "Desentupidora 24 horas em São Paulo e Grande SP. Serviços de desentupimento, caça vazamentos, limpeza de caixa de gordura e hidráulica emergencial.",

  keywords: [
    "desentupidora em São Paulo",
    "desentupidora 24 horas",
    "desentupimento de esgoto",
    "desentupimento de pia",
    "caça vazamentos",
    "hidráulica emergencial",
    "limpeza de caixa de gordura",
    "desentupidora Grande São Paulo",
  ],

  authors: [{ name: "ConserteAí" }],
  creator: "ConserteAí",
  publisher: "ConserteAí",

  openGraph: {
    title: "ConserteAí | Desentupidora 24h em São Paulo",
    description:
      "Atendimento 24 horas para desentupimentos, caça vazamentos e emergências hidráulicas em São Paulo e Grande SP.",
    url: "https://conserteaí.com.br",
    siteName: "ConserteAí",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo-conserteai.png",
        width: 1200,
        height: 630,
        alt: "ConserteAí — Desentupimento e Hidráulica 24h",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ConserteAí | Desentupidora 24h em São Paulo",
    description:
      "Desentupimento, caça vazamentos e hidráulica emergencial 24 horas em São Paulo e Grande SP.",
    images: ["/logo-conserteai.png"],
  },

  robots: {
    index: true,
    follow: true,
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
