import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xn--consertea-o5a.com.br"),

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
  title: "ConserteAí | Desentupidora 24h em São Paulo",
  description:
    "Atendimento 24 horas para desentupimentos, caça vazamentos e emergências hidráulicas em São Paulo e Grande SP.",
  url: "/",
  siteName: "ConserteAí",
  locale: "pt_BR",
  type: "website",
  images: [
    {
      url: "/og-conserteai.png",
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
  images: ["/og-conserteai.png"],
},

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-conserteai.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://www.xn--consertea-o5a.com.br/#empresa",
  name: "ConserteAí",
  alternateName: "ConserteAí 24h",
  description:
    "Empresa especializada em desentupimento, caça vazamentos, limpeza de caixa de gordura e serviços hidráulicos emergenciais 24 horas.",
  url: "https://www.xn--consertea-o5a.com.br",
  logo: "https://www.xn--consertea-o5a.com.br/logo-conserteai.png",
  image: "https://www.xn--consertea-o5a.com.br/logo-conserteai.png",

  telephone: "+5511925331686",
  email: "contatoconserteai24h@gmail.com",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Francisco Nóbrega Barbosa, 301",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  areaServed: [
    {
      "@type": "City",
      name: "São Paulo",
    },
    {
      "@type": "AdministrativeArea",
      name: "Região do ABC Paulista",
    },
    {
      "@type": "City",
      name: "Guarulhos",
    },
    {
      "@type": "AdministrativeArea",
      name: "Região Metropolitana de São Paulo",
    },
  ],

sameAs: [
  "https://www.instagram.com/conserteai24h",
  "https://www.facebook.com/profile.php?id=61591863178665",
],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5511925331686",
    contactType: "customer service",
    availableLanguage: "Portuguese",
    areaServed: "BR",
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços da ConserteAí",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desentupimento de esgoto",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desentupimento de pia e vaso sanitário",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Caça vazamentos",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Limpeza de caixa de gordura",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hidráulica emergencial",
        },
      },
    ],
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
<body className="min-h-full flex flex-col">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
    }}
  />

  {children}
  <GoogleAnalytics gaId="G-EW8XN4Q7KM" />
</body>
    </html>
  );
}