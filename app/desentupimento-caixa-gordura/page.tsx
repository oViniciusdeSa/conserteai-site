import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Desentupimento de Caixa de Gordura em São Paulo | 24h",
  description:
    "Desentupimento e limpeza de caixa de gordura em São Paulo e Grande SP, com atendimento 24 horas, equipe especializada e equipamentos profissionais.",

  alternates: {
    canonical: "/desentupimento-caixa-gordura",
  },

  openGraph: {
    title: "Desentupimento de Caixa de Gordura em São Paulo | ConserteAí",
    description:
      "Limpeza e desentupimento de caixa de gordura com atendimento 24 horas em São Paulo e Grande SP.",
    url: "/desentupimento-caixa-gordura",
    type: "website",
  },
};

const whatsappUrl =
  "https://wa.me/5511925331686?text=Ol%C3%A1!%20Encontrei%20a%20p%C3%A1gina%20de%20desentupimento%20de%20caixa%20de%20gordura%20da%20ConserteA%C3%AD%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const faqItems = [
  {
    question: "Quando devo limpar a caixa de gordura?",
    answer:
      "A limpeza deve ser realizada periodicamente, antes que o acúmulo de gordura comprometa o escoamento. A frequência depende do uso e da quantidade de resíduos produzidos no imóvel.",
  },
  {
    question: "Quais são os sinais de que a caixa de gordura está cheia?",
    answer:
      "Mau cheiro, escoamento lento, retorno de água, transbordamento e presença de gordura próxima à tampa são alguns dos sinais mais comuns.",
  },
  {
    question: "A ConserteAí atende restaurantes e condomínios?",
    answer:
      "Sim. Atendemos residências, condomínios, comércios, bares, restaurantes e outros estabelecimentos em São Paulo e municípios da Região Metropolitana.",
  },
  {
    question: "O atendimento para caixa de gordura é realizado 24 horas?",
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
  name: "Desentupimento e Limpeza de Caixa de Gordura",
  description:
    "Serviço de limpeza e desentupimento de caixa de gordura em São Paulo e Grande São Paulo, com atendimento 24 horas.",
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
  serviceType: "Desentupimento e limpeza de caixa de gordura",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl:
      "https://www.xn--consertea-o5a.com.br/desentupimento-caixa-gordura",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+5511925331686",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  },
};

export default function DesentupimentoCaixaGorduraPage() {
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
              Desentupimento de caixa de gordura em São Paulo
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Realizamos a limpeza e o desentupimento de caixas de gordura
              residenciais, comerciais e condominiais, removendo resíduos,
              gordura solidificada e obstruções com equipamentos profissionais.
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
            <h2 className="text-3xl font-bold text-slate-900">
              Principais problemas na caixa de gordura
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Acúmulo de gordura",
                  description:
                    "A gordura endurecida pode bloquear a saída da caixa e impedir o escoamento adequado da água.",
                },
                {
                  title: "Falta de manutenção",
                  description:
                    "Sem limpeza periódica, a capacidade da caixa diminui e aumenta o risco de entupimento e transbordamento.",
                },
                {
                  title: "Mau cheiro e retorno",
                  description:
                    "O excesso de resíduos pode causar odores desagradáveis, retorno de água e atração de pragas.",
                },
              ].map((item) => (
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

        <section className="bg-slate-100 px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Como realizamos o serviço
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Avaliamos o estado da caixa e das tubulações conectadas. Depois,
                removemos a gordura e os resíduos acumulados, realizamos a
                limpeza interna e verificamos se o fluxo foi normalizado,
                seguindo procedimentos adequados para o serviço.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Por que escolher a ConserteAí?
              </h2>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>✓ Atendimento 24 horas</li>
                <li>✓ Limpeza completa da caixa</li>
                <li>✓ Equipamentos profissionais</li>
                <li>✓ Técnicos especializados</li>
                <li>✓ Orçamento antes da execução</li>
                <li>✓ Atendimento em São Paulo e municípios da RMSP</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Perguntas frequentes
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
            <h2 className="text-3xl font-bold">
              Sua caixa de gordura está entupida?
            </h2>

            <p className="mt-4 text-lg">
              Solicite atendimento e receba uma orientação rápida pelo WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-lg bg-white px-7 py-4 font-bold text-orange-600 transition hover:bg-orange-50"
            >
              Chamar no WhatsApp
            </a>

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