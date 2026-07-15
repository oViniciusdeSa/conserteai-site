export default function Header() {
  return (
    <header className="w-full">
      {/* Barra superior */}
      <div className="bg-[#F97316] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2 text-sm font-medium">
          📞 EMERGÊNCIA? Ligue agora: (11) 92533-1686 — Atendimento 24h, 7 dias por semana
        </div>
      </div>

      {/* Menu */}
      <div className="border-b bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#1D4D8B] font-bold text-[#F97316]">
              ✓
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1D4D8B]">
                Conserte<span className="text-[#F97316]">Aí</span>
              </h2>

              <p className="text-xs uppercase tracking-widest text-gray-500">
                Desentupimento e Hidráulica
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 font-medium text-[#1D4D8B] lg:flex">
            <a href="#">Serviços</a>
            <a href="#">Sobre Nós</a>
            <a href="#">Projetos</a>
            <a href="#">Avaliações</a>
            <a href="#">Contato</a>
          </nav>

          <button className="rounded-xl bg-[#F97316] px-5 py-3 font-semibold text-white transition hover:opacity-90">
            WhatsApp 24h
          </button>
        </div>
      </div>
    </header>
  );
}
