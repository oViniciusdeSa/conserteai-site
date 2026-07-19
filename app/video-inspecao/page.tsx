import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata = {
  title: "Vídeo Inspeção de Tubulações | ConserteAí",
};

export default function VideoInspecaoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-5xl font-bold">
              Vídeo Inspeção
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-200">
              Inspeção interna de tubulações por câmera para identificar
              obstruções, rachaduras, infiltrações e outros problemas sem a
              necessidade de quebra.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}