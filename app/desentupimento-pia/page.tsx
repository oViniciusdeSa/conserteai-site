import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Desentupimento de Pia em São Paulo | Atendimento 24h",
  description:
    "Desentupimento de pia em São Paulo e Grande SP com atendimento 24 horas, orçamento rápido, equipe especializada e garantia no serviço.",

  alternates: {
    canonical: "/desentupimento-pia",
  },

  openGraph: {
    title: "Desentupimento de Pia em São Paulo | ConserteAí",
    description:
      "Atendimento 24 horas para desentupimento de pia em São Paulo e Grande SP.",
    url: "/desentupimento-pia",
    type: "website",
  },
};

const whatsappUrl =
  "https://wa.me/5511925331686?text=Ol%C3%A1!%20Encontrei%20a%20p%C3%A1gina%20de%20desentupimento%20de%20pia%20da%20ConserteA%C3%AD%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const faqItems = [
  {
    question: "Quanto custa o desentupimento de pia?",
    answer:
      "O valor depende da localização, do acesso à tubulação e da complexidade da obstrução. A equipe avalia o problema e informa o orçamento antes de iniciar o serviço.",
  },
  {
    question: "É necessário quebrar a parede ou o piso?",
    answer:
      "Na maioria dos casos, não. Utilizamos equipamentos próprios para localizar e remover a obstrução sem realizar quebras desnecessárias.",
  },
  {
    question: "Quanto tempo o serviço demora?",
    answer:
      "O tempo varia conforme o tipo de entupimento, mas muitos atendimentos são resolvidos no mesmo dia.",
  },
  {
    question: "A ConserteAí atende durante a madrugada?",
    answer:
      "Sim. O atendimento é realizado 24 horas por dia, inclusive aos finais de semana e feriados.",
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
  name: "Desentupimento de Pia",
  description:
    "Serviço de desentupimento de pia em São Paulo e Grande São Paulo, com atendimento 24 horas.",
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
  serviceType: "Desentupimento de pia",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl:
      "https://www.xn--consertea-o5a.com.br/desentupimento-pia",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+5511925331686",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  },
};

export default function DesentupimentoPiaPage() {
  return (
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

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Desentupimento de pia em São Paulo
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Removemos obstruções causadas por gordura, restos de alimentos,
            detergente solidificado e outros resíduos, utilizando equipamentos
            profissionais e técnicas seguras para a tubulação.
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
            Principais causas de pia entupida
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Acúmulo de gordura",
                description:
                  "Óleo, gordura e detergente podem endurecer dentro da tubulação e reduzir a passagem da água.",
              },
              {
                title: "Restos de alimentos",
                description:
                  "Resíduos descartados na pia podem formar bloqueios no sifão e no encanamento.",
              },
              {
                title: "Objetos na tubulação",
                description:
                  "Pequenos objetos e materiais inadequados podem impedir completamente o escoamento.",
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
              Como realizamos o desentupimento
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Primeiro identificamos o ponto e a possível causa da obstrução.
              Depois utilizamos a técnica mais adequada para remover os resíduos
              sem realizar quebras desnecessárias. Ao final, verificamos o fluxo
              da água e orientamos o cliente sobre como evitar novos
              entupimentos.
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
              <li>✓ Garantia de 90 dias</li>
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
            Sua pia está entupida? Fale com a ConserteAí
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
  );
}