import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Limpeza de Fossa em São Paulo | Atendimento 24h",
  description:
    "Limpeza de fossa em São Paulo e Grande SP para residências, condomínios, empresas e comércios, com atendimento 24 horas e equipamentos profissionais.",

  alternates: {
    canonical: "/limpeza-fossa",
  },

  openGraph: {
    title: "Limpeza de Fossa em São Paulo | ConserteAí",
    description:
      "Serviço de limpeza de fossa com atendimento 24 horas em São Paulo e Grande SP.",
    url: "/limpeza-fossa",
    type: "website",
    images: [
      {
        url: "/og-conserteai.png",
        width: 1200,
        height: 630,
        alt: "ConserteAí — Limpeza de Fossa em São Paulo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Limpeza de Fossa em São Paulo | ConserteAí",
    description:
      "Serviço profissional de limpeza de fossa em São Paulo e Grande SP.",
    images: ["/og-conserteai.png"],
  },
};

const whatsappUrl =
  "https://wa.me/5511925331686?text=Ol%C3%A1!%20Encontrei%20a%20p%C3%A1gina%20de%20limpeza%20de%20fossa%20da%20ConserteA%C3%AD%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const faqItems = [
  {
    question: "Quando é necessário realizar a limpeza da fossa?",
    answer:
      "A limpeza deve ser realizada antes que a fossa atinja sua capacidade máxima. Mau cheiro, escoamento lento, retorno de resíduos e transbordamento são sinais de que o serviço pode ser necessário.",
  },
  {
    question: "Qual é a frequência ideal para limpar a fossa?",
    answer:
      "A frequência depende do tamanho da fossa, da quantidade de pessoas no imóvel e do volume de uso. Uma avaliação técnica ajuda a definir o intervalo adequado.",
  },
  {
    question: "A limpeza de fossa causa mau cheiro no imóvel?",
    answer:
      "Durante o procedimento pode ocorrer odor temporário próximo ao local, mas a equipe utiliza equipamentos adequados e busca reduzir os impactos durante a execução.",
  },
  {
    question: "A ConserteAí atende condomínios e empresas?",
    answer:
      "Sim. Atendemos residências, condomínios, comércios, empresas e outros estabelecimentos em São Paulo e municípios da Região Metropolitana.",
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
  name: "Limpeza de Fossa",
  description:
    "Serviço de limpeza de fossas sépticas, negras e biodigestoras em São Paulo e Grande São Paulo, com atendimento 24 horas.",
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
  serviceType: "Limpeza de fossa",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.xn--consertea-o5a.com.br/limpeza-fossa",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+5511925331686",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  },
};

const warningSigns = [
  {
    title: "Mau cheiro persistente",
    description:
      "Odores fortes próximos à fossa ou aos ralos podem indicar excesso de resíduos acumulados.",
  },
  {
    title: "Esgoto retornando",
    description:
      "O retorno de água ou resíduos pelos ralos e vasos pode indicar que a capacidade da fossa foi atingida.",
  },
  {
    title: "Escoamento lento",
    description:
      "Pias, vasos e ralos escoando lentamente podem ser sinais de saturação do sistema.",
  },
  {
    title: "Transbordamento",
    description:
      "O aparecimento de resíduos ou água ao redor da tampa exige atendimento rápido.",
  },
];

const serviceTypes = [
  "Fossa séptica",
  "Fossa negra",
  "Fossa biodigestora",
  "Poço de recalque",
  "Caixa de inspeção",
  "Sistemas residenciais",
  "Condomínios",
  "Estabelecimentos comerciais",
];

export default function LimpezaFossaPage() {
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
              Limpeza de fossa em São Paulo
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Realizamos limpeza de fossas sépticas, negras e biodigestoras em
              residências, condomínios, empresas e estabelecimentos comerciais,
              utilizando equipamentos adequados para a remoção dos resíduos.
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
                Por que a limpeza da fossa é importante?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                A fossa recebe resíduos e líquidos provenientes do imóvel. Com o
                tempo, o material sólido se acumula e reduz a capacidade do
                sistema. Quando a manutenção não é realizada, podem ocorrer
                retorno de esgoto, mau cheiro, vazamentos e transbordamentos.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                A limpeza preventiva ajuda a preservar o funcionamento do
                sistema, reduzir emergências e evitar problemas sanitários no
                imóvel e nas áreas próximas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Sinais de que a fossa precisa de limpeza
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {warningSigns.map((item) => (
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
                Tipos de sistemas atendidos
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                O atendimento pode ser realizado em diferentes sistemas de
                armazenamento e tratamento de resíduos, conforme o acesso e as
                condições encontradas no local.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {serviceTypes.map((item) => (
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
                Benefícios da manutenção preventiva
              </h2>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>✓ Redução do risco de transbordamento</li>
                <li>✓ Prevenção de retorno de esgoto</li>
                <li>✓ Redução de odores desagradáveis</li>
                <li>✓ Maior durabilidade do sistema</li>
                <li>✓ Menor risco de emergências sanitárias</li>
                <li>✓ Melhor funcionamento da rede do imóvel</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Como realizamos a limpeza
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                A equipe verifica o acesso e as condições do sistema. Em
                seguida, os resíduos são removidos com equipamentos apropriados.
                Depois da limpeza, é feita uma verificação visual do local e são
                fornecidas orientações sobre manutenção e prevenção.
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
              Perguntas frequentes sobre limpeza de fossa
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
              Precisa realizar a limpeza da fossa?
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