"use client";
import { useEffect, useRef, useState } from "react";

const logoImg = "/logo-conserteai.png";
const navLogoImg = "/logo-conserteai.png";
const marcioImg = "/marcio-tecnico.png";
const WA =
"https://wa.me/5511925331686?text=" +
encodeURIComponent(
"Olá! Encontrei o site da ConserteAí e gostaria de solicitar um orçamento. Podem me ajudar?"
);

const PHONE = "(11) 92533-1686";
const TEL = "tel:+5511925331686";
const EMAIL = "contatoconserteai24h@gmail.com";
const INSTAGRAM = "https://www.instagram.com/conserteai24h?igsh=MWthM3U3cXpkeHowbQ==";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61591863178665";
const CNPJ = "26.977.406/0001-12";
function waService(s: string) {
return "https://wa.me/5511925331686?text=" +
  encodeURIComponent(
  `Olá! Encontrei o site da ConserteAí e gostaria de um orçamento para ${s}. Podem me ajudar?`
  );
}

/* ─── Design tokens ─── */
const C = {
  blue: "#1B3A6B",
  dark: "#0F2347",
  med: "#2563A8",
  orange: "#F47320",
  orangeDark: "#D4601A",
  grayLight: "#F4F6F9",
  grayMed: "#6B7A8D",
  grayDark: "#1A2332",
  border: "#D1D9E6",
  yellow: "#FFC107",
};

