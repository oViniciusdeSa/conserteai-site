import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Hidrojateamento em São Paulo | Atendimento 24h",
  description:
    "Serviço de hidrojateamento em São Paulo para limpeza de tubulações, redes de esgoto, galerias e caixas de gordura.",

  alternates: {
    canonical: "/hidrojateamento",
  },

  openGraph: {
    title: "Hidrojateamento | ConserteAí",
    description:
      "Limpeza de tubulações com hidrojateamento de alta pressão.",
    url: "/hidrojateamento",
    type: "website",
  },
};

export default function HidrojateamentoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-5xl font-bold">
              Hidrojateamento em São Paulo
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-200">
              Utilizamos equipamentos de alta pressão para remover incrustações,
              gordura, lodo e resíduos acumulados em tubulações e redes de
              esgoto.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}