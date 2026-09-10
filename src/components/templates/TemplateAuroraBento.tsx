import { useState } from "react";
import {
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Star,
  ChevronDown,
  Shield,
  Clock,
  Compass,
  Laptop,
  Flame,
  Check,
} from "lucide-react";

export function TemplateAuroraBento() {
  const [selectedTier, setSelectedTier] = useState("Escala Total");
  const [clientType, setClientType] = useState("Negócio Local / Clínica");
  const [wantsCustomDomain, setWantsCustomDomain] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const phone = "5521964639999";
  const phoneDisplay = "(21) 96463-9999";

  const getPrice = () => {
    let base = 997;
    if (selectedTier === "Presença Express") base = 497;
    if (selectedTier === "Escala Total") base = 997;
    if (selectedTier === "Ecossistema IA") base = 1997;
    if (wantsCustomDomain) base += 90;
    return base;
  };

  const generateWhatsappUrl = () => {
    const msg = `Olá, Cronos! Montei meu projeto no modelo Aurora Bento:
• Segmento: ${clientType}
• Plano: ${selectedTier}
• Domínio Próprio & Setup: ${wantsCustomDomain ? "Sim (+R$90)" : "Não"}
• Valor Estimado: R$ ${getPrice()}/mês

Gostaria de ver uma prévia personalizada do meu site!`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  const bentoPlans = [
    {
      name: "Presença Express",
      tagline: "Para quem precisa vender rápido com máxima elegância",
      price: "R$ 497",
      period: "/mês",
      highlight: false,
      accentClass: "border-white/15 bg-white/[0.04]",
      perks: [
        "Landing Page Bento em Vidro Holográfico",
        "Botões Estratégicos Direto para o WhatsApp",
        "Google Meu Negócio Configurado",
        "Layout Responsivo para iPhone & Android",
      ],
    },
    {
      name: "Escala Total",
      tagline: "O plano favorito para empresas que querem dominar a região",
      price: "R$ 997",
      period: "/mês",
      highlight: true,
      accentClass: "border-cyan-400/50 bg-gradient-to-b from-cyan-500/10 via-white/[0.05] to-transparent shadow-[0_0_50px_rgba(6,182,212,0.25)]",
      perks: [
        "Tudo do Plano Presença Express",
        "Tráfego Pago Especializado (Google + Instagram)",
        "Copywriting de Alto Impacto para Vendas",
        "Simulador Interativo Personalizado",
        "Hospedagem de Alta Performance Inclusa",
        "Relatório Mensal com Análise de ROI",
      ],
    },
    {
      name: "Ecossistema IA",
      tagline: "Máquina de vendas automatizada 24 horas por dia",
      price: "R$ 1.997",
      period: "/mês",
      highlight: false,
      accentClass: "border-white/15 bg-white/[0.04]",
      perks: [
        "Tudo do Plano Escala Total",
        "Agente de IA Receptivo para WhatsApp",
        "Funil de Qualificação Automática de Leads",
        "Otimização Contínua de Conversão",
        "Suporte Prioritário Direto com Diretores",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans overflow-x-hidden">
      {/* Aurora Mesh Glows in Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[10%] h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[180px] animate-pulse" />
        <div className="absolute top-[25%] right-[-15%] h-[800px] w-[800px] rounded-full bg-violet-600/20 blur-[200px]" />
        <div className="absolute bottom-[-20%] left-[30%] h-[750px] w-[750px] rounded-full bg-fuchsia-600/15 blur-[190px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="relative z-10 border-b border-cyan-500/20 bg-black/50 backdrop-blur-md px-4 py-2 text-center text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-bold text-cyan-300">VERSÃO 2: AURORA HOLOGRAPHIC BENTO-GLASS</span>
          <span className="text-white/40">·</span>
          <span className="text-white/70 hidden sm:inline">Bento Grid Modular, Refração Prismática & Alta Conversão</span>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050816]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/30 to-violet-500/30 border border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <span className="font-serif text-lg font-black tracking-tight text-white flex items-center gap-1">
                CRONOS <span className="text-cyan-400">/</span> AURORA
              </span>
              <p className="text-[10px] tracking-wider uppercase text-cyan-200/70 font-bold">
                Bento Grid Architecture
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#bento-pilares" className="hover:text-cyan-300 transition">
              Bento Diferenciais
            </a>
            <a href="#bento-planos" className="hover:text-cyan-300 transition">
              Planos & Tiers
            </a>
            <a href="#bento-simulador" className="hover:text-cyan-300 transition">
              Simulador Interativo
            </a>
            <a href="#bento-faq" className="hover:text-cyan-300 transition">
              Dúvidas Frequentes
            </a>
          </nav>

          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá! Vi a Versão 2 Aurora Bento e quero conversar sobre o site da minha empresa.")}`}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-2xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/30 via-violet-500/20 to-transparent px-5 py-2.5 text-xs sm:text-sm font-bold text-white backdrop-blur-xl transition-all hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-cyan-300" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </header>

      {/* 3. HERO BENTO SECTION */}
      <section className="relative z-10 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-300 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>O Novo Padrão Visual da Internet para Negócios Locais</span>
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl leading-[1.08]">
              Design em{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                Bento Grid
              </span>{" "}
              que Prende a Atenção e Multiplica Vendas.
            </h1>

            <p className="text-base sm:text-lg text-slate-300/80 max-w-2xl mx-auto leading-relaxed">
              Substitua sites estáticos e esquecíveis por uma experiência interativa e modular em vidro holográfico. Mais
              tempo de tela, maior autoridade e clientes qualificados no seu WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#bento-simulador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 px-8 py-4 text-sm font-black text-white shadow-[0_0_40px_rgba(6,182,212,0.4)] transition hover:scale-105 active:scale-95"
              >
                <span>Montar Meu Site Agora</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#bento-planos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl hover:bg-white/[0.1] transition"
              >
                <Layers className="h-4 w-4 text-cyan-300" />
                <span>Explorar Tiers</span>
              </a>
            </div>
          </div>

          {/* HERO BENTO CARDS GRID (3 Modular Visuals) */}
          <div className="mt-16 grid gap-6 sm:grid-cols-12 max-w-5xl mx-auto">
            {/* Bento Card 1 (Span 7) */}
            <div className="sm:col-span-7 rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Funil Visual de Alta Retenção</h3>
                  <p className="text-xs text-slate-400">Estrutura Bento modular que guia o olho do visitante</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Estudos comprovam que layouts modulares aumentam o tempo de permanência na página em até <strong>140%</strong>,
                reduzindo a taxa de rejeição e aumentando os cliques para o WhatsApp.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-xl font-black text-cyan-300">0.5s</p>
                  <p className="text-[10px] text-slate-400">Abertura no 5G</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-xl font-black text-violet-300">3x Mais</p>
                  <p className="text-[10px] text-slate-400">Cliques no WhatsApp</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-xl font-black text-fuchsia-300">100%</p>
                  <p className="text-[10px] text-slate-400">Mobile Fluid</p>
                </div>
              </div>
            </div>

            {/* Bento Card 2 (Span 5) */}
            <div className="sm:col-span-5 rounded-3xl border border-white/15 bg-gradient-to-br from-violet-500/10 via-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-violet-300 uppercase tracking-wider">
                    Stack Técnica
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                </div>
                <h3 className="text-xl font-bold text-white">React 19 + Tailwind v4</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Sem WordPress pesado. Sem plugins vulneráveis. Código limpo, seguro e ultrarrápido hospedado na
                  infraestrutura global da Vercel.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Shield className="h-4 w-4 text-cyan-300" />
                  <span>Segurança SSL & CDN Ativa</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-black">VALIDADO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PILARES BENTO GRID SECTION */}
      <section id="bento-pilares" className="relative z-10 py-20 bg-black/30 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
              Pilares de Engenharia
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              A Diferença do Bento Holográfico
            </h2>
            <p className="text-sm text-slate-400">
              Cada bloco foi pensado estrategicamente para responder uma pergunta crucial do seu cliente antes mesmo que
              ele pense em sair.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-8 backdrop-blur-2xl hover:border-cyan-400/40 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Design Magnético</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Reflexos de vidro e micro-animações que prendem a atenção e posicionam seu negócio como a opção mais
                moderna da cidade.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-8 backdrop-blur-2xl hover:border-violet-400/40 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-300 border border-violet-400/30">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Conversão em 1-Clique</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Sem formulários burocráticos que ninguém preenche. Um clique no botão abre a conversa no WhatsApp já com
                o interesse especificado.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-8 backdrop-blur-2xl hover:border-fuchsia-400/40 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-400/30">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Esteira de Entrega Ágil</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Produção acelerada com templates validados: seu site pode estar no ar gerando vendas em menos de 3 dias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BENTO PLANOS E TIERS */}
      <section id="bento-planos" className="relative z-10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-cyan-400">Tiers de Aceleração</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Escolha Sua Estrutura de Vendas
            </h2>
            <p className="text-sm text-slate-400">Sem fidelidade, sem contratos longos. Você cancela quando quiser.</p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {bentoPlans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur-2xl transition-all ${p.accentClass}`}
              >
                {p.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
                    Mais Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{p.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-black text-white">{p.price}</span>
                  <span className="text-xs text-slate-400 font-semibold">{p.period}</span>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 space-y-3 flex-1">
                  {p.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Gostaria de contratar o plano Bento ${p.name} (${p.price}). Como podemos iniciar?`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-bold transition-all ${
                    p.highlight
                      ? "bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-lg shadow-cyan-500/30 active:scale-95"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20 active:scale-95"
                  }`}
                >
                  <span>Selecionar {p.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SIMULADOR INTERATIVO BENTO */}
      <section id="bento-simulador" className="relative z-10 py-20 bg-black/40 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-white/[0.04] to-violet-500/10 p-6 sm:p-12 backdrop-blur-3xl shadow-[0_0_60px_rgba(6,182,212,0.2)]">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Calculadora Bento</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Configure seu Pacote Sob Medida</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Selecione as opções e receba a proposta pronta diretamente no WhatsApp:
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Seu Ramo de Atuação:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    "Negócio Local / Clínica",
                    "Estética / Automotivo",
                    "Gastronomia / Bar",
                    "Serviço / Consultoria",
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setClientType(cat)}
                      className={`rounded-xl border p-3 text-[11px] font-bold transition-all text-center ${
                        clientType === cat
                          ? "border-cyan-400 bg-cyan-400/20 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                          : "border-white/10 bg-white/[0.02] text-slate-400 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Selecione o Plano Bento:</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Presença Express", "Escala Total", "Ecossistema IA"].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setSelectedTier(tier)}
                      className={`rounded-xl border p-4 text-xs font-bold transition-all text-center ${
                        selectedTier === tier
                          ? "border-cyan-400 bg-cyan-500/20 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                          : "border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div>
                  <p className="text-xs font-bold text-white">Registro de Domínio .com.br + SSL Exclusivo</p>
                  <p className="text-[11px] text-slate-400">Configuração de DNS e e-mails corporativos (+ R$ 90 taxa única)</p>
                </div>
                <button
                  type="button"
                  onClick={() => setWantsCustomDomain(!wantsCustomDomain)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    wantsCustomDomain ? "bg-cyan-500" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                      wantsCustomDomain ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Total Card */}
              <div className="rounded-2xl border border-cyan-400/40 bg-cyan-950/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-cyan-300 font-bold uppercase tracking-wider">Total Estimado do Projeto</p>
                  <p className="text-3xl sm:text-4xl font-black text-white">
                    R$ {getPrice()}
                    <span className="text-xs text-slate-300 font-normal"> /mês</span>
                  </p>
                </div>

                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 px-8 py-4 text-xs sm:text-sm font-black text-white shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enviar Simulação no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="bento-faq" className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-cyan-400">Tire Suas Dúvidas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Perguntas Frequentes</h2>
          </div>

          <div className="mt-12 space-y-3">
            {[
              {
                q: "Qual a vantagem do formato Bento Grid para o meu cliente?",
                a: "O layout Bento divide o conteúdo em cápsulas visuais digestivas. O usuário escaneia a página sem esforço e encontra as informações essenciais (preço, diferenciais, contato) em segundos.",
              },
              {
                q: "A hospedagem e o certificado de segurança estão inclusos?",
                a: "Sim, todos os projetos rodam na rede global CDN da Vercel com certificado SSL gratuito e proteção automática contra ataques.",
              },
              {
                q: "Posso alterar textos e fotos depois que o site estiver pronto?",
                a: "Com certeza! Nossos planos mensais contam com suporte contínuo para atualizações e suporte direto com a nossa equipe via WhatsApp.",
              },
            ].map((f, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-white hover:bg-white/[0.04]"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-cyan-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/10 p-5 text-xs sm:text-sm text-slate-300/80 leading-relaxed bg-black/20">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-black/80 py-12 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-4">
            <div className="sm:col-span-2 space-y-3">
              <span className="font-serif text-base font-bold text-white tracking-tight">
                CRONOS AURORA BENTO
              </span>
              <p className="text-slate-400/80 max-w-sm leading-relaxed">
                Arquitetura modular de alta conversão para empresas e profissionais de destaque.
              </p>
              <p className="text-slate-400">
                Atendimento: <strong className="text-white">{phoneDisplay}</strong>
              </p>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Modelos</p>
              <ul className="space-y-2">
                <li>
                  <a href="/modelo-1" className="hover:text-white">
                    1. Cyber Obsidian
                  </a>
                </li>
                <li>
                  <a href="/modelo-2" className="text-cyan-400 hover:underline">
                    2. Aurora Bento (Atual)
                  </a>
                </li>
                <li>
                  <a href="/modelo-3" className="hover:text-white">
                    3. Crystal Frosted Glass
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Garantias</p>
              <ul className="space-y-2 text-slate-400">
                <li>• Cancelamento sem multas</li>
                <li>• Entrega rápida em até 72h</li>
                <li>• Suporte técnico direto</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <p>© {new Date().getFullYear()} Cronos Agency. Todos os direitos reservados.</p>
            <p className="text-slate-500">Modelo Padrão Versão 2 — Aurora Holographic Bento-Glass</p>
          </div>
        </div>
      </footer>

      {/* 9. FLOATING MOBILE BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-cyan-500/20 bg-black/90 backdrop-blur-xl p-3 md:hidden">
        <a
          href={generateWhatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-3 text-xs font-black text-white shadow-lg active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Falar no WhatsApp Agora</span>
        </a>
      </div>
    </div>
  );
}