/* ─── Global styles injection ─── */
const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; overflow-x: hidden; }
  body { font-family: 'Open Sans', sans-serif; background: #fff; overflow-x: hidden; }
  section { overflow-x: hidden; }
  img { max-width: 100%; display: block; }
  a { text-decoration: none; }

  @keyframes ping {
    0% { transform: scale(1); opacity: .8; }
    100% { transform: scale(1.7); opacity: 0; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: none; }
  }
  .rev { opacity: 0; transform: translateY(20px); transition: opacity .55s ease, transform .55s ease; }
  .rev.vis { opacity: 1; transform: none; }
  @media (prefers-reduced-motion: reduce) {
    .rev { opacity: 1; transform: none; transition: none; }
  }

  /* Urgency */
  #urgbar { background: ${C.orange}; text-align: center; padding: 9px 16px; position: sticky; top: 0; z-index: 200; }
  #urgbar a { color: #fff; font-weight: 700; font-size: .85rem; display: inline-flex; align-items: center; gap: 8px; }

  /* Navbar */
  #nav { background: #ffffff; position: sticky; top: 40px; z-index: 199; border-bottom: 1px solid ${C.border}; box-shadow: 0 1px 8px rgba(0,0,0,.07); }
  .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 82px; max-width: 1280px; margin: 0 auto; padding: 0 24px; }
  .nav-logo { font-family: 'Montserrat',sans-serif; font-size: 1.3rem; font-weight: 800; color: ${C.blue}; }
  .nav-logo span { color: ${C.orange}; }
  .nav-links { display: flex; align-items: center; gap: 24px; }
  .nav-links a { color: ${C.blue}; font-size: .88rem; font-weight: 500; transition: color .15s; }
  .nav-links a:hover { color: ${C.orange}; }
  .nav-cta { background: ${C.orange}; color: #fff !important; padding: 9px 18px; border-radius: 6px; font-weight: 600 !important; font-size: .88rem !important; display: flex; align-items: center; gap: 8px; transition: background .15s !important; }
  .nav-cta:hover { background: ${C.orangeDark} !important; }
  .hamburger { display: none; background: none; border: none; color: ${C.blue}; cursor: pointer; padding: 4px; }
  .mob-menu { display: none; background: #ffffff; border-top: 1px solid ${C.border}; padding: 12px 24px 20px; }
  .mob-menu.open { display: block; }
  .mob-menu a { display: block; color: ${C.blue}; font-size: .95rem; font-weight: 500; padding: 11px 0; border-bottom: 1px solid ${C.border}; }
  .mob-menu a:last-child { border: none; }
  .mob-cta { background: ${C.orange}; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 14px; padding: 12px; border-radius: 6px; color: #fff !important; font-weight: 600; }

  /* Stats — responsive override only (grid is inline) */
  @media (max-width:640px) {
    #stats-inner { grid-template-columns: repeat(2,1fr) !important; }
    #stats-inner > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.12); padding: 32px 16px !important; }
    #stats-inner > div:nth-child(odd) { border-right: 1px solid rgba(255,255,255,.12) !important; }
    #stats-inner > div:last-child, #stats-inner > div:nth-last-child(2):nth-child(odd) { border-bottom: none; }
  }

  /* Services responsive */
  @media (max-width:1024px) { .svc-responsive-grid { grid-template-columns: repeat(2,1fr) !important; } }
  @media (max-width:600px)  { .svc-responsive-grid { grid-template-columns: 1fr !important; } }
  /* 7th card alone: center at column 2 on desktop, span+center on tablet */
  @media (min-width:1025px) {
    .svc-responsive-grid > :last-child:nth-child(3n+1) { grid-column: 2; }
  }
  @media (max-width:1024px) and (min-width:601px) {
    .svc-responsive-grid > :last-child:nth-child(2n+1) {
      grid-column: 1 / -1;
      max-width: calc(50% - 13px);
      justify-self: center;
    }
  }

  /* Why + About responsive */
  @media (max-width:768px) {
    .why-responsive-grid  { grid-template-columns: 1fr !important; }
    .about-responsive-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
  }

  /* Gallery + Testimonials responsive */
  @media (max-width:1024px) {
    .gal-responsive-grid  { grid-template-columns: repeat(2,1fr) !important; }
    .test-responsive-grid { grid-template-columns: repeat(2,1fr) !important; }
  }
  @media (max-width:600px) {
    .gal-responsive-grid  { grid-template-columns: 1fr !important; }
    .test-responsive-grid { grid-template-columns: 1fr !important; }
  }

  /* Coverage — full-bleed satellite */
  .cov-zones { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .cov-panel { max-width: 520px; }
  .cov-mob-overlay { display: none; }
  .stars { display: flex; gap: 2px; align-items: center; }
  @keyframes pin-pulse {
    0%, 100% { box-shadow: 0 0 0 6px rgba(244,115,32,0.32), 0 0 0 12px rgba(244,115,32,0.12); }
    50%       { box-shadow: 0 0 0 10px rgba(244,115,32,0.20), 0 0 0 20px rgba(244,115,32,0.06); }
  }
  .cov-pin { width: 18px; height: 18px; border-radius: 50%; background: #F47320; box-shadow: 0 0 0 6px rgba(244,115,32,0.32), 0 0 0 12px rgba(244,115,32,0.12); animation: pin-pulse 2.5s ease-in-out infinite; }
  @media (max-width:768px) {
    .cov-zones { display: none; }
    .cov-mob-overlay { display: block; position: absolute; inset: 0; background: rgba(15,35,71,0.48); }
    .cov-panel { max-width: 100%; }
  }

  /* Contact */
  .con-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: start; margin-top: 44px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
  @media (max-width:768px) {
    .con-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
    .form-row { grid-template-columns: 1fr !important; }
  }
  .finput, .fselect, .ftarea { width: 100%; padding: 11px 13px; border-radius: 8px; background: rgba(255,255,255,.95); border: 1px solid transparent; color: ${C.grayDark}; font-family: 'Open Sans',sans-serif; font-size: .9rem; outline: none; transition: border-color .2s; }
  .finput:focus, .fselect:focus, .ftarea:focus { border-color: ${C.orange}; }
  .finput.err, .fselect.err { border-color: #EF4444; }
  .ftarea { resize: vertical; min-height: 88px; }
  .flabel { display: block; font-size: .75rem; font-weight: 600; color: rgba(255,255,255,.7); text-transform: uppercase; letter-spacing: .04em; margin-bottom: 5px; }
  .ferr { color: #FCA5A5; font-size: .75rem; margin-top: 3px; min-height: 16px; }
  .fgroup { margin-bottom: 14px; }

  /* WA float */
  #wa-float { position: fixed; bottom: 26px; right: 26px; z-index: 300; display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
  #wa-tip { background: ${C.dark}; color: #fff; font-size: .82rem; font-weight: 600; padding: 6px 12px; border-radius: 6px; white-space: nowrap; pointer-events: none; opacity: 0; transform: translateY(4px); transition: opacity .2s, transform .2s; box-shadow: 0 4px 14px rgba(0,0,0,.25); }
  #wa-float:hover #wa-tip { opacity: 1; transform: none; }
  #wa-btn { width: 58px; height: 58px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,.42); transition: transform .15s, box-shadow .15s; position: relative; }
  #wa-btn:hover { transform: scale(1.1); box-shadow: 0 8px 32px rgba(37,211,102,.55); }
  .wa-ping { position: absolute; inset: -4px; border-radius: 50%; border: 2px solid rgba(37,211,102,.4); animation: ping 2s ease-out infinite; }

  /* Responsive */
  @media (max-width:1024px) {
    .services-grid { grid-template-columns: repeat(2,1fr); }
    .test-grid { grid-template-columns: repeat(2,1fr); }
  }
  @media (max-width:768px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .nav-cta { min-height: 44px; padding: 10px 16px; }
    .stats-grid { grid-template-columns: repeat(2,1fr); }
    .stat-item:nth-child(1),.stat-item:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,.12); }
    .stat-item:nth-child(2) { border-right: none; }
    .services-grid { grid-template-columns: 1fr; }
    .why-grid { grid-template-columns: 1fr; }
    .about-grid { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: repeat(2,1fr); }
    .test-grid { grid-template-columns: 1fr; }
    .con-grid { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    #urgbar a { font-size: .76rem; }
    #sobre, #escolher, #servicos, #projetos, #avaliacoes, #contato { padding-top: 72px !important; padding-bottom: 80px !important; }
    .mob-menu a { min-height: 44px; display: flex; align-items: center; }
  }
  @media (max-width:480px) {
    .gallery-grid { grid-template-columns: 1fr; }
    .gal-responsive-grid { grid-template-columns: 1fr !important; }
    .test-responsive-grid { grid-template-columns: 1fr !important; }
    #urgbar { padding: 7px 12px; }
    #urgbar a { font-size: .71rem; gap: 5px; }
    .nav-inner { padding: 0 16px; }
    #wa-float { bottom: 18px; right: 16px; }
    #sobre, #escolher, #servicos, #projetos, #avaliacoes, #contato { padding-top: 56px !important; padding-bottom: 64px !important; }
  }
  @media (max-width:380px) {
    .nav-logo { font-size: 1rem; }
    #urgbar a { flex-wrap: wrap; justify-content: center; gap: 3px; }
  }
`;

/* ─── Shared SVG icons ─── */
const WaIcon = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.117 1.528 5.845L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.034-1.383l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/>
  </svg>
);

/* LogoMark — fiel ao PNG ConserteAi_Selo_24h: anel laranja espesso, 12 marcas, círculo branco, checkmark */
const LogoMark = ({ size = 36 }: { size?: number }) => {
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 - 90) * Math.PI / 180;
    const major = i % 3 === 0;
    const rIn = major ? 12.6 : 14.0;
    const rOut = 16.2;
    return {
      x1: +(20 + rIn  * Math.cos(a)).toFixed(2),
      y1: +(20 + rIn  * Math.sin(a)).toFixed(2),
      x2: +(20 + rOut * Math.cos(a)).toFixed(2),
      y2: +(20 + rOut * Math.sin(a)).toFixed(2),
      major,
    };
  });
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <filter id="seal-sh" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#000" floodOpacity="0.3"/>
        </filter>
      </defs>
      {/* Base azul-marinho #1c3357 (cor exata do PNG) */}
      <circle cx="20" cy="20" r="18.5" fill="#1c3357" filter="url(#seal-sh)"/>
      {/* Anel laranja espesso — igual ao PNG */}
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="#e8792a" strokeWidth="3.4"/>
      {/* 12 marcas de relógio: 4 major (12h, 3h, 6h, 9h) + 8 minor */}
      {ticks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          stroke="#fff" strokeWidth={t.major ? 1.7 : 1.0} strokeLinecap="round"
        />
      ))}
      {/* Círculo branco interno */}
      <circle cx="20" cy="20" r="11.8" fill="#fff"/>
      {/* Checkmark laranja — proporcional ao PNG */}
      <path d="M 12.2 20.2 L 17.0 25.5 L 28.0 12.0"
        stroke="#e8792a" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

/* Nav logo: versão padrão para fundo claro */
const NavLogo = () => (
  <a
    href="#inicio"
    style={{
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
      flexShrink: 0,
    }}
  >
    <img
      src={logoImg}
      alt="ConserteAí 24h — Desentupimento e Hidráulica"
      style={{
        height: 68,
        width: "auto",
        maxWidth: 260,
        objectFit: "contain",
        display: "block",
      }}
    />
  </a>
);

/* Footer logo: mark + full wordmark + subtitle */
const FooterLogo = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <LogoMark size={42} />
      <div>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#fff", lineHeight: 1.1 }}>
          Conserte<span style={{ color: "#F47320" }}>Aí</span>{" "}
          <span style={{ fontSize: ".58rem", fontWeight: 700, background: "#F47320", color: "#fff", padding: "2px 6px", borderRadius: 4, verticalAlign: "middle", letterSpacing: ".04em" }}>24H</span>
        </div>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: ".58rem", color: "#8c97a6", letterSpacing: ".11em", marginTop: 3 }}>DESENTUPIMENTO E HIDRÁULICA</div>
      </div>
    </div>
  </div>
);

const PhoneIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 0116.92 2a2 2 0 012.18 2v3.09"/>
  </svg>
);

const Stars = () => (
  <div className="stars">
    {Array(5).fill(0).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={C.yellow}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
      </svg>
    ))}
  </div>
);

/* ─── Scroll reveal hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reveal = () => { el.classList.add("vis"); obs.disconnect(); clearTimeout(timer); };
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) reveal(); }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });
    obs.observe(el);
    // Safety net: if IntersectionObserver never fires (sandboxed iframe, etc.), reveal after 1.2s
    const timer = setTimeout(reveal, 1200);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);
  return ref;
}

/* ─── Counter hook ─── */
function useCounter(target: number, running: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!running) return;
    let frame: number;
    const start = performance.now();
    const dur = 1600;
    function tick(now: number) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) frame = requestAnimationFrame(tick);
      else setCount(target);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, target]);
  return count;
}

/* ─── Service icons (SVG outline, blue) ─── */
const SVG_ICONS: Record<string, React.ReactNode> = {
  esgoto: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M3 12h18M3 18h18"/><circle cx="19" cy="6" r="1" fill={C.blue}/><circle cx="19" cy="12" r="1" fill={C.blue}/><circle cx="19" cy="18" r="1" fill={C.blue}/>
    </svg>
  ),
  pia: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9h16v6a4 4 0 01-4 4H8a4 4 0 01-4-4V9z"/><path d="M8 9V5a2 2 0 012-2h4a2 2 0 012 2v4"/><circle cx="12" cy="14" r="1.5" fill={C.blue} stroke="none"/>
    </svg>
  ),
  vaso: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8h14l-1.5 9H6.5L5 8z"/><path d="M3 8h18"/><path d="M8 8V5h8v3"/><path d="M12 17v3"/>
    </svg>
  ),
  gordura: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="8" rx="2"/><path d="M3 11V8a5 5 0 0110 0v3"/><path d="M9 15h6"/>
    </svg>
  ),
  reab: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Pipe outer walls */}
      <line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/>
      <line x1="2" y1="7" x2="2" y2="17"/><line x1="22" y1="7" x2="22" y2="17"/>
      {/* Interior lining — revestimento interno */}
      <rect x="5" y="10" width="14" height="4" rx="1"/>
      {/* Renewal arrow inside */}
      <line x1="10" y1="12" x2="13.5" y2="12"/>
      <polyline points="12 10.5 14 12 12 13.5"/>
    </svg>
  ),
  vaz: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
    </svg>
  ),
  hidro: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0z"/><path d="M5 20L3 22"/><path d="M13 11l-8 8"/>
    </svg>
  ),
};

/* ─── Data ─── */
type SvcEntry = {
  imgUrl: string;
  imgPos: string;
  iconKey: string;
  badge: { text: string; bg: string } | null;
  title: string;
  waMsg: string;
  time: string;
  desc: string;
  btnColor: string;
  btnHover: string;
  href: string;
};

const SERVICES: SvcEntry[] = [
  {
    imgUrl: "https://images.unsplash.com/photo-1772397546294-a2554a8a9793?w=700&h=420&fit=crop&auto=format&q=85",
    imgPos: "center center",
    iconKey: "esgoto",
    badge: { text: "Mais Solicitado", bg: C.orange },
    title: "Desentupimento de Esgoto",
    href: "/desentupimento-esgoto",
    waMsg: "Gostaria de solicitar: Desentupimento de Esgoto",
    time: "~45 min",
    desc: "Desobstrução completa de redes de esgoto residenciais e comerciais com equipamento de hidrojato profissional. Sem sujeira e com garantia.",
    btnColor: C.orange, btnHover: C.orangeDark,
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=700&h=420&fit=crop&auto=format&q=85",
    imgPos: "center 40%",
    iconKey: "pia",
    badge: null,
    title: "Desentupimento de Pia",
    href: "/desentupimento-pia",
    waMsg: "Gostaria de solicitar: Desentupimento de Pia",
    time: "~30 min",
    desc: "Desentupimento rápido de pias de cozinha e banheiro. Eliminamos gordura, resíduos e obstruções em minutos com garantia.",
    btnColor: C.blue, btnHover: "#0F2347",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1589824783837-6169889fa20f?w=700&h=420&fit=crop&auto=format&q=85",
    imgPos: "center 30%",
    iconKey: "vaso",
    badge: null,
    title: "Desentupimento de Vaso Sanitário",
    href: "/desentupimento-vaso",
    waMsg: "Gostaria de solicitar: Desentupimento de Vaso Sanitário",
    time: "~25 min",
    desc: "Solução eficiente para vasos sanitários entupidos com técnicas especializadas. Resolvemos sem sujeira e com garantia.",
    btnColor: C.blue, btnHover: "#0F2347",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1771360963016-1408c2de12c4?w=700&h=420&fit=crop&auto=format&q=85",
    imgPos: "center 35%",
    iconKey: "gordura",
    badge: { text: "Para Empresas", bg: C.blue },
    title: "Limpeza de Caixa de Gordura",
    href: "/desentupimento-caixa-gordura",
    waMsg: "Gostaria de solicitar: Limpeza de Caixa de Gordura",
    time: "~60 min",
    desc: "Limpeza e higienização completa de caixas de gordura para residências, restaurantes e estabelecimentos comerciais. Normas sanitárias cumpridas.",
    btnColor: C.blue, btnHover: "#0F2347",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1526898943670-92bfa9f94c12?w=700&h=420&fit=crop&auto=format&q=85",
    imgPos: "center 50%",
    iconKey: "vaz",
    badge: { text: "Tecnologia", bg: C.blue },
    title: "Caça Vazamentos",
    href: "/caca-vazamento",
    waMsg: "Gostaria de solicitar: Caça Vazamentos",
    time: "~90 min",
    desc: "Detecção precisa de vazamentos com equipamento eletrônico de última geração. Localizamos sem quebrar paredes desnecessariamente.",
    btnColor: C.orange, btnHover: C.orangeDark,
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?w=700&h=420&fit=crop&auto=format&q=85",
    imgPos: "center center",
    iconKey: "hidro",
    badge: { text: "Emergência", bg: C.orange },
    title: "Hidráulica Emergencial",
    href: "/hidrojateamento",
    waMsg: "Gostaria de solicitar: Hidráulica Emergencial",
    time: "~60 min",
    desc: "Reparos e instalações hidráulicas de emergência. Registros, tubulações, caixas d'água — resolvemos no mesmo dia, 24 horas.",
    btnColor: C.orange, btnHover: C.orangeDark,
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1768321916212-17ae334a3d63?w=700&h=420&fit=crop&auto=format&q=85",
    imgPos: "center 40%",
    iconKey: "reab",
    badge: { text: "Sem Quebra-Quebra", bg: C.blue },
    title: "Reabilitação de Tubulação",
    href: "/video-inspecao",
    waMsg: "Gostaria de solicitar: Reabilitação de Tubulação",
    time: "~4h",
    desc: "Recuperamos o interior de tubulações antigas ou danificadas sem quebrar paredes, pisos ou jardins. Tecnologia sem escavação que restaura a tubulação por dentro, com durabilidade e economia.",
    btnColor: C.blue, btnHover: "#0F2347",
  },
];

const GALLERY = [
  { img: "photo-1693593790170", label: "Antes — Desentupimento de Esgoto", service: "Desentupimento de Esgoto" },
  { img: "photo-1676210134188", label: "Depois — Desentupimento de Esgoto", service: "Desentupimento de Esgoto" },
  { img: "photo-1676210133055", label: "Reparo Hidráulico Emergencial", service: "Hidráulica Emergencial" },
  { img: "photo-1649769069590", label: "Limpeza de Caixa de Gordura", service: "Limpeza de Caixa de Gordura" },
  { img: "photo-1660330589693", label: "Caça Vazamentos com Equipamento Eletrônico", service: "Caça Vazamentos" },
  { img: "photo-1676210134190", label: "Reparo de Tubulação Concluído", service: "Hidráulica Emergencial" },
];

const TESTIMONIALS = [
  { initials: "MR", name: "Maria Regina Souza", loc: "Vila Mariana, SP", text: "Chamei às 2h da manhã com o esgoto estourado e em menos de 40 minutos o técnico já estava aqui. Resolveu tudo rápido, deixou tudo limpo e o preço foi justo. Salvaram meu apartamento!" },
  { initials: "JO", name: "José Oliveira", loc: "Santo André, ABC", text: "Tinha um vazamento dentro da parede que três empresas não conseguiram achar. A ConserteAí chegou com detector eletrônico, encontrou o problema em 20 minutos e fez o reparo no mesmo dia. Impressionante!" },
  { initials: "AC", name: "Ana Clara Mendes", loc: "Tatuapé, SP", text: "Vaso entupido num domingo de manhã. Liguei, chegaram em 30 minutos, resolveram em 15. Técnico super educado e profissional. Já indiquei para todo o meu condomínio." },
  { initials: "RP", name: "Roberto Pereira", loc: "Guarulhos, SP", text: "Restaurante com caixa de gordura entupida em pleno horário de almoço. A ConserteAí atendeu em emergência, resolveu sem fechar o estabelecimento e ainda explicou como evitar o problema. Profissionalismo total." },
  { initials: "FS", name: "Fernanda Silva", loc: "Mooca, SP", text: "Melhor empresa de desentupimento que já contratei em 10 anos morando em SP. Chegaram no horário, usaram equipamento moderno e deram garantia de verdade. Recomendo demais!" },
  { initials: "CT", name: "Carlos Teixeira", loc: "São Bernardo do Campo, ABC", text: "Hidráulica estourada no fim de semana. Achei que ia ser um pesadelo. A ConserteAí resolveu tudo em 1 hora, preço honesto e garantia de 90 dias. Só trabalho com eles agora." },
];

/* ─── Sub-components ─── */

function UrgencyBar() {
  return (
    <div id="urgbar">
      <a href={TEL}>
        <PhoneIcon size={15} />
        EMERGÊNCIA? Ligue agora: {PHONE} — Atendemos 24h, 7 dias por semana
      </a>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const NAV = [
    ["Serviços", "#servicos"], ["Sobre Nós", "#sobre"], ["Projetos", "#projetos"],
    ["Avaliações", "#avaliacoes"], ["Atendimento", "#atendimento"], ["Contato", "#contato"],
  ];
  return (
    <nav id="nav">
      <div className="nav-inner">
        <NavLogo />
        <div className="nav-links">
          {NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="nav-cta"><WaIcon size={15} />WhatsApp 24h</a>
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open
            ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>
      <div className={"mob-menu" + (open ? " open" : "")}>
        {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        <a href={WA} target="_blank" rel="noopener noreferrer" className="mob-cta" onClick={() => setOpen(false)}>WhatsApp 24h</a>
      </div>
    </nav>
  );
}

const HERO_SLIDES = [
  {
    id: "photo-1676210134188",
    url: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=1800&h=1000&fit=crop&auto=format&q=85",
    label: "Hidráulica Emergencial",
    pos: "center center",
  },
  {
    id: "photo-1676210133055",
    url: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=1800&h=1000&fit=crop&auto=format&q=85",
    label: "Desentupimento de Pia",
    pos: "center 40%",
  },
  {
    id: "photo-1676210134190",
    url: "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?w=1800&h=1000&fit=crop&auto=format&q=85",
    label: "Instalação Hidráulica",
    pos: "center 30%",
  },
  {
    id: "photo-1772397546294",
    url: "https://images.unsplash.com/photo-1772397546294-a2554a8a9793?w=1800&h=1000&fit=crop&auto=format&q=85",
    label: "Desentupimento de Esgoto",
    pos: "center center",
  },
  {
    id: "photo-1526898943670",
    url: "https://images.unsplash.com/photo-1526898943670-92bfa9f94c12?w=1800&h=1000&fit=crop&auto=format&q=85",
    label: "Caça Vazamentos",
    pos: "center 50%",
  },
];

const SLIDE_INTERVAL = 5000;

function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (idx === current || fading) return;
    setPrev(current);
    setFading(true);
    setCurrent(idx);
    setTimeout(() => { setPrev(null); setFading(false); }, 900);
  };

  const next = () => goTo((current + 1) % HERO_SLIDES.length);

  useEffect(() => {
    timerRef.current = setInterval(next, SLIDE_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current, fading]);

  const resetTimer = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(idx);
  };

  return (
    <section id="inicio" style={{ minHeight: "calc(100vh - 104px)", position: "relative", background: C.dark, display: "flex", alignItems: "center", overflow: "hidden" }}>

      {/* Slide layers — previous fades out, current fades in */}
      {HERO_SLIDES.map((slide, i) => {
        const isActive = i === current;
        const isPrev  = i === prev;
        if (!isActive && !isPrev) return null;
        return (
          <div key={slide.id} style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: slide.pos,
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.9s ease",
          }} />
        );
      })}

      {/* Dark blue overlay 75% */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(15,35,71,0.75)", zIndex: 1 }} />

      {/* Service label pill — bottom left */}
      <div style={{
        position: "absolute", bottom: 28, left: 28, zIndex: 3,
        display: "flex", alignItems: "center", gap: 8,
        padding: "7px 16px", borderRadius: 50,
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.22)",
        transition: "opacity .4s",
      }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.orange, flexShrink: 0, boxShadow: `0 0 6px ${C.orange}` }} />
        <span style={{ color: "#fff", fontFamily: "'Open Sans',sans-serif", fontWeight: 600, fontSize: ".8rem", letterSpacing: ".02em" }}>
          {HERO_SLIDES[current].label}
        </span>
      </div>

      {/* Dot indicators — bottom center */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        zIndex: 3, display: "flex", gap: 8, alignItems: "center",
      }}>
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => resetTimer(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? 28 : 8, height: 8,
              borderRadius: 50, border: "none", cursor: "pointer", padding: 0,
              background: i === current ? C.orange : "rgba(255,255,255,0.45)",
              transition: "width .35s ease, background .35s ease",
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Arrow — next */}
      <button
        onClick={() => resetTimer((current + 1) % HERO_SLIDES.length)}
        aria-label="Próxima imagem"
        style={{
          position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
          zIndex: 3, width: 40, height: 40, borderRadius: "50%", border: "none", cursor: "pointer",
          background: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background .15s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(244,115,32,0.75)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "88px 24px", width: "100%" }}>
        <div style={{ maxWidth: 720 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 20px", borderRadius: 50, background: C.orange, color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: ".82rem", letterSpacing: ".01em", marginBottom: 28, boxShadow: "0 4px 16px rgba(244,115,32,.35)" }}>
            ✓ 10 anos de experiência em São Paulo
          </div>
          {/* Title */}
          <h1 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "clamp(2.2rem,5vw,3.75rem)", lineHeight: 1.12, letterSpacing: "-.025em", marginBottom: 20 }}>
            Desentupimento e Hidráulica 24h em São Paulo
          </h1>
          {/* Subtitle */}
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(1rem,2vw,1.14rem)", lineHeight: 1.72, marginBottom: 38, fontFamily: "'Open Sans',sans-serif", fontWeight: 400, maxWidth: 640 }}>
            Atendimento imediato para emergências hidráulicas em toda a Grande SP. Equipe especializada, equipamentos profissionais e garantia no serviço.
          </p>
          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 52 }}>
            <a href="https://wa.me/5511925331686?text=Ol%C3%A1!%20Preciso%20de%20atendimento%20da%20ConserteA%C3%AD%2024h." target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", borderRadius: 6, background: C.orange, color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "1rem", boxShadow: "0 6px 28px rgba(244,115,32,.48)", transition: "background .15s, transform .15s, box-shadow .15s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.orangeDark; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 10px 36px rgba(244,115,32,.55)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.orange; el.style.transform = "none"; el.style.boxShadow = "0 6px 28px rgba(244,115,32,.48)"; }}>
              <WaIcon size={20} color="#fff" />Chamar no WhatsApp Agora
            </a>
            <a href="tel:+5511925331686"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", borderRadius: 6, border: "2px solid rgba(255,255,255,0.78)", color: "#FFFFFF", fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "1rem", transition: "background .15s, border-color .15s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,.12)"; el.style.borderColor = "#fff"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.borderColor = "rgba(255,255,255,.78)"; }}>
              <PhoneIcon size={18} />Ligar: (11) 92533-1686
            </a>
          </div>
          {/* Trust seals */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 0, borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: 24 }}>
            {[
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, label: "Garantia de 90 dias" },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: "Resposta em até 30 min" },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="2.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>, label: "Mais de 5.000 atendimentos" },
            ].map(({ icon, label }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 9, paddingRight: i < 2 ? 24 : 0, marginRight: i < 2 ? 24 : 0, borderRight: i < 2 ? "1px solid rgba(255,255,255,.15)" : "none" }}>
                {icon}
                <span style={{ color: "#FFFFFF", fontSize: ".9rem", fontWeight: 600, fontFamily: "'Open Sans',sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS_DATA = [
  { target: 10,   prefix: "+",  suffix: "",  thousands: false, label: "Anos de Experiência" },
  { target: 5000, prefix: "+",  suffix: "",  thousands: true,  label: "Atendimentos Realizados" },
  { target: 24,   prefix: "",   suffix: "h", thousands: false, label: "Atendimento Ininterrupto" },
  { target: 90,   prefix: "",   suffix: "",  thousands: false, label: "Dias de Garantia" },
];

function StatItem({ target, prefix, suffix, thousands, label, delay, running, isLast }: {
  target: number; prefix: string; suffix: string; thousands: boolean;
  label: string; delay: number; running: boolean; isLast: boolean;
}) {
  const count = useCounter(target, running);
  const display = thousands ? count.toLocaleString("pt-BR") : String(count);
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "44px 20px",
      borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.14)",
      opacity: running ? 1 : 0, transform: running ? "none" : "translateY(12px)",
      transition: `opacity .55s ease ${delay}ms, transform .55s ease ${delay}ms`,
    }}>
      {/* Number */}
      <div style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        fontSize: 64,
        lineHeight: 1,
        color: C.orange,
        letterSpacing: "-0.01em",
        marginBottom: 10,
      }}>
        {prefix}{display}{suffix}
      </div>
      {/* Divider line */}
      <div style={{ width: 36, height: 2, background: C.orange, opacity: 0.5, marginBottom: 10, borderRadius: 2 }} />
      {/* Label */}
      <div style={{
        color: "#FFFFFF",
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 600,
        fontSize: "0.95rem",
        letterSpacing: "0.01em",
        lineHeight: 1.4,
      }}>
        {label}
      </div>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setRunning(true); },
      { threshold: 0.35 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} style={{ background: C.blue }}>
      <div id="stats-inner" style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 24px",
      }}>
        {STATS_DATA.map((s, i) => (
          <StatItem key={s.label} {...s} delay={i * 110} running={running} isLast={i === STATS_DATA.length - 1} />
        ))}
      </div>
    </section>
  );
}

function SvcCard({ s, delay }: { s: SvcEntry; delay: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="rev"
      style={{
        background: "#fff",
        border: `1px solid ${hov ? C.blue : C.border}`,
        borderRadius: 10,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: hov ? `0 12px 40px rgba(27,58,107,.13)` : "0 2px 8px rgba(0,0,0,.05)",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "border-color .22s, box-shadow .22s, transform .22s",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Photo */}
      <div style={{ position: "relative", overflow: "hidden", height: 210, flexShrink: 0 }}>
        <img
          src={s.imgUrl}
          alt={s.title}
          loading="lazy"
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            objectPosition: s.imgPos,
            transform: hov ? "scale(1.05)" : "scale(1)",
            transition: "transform .38s ease",
          }}
        />
        {/* Gradient vignette */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,35,71,.45) 0%, transparent 55%)" }} />
        {/* Badge */}
        {s.badge && (
          <span style={{
            position: "absolute", top: 12, left: 12,
            padding: "4px 13px", borderRadius: 50,
            background: s.badge.bg, color: "#fff",
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
            fontSize: ".7rem", letterSpacing: ".03em",
          }}>
            {s.badge.text}
          </span>
        )}
        {/* Time pill */}
        <span style={{
          position: "absolute", bottom: 12, right: 12,
          display: "flex", alignItems: "center", gap: 5,
          padding: "4px 11px", borderRadius: 50,
          background: "rgba(255,255,255,0.92)",
          fontFamily: "'Open Sans',sans-serif", fontWeight: 600,
          fontSize: ".72rem", color: C.dark,
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          {s.time}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "22px 22px 20px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {/* Icon + title */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 8, flexShrink: 0,
            background: `rgba(27,58,107,.07)`,
            border: `1px solid rgba(27,58,107,.12)`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
           {SVG_ICONS[s.iconKey]}
          </div>
          <h3 style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
            color: C.dark, fontSize: ".97rem", lineHeight: 1.3,
            marginTop: 4, flex: 1,
          }}>
            {s.title}
          </h3>
        </div>

        {/* Description */}
        <p style={{ color: C.grayDark, fontSize: ".86rem", lineHeight: 1.68, flex: 1 }}>
          {s.desc}
        </p>

        {/* CTA */}
       <a
  href={s.href}
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "11px 16px",
    borderRadius: 6,
    background: s.btnColor,
    color: "#fff",
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: ".87rem",
    transition: "background .15s, transform .15s",
    marginTop: 2,
  }}
  onMouseEnter={e => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = s.btnHover;
    el.style.transform = "translateY(-1px)";
  }}
  onMouseLeave={e => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = s.btnColor;
    el.style.transform = "none";
  }}
>
  Ver detalhes do serviço
</a>
      </div>
    </div>
  );
}

function Services() {
  const titleRef = useReveal();
  return (
    <section id="servicos" style={{ background: "#FFFFFF", padding: "96px 0 108px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div ref={titleRef} className="rev" style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block", padding: "5px 18px", borderRadius: 50,
            background: `rgba(27,58,107,.08)`, border: `1px solid rgba(27,58,107,.18)`,
            color: C.blue, fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
            fontSize: ".76rem", letterSpacing: ".07em", textTransform: "uppercase",
            marginBottom: 16,
          }}>
            O que fazemos
          </span>
          <h2 style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
            color: C.blue, fontSize: "clamp(1.8rem,3.5vw,2.5rem)",
            letterSpacing: "-.02em", lineHeight: 1.18, marginBottom: 14,
          }}>
            Nossos Serviços
          </h2>
          <p style={{ color: C.grayMed, fontSize: "1rem", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            Soluções completas para emergências hidráulicas — atendimento imediato 24 horas em toda a Grande SP.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 26,
        }}
          className="svc-responsive-grid"
        >
          {SERVICES.map((s, i) => (
            <SvcCard key={s.title} s={s} delay={i * 70} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── WHY CHOOSE ─── */
const WHY_ITEMS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
        <path d="M19 5l-1.5 1.5" strokeWidth="2"/>
        <path d="M21 3l-1 1" strokeWidth="2.2"/>
      </svg>
    ),
    title: "Atendimento em até 30 Minutos",
    text: "Equipes posicionadas em toda a Grande SP para o menor tempo de resposta em qualquer emergência hidráulica — de dia ou de madrugada.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 7v5c0 5.25 3.5 10.15 8 11.25C16.5 22.15 20 17.25 20 12V7z"/>
        <circle cx="12" cy="11" r="3"/>
        <path d="M12 8v1M12 13v1M9 11h1M14 11h1"/>
      </svg>
    ),
    title: "Técnicos Certificados",
    text: "Equipe treinada e certificada com mais de 10 anos de experiência em serviços hidráulicos residenciais e comerciais em São Paulo.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0z"/>
        <path d="M5 20L3 22M13 11L5 19"/>
        <circle cx="7.5" cy="15.5" r="1" fill={C.blue} stroke="none"/>
      </svg>
    ),
    title: "Equipamentos Modernos",
    text: "Hidrojato de alta pressão, câmera de inspeção de tubulações e detector acústico de vazamentos — tecnologia para resolver com precisão.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: "Garantia de 90 Dias",
    text: "Se o problema voltar, voltamos também — sem custo adicional. Sua tranquilidade é a nossa prioridade e o nosso compromisso.",
  },
];

/* ─── Background photo crossfade slider ─── */
const WHY_BG_PHOTOS = [
  "https://images.unsplash.com/photo-1454988501794-2992f706932e?w=1600&h=900&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1503789146722-cf137a3c0fea?w=1600&h=900&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1671040726131-746880d06bb5?w=1600&h=900&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=1600&h=900&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1538474705339-e87de81450e8?w=1600&h=900&fit=crop&auto=format&q=80",
];

function BgSlider({ urls, opacity = 1, interval = 5500 }: { urls: string[]; opacity?: number; interval?: number }) {
  const [curr, setCurr] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurr(c => (c + 1) % urls.length), interval);
    return () => clearInterval(t);
  }, [urls.length, interval]);
  return (
    <>
      {urls.map((url, i) => (
        <img
          key={url}
          src={url}
          alt=""
          aria-hidden
          loading={i === 0 ? "eager" : "lazy"}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            opacity: i === curr ? opacity : 0,
            transition: "opacity 1.2s ease",
            pointerEvents: "none", userSelect: "none",
          }}
        />
      ))}
    </>
  );
}

function WhyChoose() {
  const titleRef = useReveal();
  return (
    <section id="escolher" style={{ position: "relative", overflow: "hidden", padding: "96px 0 104px", background: C.grayLight }}>
      {/* Rotating photo background */}
      <BgSlider urls={WHY_BG_PHOTOS} opacity={1} interval={5500} />
      {/* Light overlay — keeps cards fully readable */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(244,246,249,0.89)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div ref={titleRef} className="rev" style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block", padding: "5px 18px", borderRadius: 50,
            background: `rgba(27,58,107,.08)`, border: `1px solid rgba(27,58,107,.18)`,
            color: C.blue, fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
            fontSize: ".76rem", letterSpacing: ".07em", textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Nossos diferenciais
          </span>
          <h2 style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.blue,
            fontSize: "clamp(1.8rem,3.5vw,2.5rem)", letterSpacing: "-.02em", lineHeight: 1.18,
            marginBottom: 12,
          }}>
            Por que escolher a ConserteAí?
          </h2>
          <p style={{ color: C.grayMed, fontSize: "1rem", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
            Mais do que desentupimento — entregamos tranquilidade, rapidez e garantia real.
          </p>
        </div>

        {/* 2×2 grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
        }} className="why-responsive-grid">
          {WHY_ITEMS.map((item, i) => (
            <WhyCard key={i} item={item} delay={i * 90} />
          ))}
        </div>

      </div>
    </section>
  );
}

function WhyCard({ item, delay }: { item: typeof WHY_ITEMS[0]; delay: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="rev"
      style={{
        background: "#fff",
        borderRadius: 10,
        border: `1px solid ${hov ? C.blue : C.border}`,
        padding: "32px 30px",
        display: "flex", gap: 22, alignItems: "flex-start",
        boxShadow: hov ? "0 8px 32px rgba(27,58,107,.1)" : "0 2px 8px rgba(0,0,0,.04)",
        transform: hov ? "translateY(-3px)" : "none",
        transition: "border-color .2s, box-shadow .2s, transform .2s",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Icon container */}
      <div style={{
        width: 60, height: 60, borderRadius: 12, flexShrink: 0,
        background: hov ? `rgba(27,58,107,.08)` : `rgba(27,58,107,.05)`,
        border: `1.5px solid rgba(27,58,107,.14)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background .2s",
      }}>
        {item.icon}
      </div>
      {/* Text */}
      <div>
        <h3 style={{
          fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
          color: C.dark, fontSize: "1rem", lineHeight: 1.3, marginBottom: 10,
        }}>
          {item.title}
        </h3>
        <p style={{ color: C.grayDark, fontSize: ".9rem", lineHeight: 1.72 }}>
          {item.text}
        </p>
      </div>
    </div>
  );
}

/* ─── ABOUT ─── */
function About() {
  const imgRef  = useReveal();
  const textRef = useReveal();
  return (
    <section id="sobre" style={{ position: "relative", overflow: "hidden", background: "#FFFFFF", padding: "96px 0 104px" }}>
      <BgSlider
        urls={[
          "https://images.unsplash.com/photo-1558803116-b443d28fa878?w=1600&h=900&fit=crop&auto=format&q=80",
          "https://images.unsplash.com/photo-1454988501794-2992f706932e?w=1600&h=900&fit=crop&auto=format&q=80",
          "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=1600&h=900&fit=crop&auto=format&q=80",
        ]}
        opacity={1}
        interval={7000}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.91)", zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 68,
          alignItems: "center",
        }} className="about-responsive-grid">

          {/* LEFT — photo + seals */}
          <div ref={imgRef} className="rev">
            <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", boxShadow: "0 12px 48px rgba(0,0,0,.14)" }}>
              <img
                src={marcioImg}
                alt="Márcio Vera, técnico da ConserteAí 24h, de braços cruzados usando uniforme oficial"
                style={{ width: "100%", height: 480, objectFit: "cover", objectPosition: "center top", display: "block" }}
                loading="lazy"
              />
              {/* Label overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "28px 24px 20px",
                background: "linear-gradient(transparent, rgba(15,35,71,.82))",
              }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "7px 18px", borderRadius: 50,
                  background: "rgba(244,115,32,.92)", backdropFilter: "blur(4px)",
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff", flexShrink: 0 }} />
                  <span style={{ color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: ".78rem", letterSpacing: ".04em" }}>
                    ConserteAí 24h — Márcio Vera, Técnico
                  </span>
                </div>
              </div>
            </div>

            {/* Logo badge — PNG original em fundo claro */}
            <div style={{ marginTop: 18, alignSelf: "flex-start" }}>
              <img
                src={logoImg}
                alt="ConserteAí 24h — Desentupimento e Hidráulica"
                style={{ height: 64, width: "auto", display: "block" }}
                loading="lazy"
              />
            </div>

            {/* Seals row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
              {[
                { label: "Desde 2015", icon: "📅" },
                { label: "SP e Grande SP", icon: "📍" },
                { label: "+5.000 clientes", icon: "⭐" },
              ].map(({ label, icon }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 7,
                  padding: "9px 18px", borderRadius: 50,
                  background: C.blue, color: "#fff",
                  fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: ".82rem",
                }}>
                  <span role="img" aria-hidden style={{ fontSize: ".9rem" }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — text with subtle rotating photo bg */}
          <div ref={textRef} className="rev" style={{ transitionDelay: "160ms" }}>
            <div>
            {/* Badge */}
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "7px 18px", borderRadius: 50,
              background: C.orange, color: "#fff",
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: ".78rem",
              letterSpacing: ".03em", marginBottom: 22,
            }}>
              Nossa História
            </span>

            <h2 style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.blue,
              fontSize: "clamp(1.65rem,3vw,2.2rem)", lineHeight: 1.22,
              letterSpacing: "-.02em", marginBottom: 26,
            }}>
              Mais de 10 anos resolvendo emergências em São Paulo
            </h2>

            <p style={{ color: C.grayDark, fontSize: ".95rem", lineHeight: 1.78, marginBottom: 16 }}>
              A ConserteAí 24h nasceu em 2015 com um objetivo simples: resolver emergências hidráulicas em São Paulo com rapidez, honestidade e qualidade.
            </p>
            <p style={{ color: C.grayDark, fontSize: ".95rem", lineHeight: 1.78, marginBottom: 16 }}>
              Em 10 anos, já realizamos mais de 5.000 atendimentos, de simples desentupimentos de pia a caça vazamentos complexos em grandes edifícios comerciais. Nossa reputação foi construída serviço a serviço, cliente a cliente, sem atalhos.
            </p>
            <p style={{ color: C.grayDark, fontSize: ".95rem", lineHeight: 1.78, marginBottom: 32 }}>
              Trabalhamos com hidrojato de alta pressão, câmera de inspeção de tubulações e detector acústico de vazamentos. Todos os serviços têm <strong style={{ color: C.blue }}>garantia de 90 dias</strong>.
            </p>

            {/* Mini checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 36 }}>
              {[
                "Orçamento grátis, sem taxa de visita",
                "Atendimento 24h incluindo feriados",
                "Garantia de 90 dias em todos os serviços",
                "Técnicos uniformizados e identificados",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                    background: `rgba(27,58,107,.09)`, border: `1.5px solid rgba(27,58,107,.2)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ color: C.grayDark, fontSize: ".9rem", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CNPJ */}
            <p style={{ color: C.grayMed, fontSize: ".78rem", marginBottom: 22 }}>CNPJ: {CNPJ}</p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 6, background: C.orange, color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: ".9rem", boxShadow: "0 4px 18px rgba(244,115,32,.35)", transition: "background .15s, transform .15s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.orangeDark; el.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.orange; el.style.transform = "none"; }}>
                <WaIcon size={16} color="#fff" />Solicitar Atendimento
              </a>
              <a href="#servicos"
                style={{ display: "inline-flex", alignItems: "center", padding: "13px 26px", borderRadius: 6, border: `2px solid ${C.blue}`, color: C.blue, fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: ".9rem", transition: "background .15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(27,58,107,.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                Ver Nossos Serviços
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY DATA ─── */
const GALLERY_ITEMS = [
  {
    url: "https://images.unsplash.com/photo-1693593790170-e595057fb3c5?w=700&h=480&fit=crop&auto=format&q=85",
    pos: "center center",
    label: "Antes: Desentupimento de Esgoto",
    service: "Desentupimento de Esgoto",
    tag: "Antes",
    tagBg: "#EF4444",
  },
  {
    url: "https://images.unsplash.com/photo-1526898943670-92bfa9f94c12?w=700&h=480&fit=crop&auto=format&q=85",
    pos: "center center",
    label: "Depois: Desentupimento de Esgoto",
    service: "Desentupimento de Esgoto",
    tag: "Depois",
    tagBg: "#16A34A",
  },
  {
    url: "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?w=700&h=480&fit=crop&auto=format&q=85",
    pos: "center 30%",
    label: "Reparo Hidráulico Emergencial",
    service: "Hidráulica Emergencial",
    tag: null,
    tagBg: "",
  },
  {
    url: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=700&h=480&fit=crop&auto=format&q=85",
    pos: "center center",
    label: "Limpeza de Caixa de Gordura",
    service: "Limpeza de Caixa de Gordura",
    tag: null,
    tagBg: "",
  },
  {
    url: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=700&h=480&fit=crop&auto=format&q=85",
    pos: "center 40%",
    label: "Caça Vazamentos Eletrônico",
    service: "Caça Vazamentos",
    tag: null,
    tagBg: "",
  },
  {
    url: "https://images.unsplash.com/photo-1694827893591-af9b80361599?w=700&h=480&fit=crop&auto=format&q=85",
    pos: "center center",
    label: "Reparo de Tubulação Concluído",
    service: "Hidráulica Emergencial",
    tag: "Concluído",
    tagBg: C.blue,
  },
];

function GalleryItem({ item, delay }: { item: typeof GALLERY_ITEMS[0]; delay: number }) {
  const [hov, setHov] = useState(false);
  const waLink = `https://wa.me/5511925331686?text=${encodeURIComponent("Gostaria de solicitar: " + item.service + ". Preciso de atendimento da ConserteAí 24h.")}`;
  return (
    <div
      className="rev"
      style={{
        position: "relative", borderRadius: 10, overflow: "hidden",
        boxShadow: hov ? "0 16px 48px rgba(15,35,71,.22)" : "0 4px 16px rgba(0,0,0,.08)",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "box-shadow .28s, transform .28s",
        transitionDelay: `${delay}ms`,
        cursor: "pointer",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Photo */}
      <img
        src={item.url}
        alt={item.label}
        loading="lazy"
        style={{
          width: "100%", height: 270, objectFit: "cover",
          objectPosition: item.pos,
          display: "block",
          transform: hov ? "scale(1.06)" : "scale(1)",
          transition: "transform .5s ease",
        }}
      />

      {/* Tag pill (antes/depois/concluído) */}
      {item.tag && (
        <span style={{
          position: "absolute", top: 12, left: 12,
          padding: "4px 12px", borderRadius: 50,
          background: item.tagBg, color: "#fff",
          fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: ".7rem",
          letterSpacing: ".04em", zIndex: 2,
        }}>
          {item.tag}
        </span>
      )}

      {/* Static label bar (visible when not hovering) */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "28px 16px 14px",
        background: "linear-gradient(transparent, rgba(15,35,71,.75))",
        opacity: hov ? 0 : 1,
        transition: "opacity .28s",
        pointerEvents: "none",
      }}>
        <span style={{ color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: ".82rem" }}>
          {item.label}
        </span>
      </div>

      {/* Hover overlay — blue with label + CTA */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(15,35,71,0.82)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 24, gap: 16,
        opacity: hov ? 1 : 0,
        transition: "opacity .28s",
      }}>
        {/* Category icon */}
        <div style={{ width: 48, height: 62, borderRadius: "50%", border: "2px solid rgba(255,255,255,.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <p style={{ color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: ".95rem", textAlign: "center", lineHeight: 1.35 }}>
          {item.label}
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            padding: "9px 20px", borderRadius: 6,
            background: C.orange, color: "#fff",
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: ".82rem",
            transition: "background .15s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.orangeDark; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.orange; }}
        >
          <WaIcon size={14} color="#fff" />Solicitar este serviço
        </a>
      </div>
    </div>
  );
}

function Gallery() {
  const titleRef = useReveal();
  return (
    <section id="projetos" style={{ background: C.grayLight, padding: "96px 0 104px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div ref={titleRef} className="rev" style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{
            display: "inline-block", padding: "5px 18px", borderRadius: 50,
            background: `rgba(27,58,107,.08)`, border: `1px solid rgba(27,58,107,.18)`,
            color: C.blue, fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
            fontSize: ".76rem", letterSpacing: ".07em", textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Portfólio
          </span>
          <h2 style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.blue,
            fontSize: "clamp(1.8rem,3.5vw,2.5rem)", letterSpacing: "-.02em", marginBottom: 12,
          }}>
            Trabalhos Realizados
          </h2>
          <p style={{ color: C.grayMed, fontSize: "1rem", lineHeight: 1.7, maxWidth: 540, margin: "0 auto" }}>
            Confira alguns dos nossos atendimentos mais recentes em São Paulo e região. Passe o mouse sobre as fotos para solicitar o serviço.
          </p>
        </div>

        {/* Grid 3 cols */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }} className="gal-responsive-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryItem key={i} item={item} delay={i * 65} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const TESTIMONIALS_DATA = [
  { initials: "MR", name: "Maria Regina Souza", loc: "Vila Mariana, SP", text: "Chamei às 2h da manhã com o esgoto estourado e em menos de 40 minutos o técnico já estava aqui. Resolveu tudo rápido, deixou tudo limpo e o preço foi justo. Salvaram meu apartamento!" },
  { initials: "JO", name: "José Oliveira", loc: "Santo André, ABC", text: "Tinha um vazamento dentro da parede que três empresas não conseguiram achar. A ConserteAí chegou com detector eletrônico, encontrou em 20 minutos e fez o reparo no mesmo dia." },
  { initials: "AC", name: "Ana Clara Mendes", loc: "Tatuapé, SP", text: "Vaso entupido num domingo de manhã. Liguei, chegaram em 30 minutos, resolveram em 15. Técnico super educado e profissional. Já indiquei para todo o meu condomínio." },
  { initials: "RP", name: "Roberto Pereira", loc: "Guarulhos, SP", text: "Restaurante com caixa de gordura entupida em pleno horário do almoço. Resolveram sem fechar o estabelecimento e ainda explicaram como evitar o problema. Profissionalismo total." },
  { initials: "FS", name: "Fernanda Silva", loc: "Mooca, SP", text: "Melhor empresa de desentupimento que já contratei em 10 anos morando em SP. Chegaram no horário, usaram equipamento moderno e deram garantia de verdade. Recomendo demais!" },
  { initials: "CT", name: "Carlos Teixeira", loc: "São Bernardo do Campo, ABC", text: "Hidráulica estourada no fim de semana. A ConserteAí resolveu tudo em 1 hora, preço honesto e garantia de 90 dias. Só trabalho com eles agora." },
];

const AVATAR_COLORS = [C.blue, "#1E5C8A", "#234E8C", "#1B4A7A", "#17407E", "#1A3B6E"];

function TestCard({ t, i, delay }: { t: typeof TESTIMONIALS_DATA[0]; i: number; delay: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="rev"
      style={{
        background: "#fff",
        border: `1px solid ${hov ? C.blue : C.border}`,
        borderRadius: 10,
        padding: "26px 24px 22px",
        display: "flex", flexDirection: "column", gap: 0,
        boxShadow: hov ? "0 8px 32px rgba(27,58,107,.1)" : "0 2px 8px rgba(0,0,0,.04)",
        transform: hov ? "translateY(-3px)" : "none",
        transition: "border-color .2s, box-shadow .2s, transform .2s",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
        {Array(5).fill(0).map((_, k) => (
          <svg key={k} width="16" height="16" viewBox="0 0 24 24" fill={C.yellow}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p style={{
        color: C.grayDark, fontSize: ".875rem", lineHeight: 1.73,
        fontStyle: "italic", flex: 1, marginBottom: 20,
        position: "relative",
      }}>
        <span style={{ color: C.blue, fontSize: "1.4rem", lineHeight: 0, verticalAlign: "-0.3em", marginRight: 2, fontFamily: "Georgia,serif" }}>"</span>
        {t.text}
        <span style={{ color: C.blue, fontSize: "1.4rem", lineHeight: 0, verticalAlign: "-0.3em", marginLeft: 2, fontFamily: "Georgia,serif" }}>"</span>
      </p>

      {/* Divider */}
      <div style={{ height: 1, background: C.border, marginBottom: 16 }} />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
          background: AVATAR_COLORS[i % AVATAR_COLORS.length],
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(27,58,107,.25)",
        }}>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, color: "#fff", fontSize: ".84rem", letterSpacing: ".02em" }}>
            {t.initials}
          </span>
        </div>
        <div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.dark, fontSize: ".88rem", marginBottom: 2 }}>
            {t.name}
          </div>
          <div style={{ color: C.grayMed, fontSize: ".74rem", fontWeight: 500 }}>
            {t.loc}
          </div>
        </div>
        {/* Verified badge */}
        <div style={{ marginLeft: "auto" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const titleRef = useReveal();
  return (
    <section id="avaliacoes" style={{ position: "relative", overflow: "hidden", background: "#FFFFFF", padding: "96px 0 104px" }}>
      <BgSlider
        urls={[
          "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1600&h=900&fit=crop&auto=format&q=80",
          "https://images.unsplash.com/photo-1590650046871-92c887180603?w=1600&h=900&fit=crop&auto=format&q=80",
          "https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?w=1600&h=900&fit=crop&auto=format&q=80",
          "https://images.unsplash.com/photo-1601513041797-a79a526a521e?w=1600&h=900&fit=crop&auto=format&q=80",
        ]}
        opacity={1}
        interval={5500}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.88)", zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div ref={titleRef} className="rev" style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{
            display: "inline-block", padding: "5px 18px", borderRadius: 50,
            background: `rgba(27,58,107,.08)`, border: `1px solid rgba(27,58,107,.18)`,
            color: C.blue, fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
            fontSize: ".76rem", letterSpacing: ".07em", textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Avaliações reais
          </span>
          <h2 style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.blue,
            fontSize: "clamp(1.8rem,3.5vw,2.5rem)", letterSpacing: "-.02em", marginBottom: 12,
          }}>
            O que nossos clientes dizem
          </h2>
          <p style={{ color: C.grayMed, fontSize: "1rem", lineHeight: 1.7 }}>
            Mais de 500 avaliações 5 estrelas no Google em São Paulo e região.
          </p>
        </div>

        {/* Grid 3 cols */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }} className="test-responsive-grid">
          {TESTIMONIALS_DATA.map((t, i) => (
            <TestCard key={i} t={t} i={i} delay={i * 75} />
          ))}
        </div>

        {/* Google badge */}
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            padding: "12px 28px", borderRadius: 50,
            background: "#F4F6F9", border: `1px solid ${C.border}`,
            boxShadow: "0 2px 8px rgba(0,0,0,.05)",
          }}>
            <div style={{ display: "flex", gap: 2 }}>
              {Array(5).fill(0).map((_, k) => (
                <svg key={k} width="15" height="15" viewBox="0 0 24 24" fill={C.yellow}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                </svg>
              ))}
            </div>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.blue, fontSize: ".88rem" }}>
              500+ avaliações 5 estrelas no Google
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}

