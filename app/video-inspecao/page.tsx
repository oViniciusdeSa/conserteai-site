import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Vídeo Inspeção de Tubulações em São Paulo | Atendimento 24h",
  description:
    "Vídeo inspeção de tubulações em São Paulo e Grande SP para identificar obstruções, rachaduras, infiltrações e problemas internos sem quebras desnecessárias.",

  alternates: {
    canonical: "/video-inspecao",
  },

  openGraph: {
    title: "Vídeo Inspeção de Tubulações em São Paulo | ConserteAí",
    description:
      "Inspeção interna de tubulações com câmera profissional em São Paulo e Grande SP.",
    url: "/video-inspecao",
    type: "website",
    images: [
      {
        url: "/og-conserteai.png",
        width: 1200,
        height: 630,
        alt: "ConserteAí — Vídeo Inspeção de Tubulações",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vídeo Inspeção de Tubulações | ConserteAí",
    description:
      "Diagnóstico interno de tubulações com câmera profissional.",
    images: ["/og-conserteai.png"],
  },
};

const whatsappUrl =
  "https://wa.me/5511925331686?text=Ol%C3%A1!%20Encontrei%20a%20p%C3%A1gina%20de%20v%C3%ADdeo%20inspe%C3%A7%C3%A3o%20da%20ConserteA%C3%AD%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const faqItems = [
  {
    question: "O que é vídeo inspeção de tubulações?",
    answer:
      "É um procedimento realizado com uma câmera própria para visualizar o interior da tubulação e identificar obstruções, rachaduras, infiltrações, objetos e outros problemas.",
  },
  {
    question: "A vídeo inspeção evita quebras?",
    answer:
      "Ela ajuda a localizar o problema com mais precisão antes de qualquer intervenção, reduzindo a possibilidade de quebras desnecessárias.",
  },
  {
    question: "Em quais tubulações o serviço pode ser realizado?",
    answer:
      "A aplicação depende do diâmetro, do acesso e das condições da rede. Pode ser utilizada em redes de esgoto, ralos, colunas, ramais, galerias e outras tubulações compatíveis.",
  },
  {
    question: "A câmera consegue identificar raízes e rachaduras?",
    answer:
      "Sim. Quando o acesso permite, a inspeção pode revelar raízes, fissuras, deslocamentos, deformações, objetos e resíduos acumulados.",
  },
  {
    question: "A ConserteAí atende 24 horas?",
    answer:
      "Sim. A equipe realiza atendimentos emergenciais 24 horas por dia, inclusive aos finais de semana e feriados.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vídeo Inspeção de Tubulações",
  description:
    "Serviço de inspeção interna de tubulações com câmera profissional em São Paulo e Grande São Paulo.",
  provider: {
    "@type": "Plumber",
    name: "ConserteAí",
    telephone: "+5511925331686",
    url: "https://www.xn--consertea-o5a.com.br",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Região Metropolitana de São Paulo",
  },
  serviceType: "Vídeo inspeção de tubulações",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.xn--consertea-o5a.com.br/video-inspecao",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+5511925331686",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  },
};

const problems = [
  {
    title: "Obstruções internas",
    description:
      "A câmera ajuda a visualizar gordura, resíduos, objetos e outros materiais que bloqueiam a passagem.",
  },
  {
    title: "Rachaduras e fissuras",
    description:
      "A inspeção pode revelar danos estruturais, trincas e pontos de infiltração na tubulação.",
  },
  {
    title: "Raízes na rede",
    description:
      "Raízes podem invadir tubos subterrâneos e causar redução de vazão, rompimentos e entupimentos.",
  },
  {
    title: "Deslocamentos e deformações",
    description:
      "Tubulações desalinhadas, deformadas ou parcialmente rompidas podem ser identificadas durante a inspeção.",
  },
];

const applications = [
  "Redes de esgoto",
  "Ralos e ramais",
  "Colunas prediais",
  "Tubulações residenciais",
  "Condomínios",
  "Comércios e empresas",
  "Galerias pluviais",
  "Investigação de entupimentos recorrentes",
];

export default function VideoInspecaoPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
          }}
        />

        <section className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-orange-400">
              Diagnóstico profissional de tubulações
            </p>

            <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
              Vídeo inspeção de tubulações em São Paulo
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Utilizamos câmera profissional para visualizar o interior das
              tubulações e identificar obstruções, rachaduras, raízes,
              deslocamentos e outros problemas sem quebras desnecessárias.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Solicitar orçamento no WhatsApp
              </a>

              <a
                href="tel:+5511925331686"
                className="rounded-lg border border-white px-6 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                Ligar agora
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Como funciona a vídeo inspeção?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Uma câmera específica é introduzida no interior da tubulação
                para transmitir imagens em tempo real. Dessa forma, a equipe
                consegue avaliar as condições internas da rede e localizar o
                ponto provável do problema.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                A inspeção auxilia na escolha do procedimento mais adequado,
                evitando tentativas aleatórias e ajudando a planejar o
                desentupimento, a limpeza ou o reparo com maior precisão.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Problemas que podem ser identificados
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {problems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Onde pode ser utilizada?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                A aplicação depende das dimensões da tubulação, do ponto de
                acesso e das condições internas da rede.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {applications.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-700"
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Vantagens da vídeo inspeção
              </h2>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>✓ Diagnóstico interno da tubulação</li>
                <li>✓ Localização mais precisa do problema</li>
                <li>✓ Redução de quebras desnecessárias</li>
                <li>✓ Identificação de falhas estruturais</li>
                <li>✓ Planejamento mais eficiente do reparo</li>
                <li>✓ Avaliação de entupimentos recorrentes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Como realizamos o serviço
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Primeiro verificamos o acesso e as condições da tubulação.
                Depois introduzimos a câmera e analisamos as imagens geradas. Ao
                final, explicamos o que foi identificado e orientamos sobre a
                solução mais adequada para o problema encontrado.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Por que escolher a ConserteAí?
              </h2>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>✓ Atendimento 24 horas</li>
                <li>✓ Equipamentos profissionais</li>
                <li>✓ Equipe especializada</li>
                <li>✓ Diagnóstico detalhado</li>
                <li>✓ Orçamento antes da execução</li>
                <li>✓ Atendimento em São Paulo e municípios da RMSP</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Perguntas frequentes sobre vídeo inspeção
            </h2>

            <div className="mt-8 space-y-5">
              {faqItems.map((item) => (
                <article
                  key={item.question}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.question}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-500 px-6 py-16 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Precisa identificar um problema na tubulação?
            </h2>

            <p className="mt-4 text-lg">
              Fale com a ConserteAí e solicite uma avaliação por vídeo inspeção.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-7 py-4 font-bold text-orange-600 transition hover:bg-orange-50"
              >
                Chamar no WhatsApp
              </a>

              <a
                href="tel:+5511925331686"
                className="inline-block rounded-lg border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
              >
                Ligar agora
              </a>
            </div>

            <div className="mt-8">
              <Link href="/" className="font-semibold underline">
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}