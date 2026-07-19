import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Hidrojateamento em São Paulo | Atendimento 24h",
  description:
    "Hidrojateamento em São Paulo e Grande SP para limpeza de tubulações, redes de esgoto, galerias, caixas de gordura e sistemas industriais.",

  alternates: {
    canonical: "/hidrojateamento",
  },

  openGraph: {
    title: "Hidrojateamento em São Paulo | ConserteAí",
    description:
      "Limpeza de tubulações com água em alta pressão e atendimento 24 horas em São Paulo e Grande SP.",
    url: "/hidrojateamento",
    type: "website",
    images: [
      {
        url: "/og-conserteai.png",
        width: 1200,
        height: 630,
        alt: "ConserteAí — Hidrojateamento em São Paulo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hidrojateamento em São Paulo | ConserteAí",
    description:
      "Limpeza profissional de tubulações com água em alta pressão.",
    images: ["/og-conserteai.png"],
  },
};

const whatsappUrl =
  "https://wa.me/5511925331686?text=Ol%C3%A1!%20Encontrei%20a%20p%C3%A1gina%20de%20hidrojateamento%20da%20ConserteA%C3%AD%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const faqItems = [
  {
    question: "O que é hidrojateamento?",
    answer:
      "Hidrojateamento é uma técnica que utiliza água em alta pressão para remover gordura, lodo, areia, incrustações e outros resíduos acumulados dentro de tubulações e redes de esgoto.",
  },
  {
    question: "Quando o hidrojateamento é indicado?",
    answer:
      "O serviço é indicado em casos de entupimentos recorrentes, redução da vazão, acúmulo de gordura, mau cheiro e manutenção preventiva de redes hidráulicas e de esgoto.",
  },
  {
    question: "O hidrojateamento danifica a tubulação?",
    answer:
      "Quando realizado por profissionais e com a pressão adequada, o procedimento é seguro. Antes da execução, a equipe avalia as condições e o tipo da tubulação.",
  },
  {
    question: "A ConserteAí atende condomínios e empresas?",
    answer:
      "Sim. Atendemos residências, condomínios, comércios, restaurantes, indústrias e outros estabelecimentos em São Paulo e municípios da Região Metropolitana.",
  },
  {
    question: "O atendimento é realizado 24 horas?",
    answer:
      "Sim. A ConserteAí realiza atendimentos emergenciais 24 horas por dia, inclusive aos finais de semana e feriados.",
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
  name: "Hidrojateamento",
  description:
    "Serviço de hidrojateamento para limpeza de tubulações, redes de esgoto, galerias, caixas de gordura e sistemas hidráulicos em São Paulo e Grande São Paulo.",
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
  serviceType: "Hidrojateamento de tubulações",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.xn--consertea-o5a.com.br/hidrojateamento",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+5511925331686",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  },
};

const situations = [
  {
    title: "Entupimentos recorrentes",
    description:
      "Quando a tubulação volta a apresentar obstruções mesmo após desentupimentos convencionais.",
  },
  {
    title: "Acúmulo de gordura",
    description:
      "Indicado para remover gordura solidificada em cozinhas, restaurantes e caixas de gordura.",
  },
  {
    title: "Redução da vazão",
    description:
      "A limpeza ajuda a recuperar o fluxo quando resíduos e sedimentos reduzem a passagem.",
  },
  {
    title: "Manutenção preventiva",
    description:
      "Condomínios, empresas e indústrias podem evitar paralisações com limpezas programadas.",
  },
];

const applications = [
  "Redes de esgoto",
  "Tubulações residenciais",
  "Condomínios",
  "Restaurantes e cozinhas industriais",
  "Caixas de gordura",
  "Galerias pluviais",
  "Estabelecimentos comerciais",
  "Sistemas industriais",
];

export default function HidrojateamentoPage() {
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
              Atendimento emergencial 24 horas
            </p>

            <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
              Hidrojateamento em São Paulo
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Realizamos a limpeza de tubulações e redes de esgoto com água em
              alta pressão, removendo gordura, lodo, areia, incrustações e
              resíduos acumulados.
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
                Como funciona o hidrojateamento?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                O hidrojateamento utiliza jatos de água em alta pressão para
                desprender e remover resíduos aderidos às paredes internas da
                tubulação. A pressão e os equipamentos utilizados são definidos
                conforme o diâmetro, o material e as condições da rede.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Diferentemente de métodos que apenas abrem uma passagem no
                bloqueio, o hidrojateamento promove uma limpeza mais abrangente,
                ajudando a recuperar a vazão e reduzir a possibilidade de novos
                entupimentos provocados pelo material acumulado.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Quando contratar o hidrojateamento?
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {situations.map((item) => (
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
                Onde o serviço pode ser realizado?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                A técnica pode ser aplicada em diferentes tipos de instalações,
                desde redes residenciais até sistemas de maior porte. A escolha
                do equipamento depende das características de cada tubulação.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {applications.map((application) => (
                  <li
                    key={application}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-700"
                  >
                    ✓ {application}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Vantagens do hidrojateamento
              </h2>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>✓ Limpeza profunda da tubulação</li>
                <li>✓ Remoção de gordura e incrustações</li>
                <li>✓ Recuperação do fluxo da rede</li>
                <li>✓ Redução de entupimentos recorrentes</li>
                <li>✓ Aplicação residencial e comercial</li>
                <li>✓ Processo realizado com equipamentos profissionais</li>
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
                Primeiro avaliamos o acesso, o tipo de tubulação e os sinais
                apresentados. Depois definimos o equipamento e a pressão
                adequados para remover os resíduos. Ao final, verificamos a
                recuperação do fluxo e orientamos sobre possíveis ações de
                manutenção preventiva.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Por que escolher a ConserteAí?
              </h2>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>✓ Atendimento 24 horas</li>
                <li>✓ Equipe especializada</li>
                <li>✓ Equipamentos profissionais</li>
                <li>✓ Orçamento antes da execução</li>
                <li>✓ Atendimento residencial e comercial</li>
                <li>✓ Cobertura em São Paulo e municípios da RMSP</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Perguntas frequentes sobre hidrojateamento
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
              Precisa de hidrojateamento?
            </h2>

            <p className="mt-4 text-lg">
              Fale com a ConserteAí e solicite uma avaliação para seu imóvel,
              condomínio ou empresa.
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