function Coverage() {
  const ref = useReveal();
  return (
    <section id="atendimento" style={{ position: "relative", overflow: "hidden", minHeight: 640, background: C.dark }}>

      {/* Full-bleed São Paulo aerial satellite image */}
      <img
        src="https://images.unsplash.com/photo-1561592390-42c07289e9cb?w=1800&h=900&fit=crop&auto=format&q=88"
        alt="Vista aérea da Grande São Paulo"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        loading="lazy"
      />

      {/* Left-heavy gradient — content side dark, satellite visible on right */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(108deg, rgba(15,35,71,0.97) 0%, rgba(15,35,71,0.93) 28%, rgba(15,35,71,0.70) 52%, rgba(15,35,71,0.28) 78%, rgba(15,35,71,0.10) 100%)",
      }} />
      {/* Bottom edge darkening for footer continuity */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,35,71,0.55) 0%, transparent 42%)" }} />
      {/* Mobile: stronger overlay for legibility */}
      <div className="cov-mob-overlay" />

      {/* Coverage zone circles on the satellite side */}
      <div className="cov-zones" aria-hidden>
        {[
          { r: 130, border: "rgba(27,58,107,0.65)", fill: "rgba(15,35,71,0.12)" },
          { r: 220, border: "rgba(37,99,168,0.40)", fill: "rgba(37,99,168,0.05)" },
          { r: 315, border: "rgba(191,219,254,0.22)", fill: "rgba(191,219,254,0.02)" },
        ].map((c, i) => (
          <div key={i} style={{
            position: "absolute", top: "50%", left: "63%",
            transform: "translate(-50%,-50%)",
            width: c.r * 2, height: c.r * 2, borderRadius: "50%",
            border: `1.5px dashed ${c.border}`, background: c.fill,
          }} />
        ))}
        {/* Pulsing location pin at SP Capital */}
        <div style={{ position: "absolute", top: "50%", left: "63%", transform: "translate(-50%,-50%)" }}>
          <div className="cov-pin" />
        </div>
      </div>

      {/* Content panel — left-aligned over dark gradient */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "96px 24px" }}>
        <div ref={ref} className="rev cov-panel">

          {/* Badge */}
          <span style={{
            display: "inline-block", padding: "5px 16px", borderRadius: 50, marginBottom: 20,
            background: "rgba(244,115,32,0.18)", border: "1px solid rgba(244,115,32,0.45)",
            color: C.orange, fontFamily: "'Montserrat',sans-serif",
            fontWeight: 700, fontSize: ".74rem", letterSpacing: ".07em", textTransform: "uppercase",
          }}>Área de Cobertura</span>

          {/* Title */}
          <h2 style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: "#fff",
            fontSize: "clamp(1.8rem,3.5vw,2.6rem)", letterSpacing: "-.02em",
            lineHeight: 1.18, marginBottom: 14,
          }}>
            Nossa Área de Atendimento
          </h2>

          {/* Subtitle */}
          <p style={{ color: "rgba(255,255,255,.72)", fontSize: ".97rem", lineHeight: 1.72, marginBottom: 32, maxWidth: 440 }}>
            Cobrimos toda a Grande São Paulo com equipes posicionadas estrategicamente para o menor tempo de resposta.
          </p>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.14)", marginBottom: 28 }} />

          {/* Response-time legend */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
            {[
              { dot: C.blue, label: "São Paulo Capital", time: "Até 30 min" },
              { dot: C.med, label: "ABC e Guarulhos", time: "30 a 60 min" },
              { dot: "rgba(191,219,254,0.45)", label: "Demais municípios RMSP", time: "Sob consulta", border: true },
            ].map(({ dot, label, time, border }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 13 }}>
                <div style={{
                  width: 30, height: 12, borderRadius: 3, flexShrink: 0,
                  background: dot,
                  border: border ? "1px solid rgba(191,219,254,0.55)" : "none",
                }} />
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: ".88rem" }}>{label}</span>
                  <span style={{ padding: "2px 9px", borderRadius: 50, background: C.orange, color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: ".7rem" }}>{time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9, minHeight: 48,
              padding: "13px 26px", borderRadius: 7,
              background: C.orange, color: "#fff",
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: ".92rem",
              boxShadow: "0 4px 22px rgba(244,115,32,.45)",
              transition: "background .15s, transform .15s", marginBottom: 30,
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.orangeDark; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.orange; el.style.transform = "none"; }}>
            <WaIcon size={17} color="#fff" />Verificar disponibilidade
          </a>

          {/* Cities served */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {["São Paulo Capital","Santo André","São Bernardo do Campo","São Caetano do Sul",
              "Guarulhos","Osasco","Barueri","Mauá","Diadema","Ribeirão Pires"].map(c => (
              <span key={c} style={{
                padding: "5px 12px", borderRadius: 50,
                background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.82)",
                fontFamily: "'Open Sans',sans-serif", fontSize: ".78rem", fontWeight: 500,
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function Contact() {
  const titleRef = useReveal();
  const formRef = useReveal();
  const cardsRef = useReveal();
  const [f, setF] = useState({ nome: "", tel: "", serv: "", bairro: "", msg: "" });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [foc, setFoc] = useState<string | null>(null);
  const set = (k: string, v: string) => { setF(p => ({ ...p, [k]: v })); if (errs[k]) setErrs(e => { const n = { ...e }; delete n[k]; return n; }); };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!f.nome.trim()) err.nome = "Nome obrigatório";
    if (!f.tel.trim()) err.tel = "Telefone obrigatório";
    else if (f.tel.replace(/\D/g,"").length < 10) err.tel = "Formato inválido";
    if (!f.serv) err.serv = "Selecione um serviço";
    if (!f.bairro.trim()) err.bairro = "Bairro/cidade obrigatório";
    if (Object.keys(err).length) { setErrs(err); return; }
    const msg = encodeURIComponent(`Olá! Preciso de atendimento da ConserteAí 24h.\n\nNome: ${f.nome}\nTelefone: ${f.tel}\nServiço: ${f.serv}\nBairro/Cidade: ${f.bairro}${f.msg ? `\nProblema: ${f.msg}` : ""}`);
    window.open(`https://wa.me/5511925331686?text=${msg}`, "_blank", "noopener,noreferrer");
  };
  const border = (k: string) => errs[k] ? "#EF4444" : foc === k ? C.orange : "transparent";
  const CARDS = [
    { icon: <WaIcon size={20} color="#25D366" />, label: "WhatsApp 24h", val: PHONE, href: WA, valColor: C.orange, badge: "EMERGÊNCIA 24H", external: true },
    { icon: <PhoneIcon size={20} />, label: "Telefone", val: PHONE, href: TEL, valColor: "#fff", badge: null, external: false },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 7 10-7"/></svg>, label: "E-mail", val: EMAIL, href: `mailto:${EMAIL}`, valColor: "#fff", badge: null, external: false },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>, label: "Instagram", val: "@conserteai24h", href: INSTAGRAM, valColor: "#fff", badge: null, external: true },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>, label: "Facebook", val: "ConserteAí 24h", href: FACEBOOK, valColor: "#fff", badge: null, external: true },
  ];
  const SERVS = ["Desentupimento de Esgoto","Desentupimento de Pia","Desentupimento de Vaso Sanitário","Limpeza de Caixa de Gordura","Caça Vazamentos","Hidráulica Emergencial","Reabilitação de Tubulação","Outro"];
  return (
    <section id="contato" style={{ background: C.dark, padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div ref={titleRef} className="rev" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: "#fff", fontSize: "clamp(1.75rem,3.5vw,2.4rem)", letterSpacing: "-.01em", marginBottom: 12 }}>Entre em Contato Agora</h2>
          <p style={{ color: "rgba(255,255,255,.75)", fontSize: "1rem" }}>Preencha o formulário ou chame diretamente no WhatsApp. Respondemos em minutos, 24 horas por dia.</p>
        </div>
        <div className="con-grid">
          <div ref={formRef} className="rev">
            <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12, padding: "32px 28px" }}>
              <form onSubmit={submit} noValidate>
                <div className="form-row">
                  <div>
                    <label className="flabel">Nome completo *</label>
                    <input className={"finput" + (errs.nome ? " err" : "")} placeholder="Seu nome" value={f.nome} onChange={e => set("nome", e.target.value)} style={{ border: `1px solid ${border("nome")}` }} onFocus={() => setFoc("nome")} onBlur={() => setFoc(null)} />
                    <div className="ferr">{errs.nome}</div>
                  </div>
                  <div>
                    <label className="flabel">Telefone *</label>
                    <input className={"finput" + (errs.tel ? " err" : "")} placeholder="(11) 99999-9999" value={f.tel} onChange={e => set("tel", maskPhone(e.target.value))} style={{ border: `1px solid ${border("tel")}` }} onFocus={() => setFoc("tel")} onBlur={() => setFoc(null)} />
                    <div className="ferr">{errs.tel}</div>
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label className="flabel">Tipo de serviço *</label>
                    <select className={"fselect" + (errs.serv ? " err" : "")} value={f.serv} onChange={e => set("serv", e.target.value)} style={{ border: `1px solid ${border("serv")}` }} onFocus={() => setFoc("serv")} onBlur={() => setFoc(null)}>
                      <option value="" disabled>Selecione...</option>
                      {SERVS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <div className="ferr">{errs.serv}</div>
                  </div>
                  <div>
                    <label className="flabel">Bairro e cidade *</label>
                    <input className={"finput" + (errs.bairro ? " err" : "")} placeholder="Ex: Vila Mariana, SP" value={f.bairro} onChange={e => set("bairro", e.target.value)} style={{ border: `1px solid ${border("bairro")}` }} onFocus={() => setFoc("bairro")} onBlur={() => setFoc(null)} />
                    <div className="ferr">{errs.bairro}</div>
                  </div>
                </div>
                <div className="fgroup">
                  <label className="flabel">Descrição do problema (opcional)</label>
                  <textarea className="ftarea" placeholder="Descreva brevemente o que está acontecendo..." value={f.msg} onChange={e => set("msg", e.target.value)} style={{ border: `1px solid ${border("msg")}` }} onFocus={() => setFoc("msg")} onBlur={() => setFoc(null)} />
                </div>
                <button type="submit" style={{ width: "100%", padding: "13px", borderRadius: 6, background: C.orange, color: "#fff", border: "none", fontFamily: "'Open Sans',sans-serif", fontWeight: 700, fontSize: ".95rem", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer", transition: "background .15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.orangeDark; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.orange; }}>
                  <WaIcon size={18} />Enviar pelo WhatsApp
                </button>
              </form>
            </div>
          </div>
          <div ref={cardsRef} className="rev" style={{ transitionDelay: "150ms", display: "flex", flexDirection: "column", gap: 12 }}>
            {CARDS.map(({ icon, label, val, href, valColor, badge, external }) => (
              <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "15px 18px", borderRadius: 8, background: "rgba(37,99,168,.2)", border: "1px solid rgba(255,255,255,.1)", transition: "background .15s, border-color .15s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(37,99,168,.3)"; el.style.borderColor = "rgba(244,115,32,.4)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(37,99,168,.2)"; el.style.borderColor = "rgba(255,255,255,.1)"; }}>
                <div style={{ width: 42, height: 42, borderRadius: 8, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: ".75rem", fontWeight: 600, color: "rgba(255,255,255,.65)", marginBottom: 2 }}>{label}</div>
                  <div style={{ fontWeight: 600, color: valColor, fontSize: ".88rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{val}</div>
                </div>
                {badge && <span style={{ padding: "3px 9px", borderRadius: 50, background: C.orange, color: "#fff", fontWeight: 700, fontSize: ".66rem", flexShrink: 0 }}>{badge}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useReveal();
  return (
    <section style={{ background: C.orange, padding: "96px 0", textAlign: "center" }}>
      <div ref={ref} className="rev" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: "#fff", fontSize: "clamp(1.8rem,4vw,2.7rem)", letterSpacing: "-.02em", lineHeight: 1.18, marginBottom: 14 }}>
          Problema Hidráulico? A ConserteAí Resolve Agora.
        </h2>
        <p style={{ color: "rgba(255,255,255,.9)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: 34 }}>
          Atendimento 24 horas em toda a Grande SP. Orçamento grátis, sem taxa de visita.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 36 }}>
          {["Orçamento Grátis","Sem Taxa de Visita","Garantia de 90 Dias"].map(t => (
            <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 17px", borderRadius: 50, border: "2px solid rgba(255,255,255,.7)", color: "#fff", fontWeight: 600, fontSize: ".87rem" }}>✓ {t}</span>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 30px", borderRadius: 6, background: "#fff", color: C.orange, fontWeight: 700, fontSize: ".95rem", boxShadow: "0 4px 20px rgba(0,0,0,.15)", transition: "transform .15s, box-shadow .15s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 8px 32px rgba(0,0,0,.2)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)"; }}>
            <WaIcon size={18} color="#25D366" />Chamar no WhatsApp
          </a>
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 30px", borderRadius: 6, border: "2px solid rgba(255,255,255,.75)", color: "#fff", fontWeight: 600, fontSize: ".95rem", transition: "background .15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.1)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
            <PhoneIcon />Ligar: {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const NAV = [["Início","#inicio"],["Serviços","#servicos"],["Por que Escolher","#escolher"],["Sobre Nós","#sobre"],["Projetos","#projetos"],["Avaliações","#avaliacoes"],["Atendimento","#atendimento"],["Contato","#contato"]];
  const SERVS = ["Desentupimento de Esgoto","Desentupimento de Pia","Desentupimento de Vaso Sanitário","Limpeza de Caixa de Gordura","Caça Vazamentos","Hidráulica Emergencial","Reabilitação de Tubulação"];
  const ls: React.CSSProperties = { display: "block", color: "rgba(255,255,255,.65)", fontSize: ".85rem", marginBottom: 8, transition: "color .15s" };
  return (
    <footer style={{ background: C.dark, borderTop: `3px solid ${C.orange}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40, marginBottom: 44 }}>
          <div>
            <div style={{ marginBottom: 14 }}><FooterLogo /></div>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".83rem", lineHeight: 1.7, marginBottom: 8 }}>
              Especialistas em desentupimento, hidráulica emergencial e caça vazamentos em São Paulo e região metropolitana há mais de 10 anos.
            </p>
            <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".75rem", marginBottom: 18 }}>CNPJ: {CNPJ}</p>
            <div style={{ display: "flex", gap: 10 }}>
              {[[INSTAGRAM, <svg key="ig" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>], [FACEBOOK, <svg key="fb" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>]].map(([href, icon]) => (
                <a key={href as string} href={href as string} target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,.75)", transition: "background .15s, color .15s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.orange; el.style.color = "#fff"; el.style.borderColor = C.orange; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,.1)"; el.style.color = "rgba(255,255,255,.75)"; el.style.borderColor = "rgba(255,255,255,.12)"; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.orange, fontSize: ".88rem", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 16 }}>Links Rápidos</div>
            {NAV.map(([l, h]) => <a key={h} href={h} style={ls} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.orange; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.65)"; }}>{l}</a>)}
          </div>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.orange, fontSize: ".88rem", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 16 }}>Nossos Serviços</div>
            {SERVS.map(s => <a key={s} href="#servicos" style={ls} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.orange; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.65)"; }}>{s}</a>)}
          </div>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.orange, fontSize: ".88rem", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 16 }}>Contato</div>
            <a href={TEL} style={{ display: "block", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.orange, fontSize: "1rem", marginBottom: 8 }}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`} style={{ display: "block", color: "rgba(255,255,255,.65)", fontSize: ".83rem", marginBottom: 14, transition: "color .15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.65)"; }}>{EMAIL}</a>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: ".78rem", marginBottom: 14 }}>Atendemos 24h por dia, 7 dias por semana</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 6, background: C.orange, color: "#fff", fontWeight: 600, fontSize: ".8rem", transition: "background .15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.orangeDark; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.orange; }}>
              <WaIcon size={14} />Chamar no WhatsApp
            </a>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.med}`, paddingTop: 22, textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,.45)", fontSize: ".8rem", marginBottom: 4 }}>© 2026 ConserteAí 24h. Todos os direitos reservados. CNPJ: {CNPJ}</p>
          <p style={{ color: "rgba(255,255,255,.2)", fontSize: ".7rem" }}>Desentupimento e Hidráulica Emergencial em São Paulo</p>
        </div>
      </div>
    </footer>
  );
}

function WAFloat() {
  const [vis, setVis] = useState(false);
  const [hov, setHov] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 800); return () => clearTimeout(t); }, []);
  return (
    <div id="wa-float" style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(16px)", transition: "opacity .4s ease, transform .4s ease" }}>
      <div id="wa-tip">Fale conosco agora!</div>
      <a id="wa-btn" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp"
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ transform: hov ? "scale(1.1)" : "scale(1)", boxShadow: hov ? "0 8px 32px rgba(37,211,102,.55)" : "0 4px 20px rgba(37,211,102,.42)" }}>
        <div className="wa-ping" />
        <svg width="30" height="30" viewBox="0 0 30 30" fill="white"><path d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15c0 2.2.6 4.4 1.7 6.3L2.5 27.5l6.4-1.7c1.8 1 3.9 1.6 6.1 1.6 6.9 0 12.5-5.6 12.5-12.5S21.9 2.5 15 2.5zm6.2 17.4c-.3.8-1.5 1.4-2.1 1.5-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.7-3.1-1.3-5.1-4.4-5.3-4.6-.2-.2-1.4-1.8-1.4-3.5s.9-2.5 1.2-2.8c.3-.3.7-.4.9-.4h.7c.2 0 .5-.1.7.5.3.7 1 2.5 1.1 2.7.1.2.1.4 0 .6-.1.2-.2.3-.3.5-.1.2-.3.4-.4.5-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.8.9 2.1 1 .3.2.5.2.6.3.1.2.1.9-.2 1.7z"/></svg>
      </a>
    </div>
  );
}

/* ─── Root component ─── */
export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);

    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;500;600&family=Oswald:wght@600;700&display=swap";
    document.head.appendChild(link2);

    document.title = "Desentupimento e Hidráulica 24h em SP | ConserteAí";

    const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14.5" fill="#1c3357"/><circle cx="16" cy="16" r="14.5" fill="none" stroke="#e8792a" stroke-width="2.7"/><circle cx="16" cy="16" r="9.4" fill="#ffffff"/><path d="M9.7 16.1 L13.6 20.4 L22.3 9.6" stroke="#e8792a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
    const faviconUrl = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/svg+xml";
    favicon.href = faviconUrl;
    document.head.appendChild(favicon);

    const metas: HTMLMetaElement[] = [];
    const addMeta = (attrs: Record<string, string>) => {
      const m = document.createElement("meta");
      Object.entries(attrs).forEach(([k, v]) => m.setAttribute(k, v));
      document.head.appendChild(m);
      metas.push(m);
    };
    addMeta({ name: "description", content: "Desentupimento, caça vazamentos e hidráulica emergencial 24h em São Paulo e ABC. Atendimento imediato, orçamento grátis. CNPJ: 26.977.406/0001-12. Chame no WhatsApp agora." });
    addMeta({ property: "og:title", content: "Desentupimento e Hidráulica 24h em SP | ConserteAí" });
    addMeta({ property: "og:description", content: "Desentupimento, caça vazamentos e hidráulica emergencial 24h em São Paulo e ABC. Atendimento imediato, orçamento grátis. Chame no WhatsApp agora." });
    addMeta({ property: "og:type", content: "website" });

    // Global safety net: reveal any .rev element still hidden after 2s
    const globalTimer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".rev:not(.vis)").forEach(el => el.classList.add("vis"));
    }, 2000);

    return () => {
      clearTimeout(globalTimer);
      document.head.removeChild(style);
      document.head.removeChild(link2);
      metas.forEach(m => document.head.contains(m) && document.head.removeChild(m));
    };
  }, []);

  return (
    <>
      <UrgencyBar />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChoose />
      <About />
      <Gallery />
      <Testimonials />
      <Coverage />
      <Contact />
      <CTASection />
      <Footer />
      <WAFloat />
    </>
  );
}
