import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Desentupimento de Vaso Sanitário em São Paulo | 24h",
  description:
    "Desentupimento de vaso sanitário em São Paulo e Grande SP com atendimento 24 horas, orçamento rápido, equipe especializada e garantia no serviço.",

  alternates: {
    canonical: "/desentupimento-vaso",
  },

  openGraph: {
    title: "Desentupimento de Vaso Sanitário em São Paulo | ConserteAí",
    description:
      "Atendimento 24 horas para desentupimento de vaso sanitário em São Paulo e Grande SP.",
    url: "/desentupimento-vaso",
    type: "website",
  },
};

const whatsappUrl =
  "https://wa.me/5511925331686?text=Ol%C3%A1!%20Encontrei%20a%20p%C3%A1gina%20de%20desentupimento%20de%20vaso%20sanit%C3%A1rio%20da%20ConserteA%C3%AD%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const faqItems = [
  {
    question: "Quanto custa o desentupimento de vaso sanitário?",
    answer:
      "O valor depende da gravidade da obstrução, do acesso à tubulação e da técnica necessária. A equipe avalia o problema e informa o orçamento antes de iniciar o serviço.",
  },
  {
    question: "É necessário remover o vaso sanitário?",
    answer:
      "Nem sempre. Em muitos casos, a obstrução pode ser removida com equipamentos próprios sem retirar o vaso. A remoção só é realizada quando realmente necessária.",
  },
  {
    question: "Quais objetos costumam entupir o vaso?",
    answer:
      "Papel em excesso, lenços umedecidos, absorventes, fraldas, objetos plásticos e outros materiais descartados incorretamente estão entre as causas mais comuns.",
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
  name: "Desentupimento de Vaso Sanitário",
  description:
    "Serviço de desentupimento de vaso sanitário em São Paulo e Grande São Paulo, com atendimento 24 horas.",
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
  serviceType: "Desentupimento de vaso sanitário",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl:
      "https://www.xn--consertea-o5a.com.br/desentupimento-vaso",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+5511925331686",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  },
};

export default function DesentupimentoVasoPage() {
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
              Desentupimento de vaso sanitário em São Paulo
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Removemos obstruções em vasos sanitários causadas por papel,
              objetos, resíduos e problemas na tubulação, utilizando
              equipamentos profissionais e técnicas seguras.
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
              Principais causas de vaso sanitário entupido
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Papel em excesso",
                  description:
                    "O descarte excessivo de papel pode formar bloqueios e impedir o escoamento normal da água.",
                },
                {
                  title: "Objetos descartados",
                  description:
                    "Lenços, absorventes, fraldas e objetos plásticos podem ficar presos na tubulação.",
                },
                {
                  title: "Problemas no encanamento",
                  description:
                    "Tubulações antigas, com baixa inclinação ou obstruções mais profundas também podem causar retorno e entupimento.",
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
                Avaliamos o nível e a localização da obstrução e utilizamos o
                equipamento mais adequado para remover o bloqueio. Sempre
                priorizamos técnicas que evitem quebras e a remoção do vaso
                sanitário quando isso não for necessário.
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
              Seu vaso sanitário está entupido? Fale com a ConserteAí
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