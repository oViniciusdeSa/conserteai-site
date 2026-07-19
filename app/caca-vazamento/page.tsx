import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Caça Vazamento em São Paulo | Atendimento 24h",
  description:
    "Serviço de caça vazamento em São Paulo e Grande SP com atendimento 24 horas, localização precisa, equipe especializada e equipamentos profissionais.",

  alternates: {
    canonical: "/caca-vazamento",
  },

  openGraph: {
    title: "Caça Vazamento em São Paulo | ConserteAí",
    description:
      "Localização de vazamentos com atendimento 24 horas em São Paulo e Grande SP.",
    url: "/caca-vazamento",
    type: "website",
  },
};

const whatsappUrl =
  "https://wa.me/5511925331686?text=Ol%C3%A1!%20Encontrei%20a%20p%C3%A1gina%20de%20ca%C3%A7a%20vazamento%20da%20ConserteA%C3%AD%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const faqItems = [
  {
    question: "Como funciona o serviço de caça vazamento?",
    answer:
      "A equipe realiza uma análise técnica para identificar sinais de vazamento e utiliza equipamentos adequados para localizar o ponto com maior precisão, evitando quebras desnecessárias.",
  },
  {
    question: "Quais são os sinais de um vazamento oculto?",
    answer:
      "Conta de água elevada, manchas de umidade, mofo, infiltrações, ruídos na tubulação e redução da pressão podem indicar um vazamento oculto.",
  },
  {
    question: "É necessário quebrar parede ou piso?",
    answer:
      "Nem sempre. O objetivo do serviço é localizar o ponto do vazamento antes de qualquer intervenção, reduzindo ao máximo a necessidade de quebras.",
  },
  {
    question: "A ConserteAí atende emergências 24 horas?",
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
  name: "Caça Vazamento",
  description:
    "Serviço de localização de vazamentos em São Paulo e Grande São Paulo, com atendimento 24 horas.",
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
  serviceType: "Caça vazamento",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.xn--consertea-o5a.com.br/caca-vazamento",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+5511925331686",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  },
};

export default function CacaVazamentoPage() {
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
              Caça vazamento em São Paulo
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Localizamos vazamentos aparentes e ocultos em residências,
              condomínios e empresas, utilizando equipamentos profissionais para
              identificar o ponto com maior precisão.
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
              Principais sinais de vazamento
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Conta de água elevada",
                  description:
                    "Um aumento incomum no consumo pode indicar perda de água em alguma parte da instalação.",
                },
                {
                  title: "Manchas e infiltrações",
                  description:
                    "Umidade, mofo, pintura descascando e manchas em paredes ou pisos podem revelar vazamentos ocultos.",
                },
                {
                  title: "Ruídos na tubulação",
                  description:
                    "Sons de água correndo mesmo com registros fechados podem indicar vazamento na rede.",
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
                Como realizamos a detecção
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Analisamos os sinais apresentados, verificamos a rede hidráulica
                e utilizamos equipamentos adequados para localizar o ponto mais
                provável do vazamento. O objetivo é reduzir quebras e orientar a
                correção de forma mais precisa.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Por que escolher a ConserteAí?
              </h2>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>✓ Atendimento 24 horas</li>
                <li>✓ Localização precisa</li>
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
              Suspeita de vazamento? Fale com a ConserteAí
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