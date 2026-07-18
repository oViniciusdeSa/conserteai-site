import Link from "next/link";

const logoImg = "/logo-conserteai.png";

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

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={logoImg}
              alt="ConserteAí"
              style={{
                height: 48,
                width: "auto",
                display: "block",
              }}
            />
          </Link>

          {/* Navegação */}
          <nav className="hidden gap-8 font-medium text-[#1D4D8B] lg:flex">
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#sobre">Sobre Nós</Link>
            <Link href="/#projetos">Projetos</Link>
            <Link href="/#avaliacoes">Avaliações</Link>
            <Link href="/#contato">Contato</Link>
          </nav>

          {/* Botão */}
          <a
            href="https://wa.me/5511925331686"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#F97316] px-5 py-3 font-semibold text-white transition hover:opacity-90"
          >
            WhatsApp 24h
          </a>

        </div>
      </div>

    </header>
  );
}
