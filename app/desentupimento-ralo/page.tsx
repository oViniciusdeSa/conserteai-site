import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Desentupimento de Ralo em São Paulo | Atendimento 24h",
  description:
    "Desentupimento de ralo em São Paulo e Grande SP com atendimento 24 horas, equipe especializada, orçamento rápido e equipamentos profissionais.",

  alternates: {
    canonical: "/desentupimento-ralo",
  },

  openGraph: {
    title: "Desentupimento de Ralo em São Paulo | ConserteAí",
    description:
      "Atendimento 24 horas para desentupimento de ralo em São Paulo e Grande SP.",
    url: "/desentupimento-ralo",
    type: "website",
  },
};

const whatsappUrl =
  "https://wa.me/5511925331686?text=Ol%C3%A1!%20Encontrei%20a%20p%C3%A1gina%20de%20desentupimento%20de%20ralo%20da%20ConserteA%C3%AD%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const faqItems = [
  {
    question: "Quanto custa o desentupimento de ralo?",
    answer:
      "O valor varia conforme o local do ralo, a profundidade da obstrução e a complexidade do serviço. A equipe realiza a avaliação e informa o orçamento antes da execução.",
  },
  {
    question: "Quais são as causas mais comuns de ralo entupido?",
    answer:
      "As causas mais comuns são acúmulo de cabelo, gordura, restos de sabonete, sujeira, areia e outros resíduos que se acumulam na tubulação.",
  },
  {
    question: "É necessário quebrar o piso para desentupir o ralo?",
    answer:
      "Na maioria dos casos, não. Utilizamos equipamentos profissionais para remover a obstrução sem realizar quebras desnecessárias.",
  },
  {
    question: "A ConserteAí atende ralos entupidos durante a madrugada?",
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
  name: "Desentupimento de Ralo",
  description:
    "Serviço de desentupimento de ralo em São Paulo e Grande São Paulo, com atendimento 24 horas.",
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
  serviceType: "Desentupimento de ralo",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl:
      "https://www.xn--consertea-o5a.com.br/desentupimento-ralo",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+5511925331686",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  },
};

export default function DesentupimentoRaloPage() {
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

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Desentupimento de ralo em São Paulo
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Removemos obstruções em ralos de banheiros, cozinhas, lavanderias,
              quintais e áreas externas, utilizando equipamentos profissionais
              e técnicas seguras para a tubulação.
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
              Principais causas de ralo entupido
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Acúmulo de cabelo",
                  description:
                    "Fios de cabelo podem se misturar com sabonete e outros resíduos, formando bloqueios dentro da tubulação.",
                },
                {
                  title: "Sujeira e areia",
                  description:
                    "Terra, areia, poeira e resíduos acumulados em áreas externas podem reduzir ou interromper o escoamento.",
                },
                {
                  title: "Gordura e sabão",
                  description:
                    "Gordura, produtos de limpeza e restos de sabonete podem endurecer e provocar obstruções.",
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
                Avaliamos o tipo de ralo e a localização da obstrução para
                escolher a técnica mais adequada. Em seguida, utilizamos
                equipamentos próprios para remover os resíduos e restabelecer o
                escoamento, evitando quebras sempre que possível.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Por que escolher a ConserteAí?
              </h2>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>✓ Atendimento 24 horas</li>
                <li>✓ Equipamentos profissionais</li>
                <li>✓ Técnicos especializados</li>
                <li>✓ Orçamento antes da execução</li>
                <li>✓ Garantia conforme avaliação técnica</li>
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
              Seu ralo está entupido? Fale com a ConserteAí
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