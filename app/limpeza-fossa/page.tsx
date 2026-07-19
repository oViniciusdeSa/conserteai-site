import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata = {
  title: "Limpeza de Fossa em São Paulo | ConserteAí",
};

export default function LimpezaFossaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-5xl font-bold">
              Limpeza de Fossa
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-200">
              Serviço especializado para fossas sépticas, negras e biodigestoras,
              realizado com equipamentos adequados e descarte conforme as normas
              ambientais.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}