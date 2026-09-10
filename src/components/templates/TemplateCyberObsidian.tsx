import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Star,
  ChevronDown,
  Clock,
  Unlock,
  HeartHandshake,
  ExternalLink,
  Target,
  BarChart3,
  Cpu,
} from "lucide-react";

export function TemplateCyberObsidian() {
  const [selectedPlan, setSelectedPlan] = useState("Pro Growth");
  const [leadName, setLeadName] = useState("");
  const [leadSegment, setLeadSegment] = useState("Serviços / Clínica");
  const [includeAds, setIncludeAds] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const phone = "5521964639999";
  const phoneDisplay = "(21) 96463-9999";

  const calculateTotal = () => {
    let base = 997;
    if (selectedPlan === "Essential Start") base = 497;
    if (selectedPlan === "Scale Dominance") base = 1997;
    if (includeAds) base += 500;
    return base;
  };

  const generateWhatsappLink = () => {
    const text = `Olá! Montei meu projeto no simulador da Cronos:
• Nome: ${leadName || "Cliente Interessado"}
• Segmento: ${leadSegment}
• Plano Escolhido: ${selectedPlan}
• Gestão de Tráfego: ${includeAds ? "Sim (Incluso)" : "Não"}
• Investimento Estimado: R$ ${calculateTotal()}/mês

Gostaria de dar o próximo passo e agendar uma demonstração técnica!`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const plans = [
    {
      name: "Essential Start",
      badge: "Entrada Rápida",
      price: "R$ 497",
      period: "/mês",
      desc: "Presença digital essencial e posicionamento de autoridade imediato para o seu negócio.",
      features: [
        "Landing Page de Alta Conversão em Vidro Fumê",
        "Design 100% Responsivo (Mobile & Desktop)",
        "Otimização no Google Meu Negócio",
        "Integração Direta com WhatsApp",
        "Hospedagem de Alta Performance Inclusa",
      ],
      popular: false,
    },
    {
      name: "Pro Growth",
      badge: "Mais Escolhido",
      price: "R$ 997",
      period: "/mês",
      desc: "A estrutura de escala completa para transformar visitantes em reuniões e clientes pagantes.",
      features: [
        "Tudo do Plano Essential",
        "Site Multi-Páginas ou LP com Efeitos Glassmorphism",
        "Gestão de Tráfego Pago (Meta Ads & Google Ads)",
        "Copywriting Persuasivo com Foco em Vendas",
        "Configuração de Domínio e SSL Dedicado",
        "Relatório Mensal de Conversão e ROI",
      ],
      popular: true,
    },
    {
      name: "Scale Dominance",
      badge: "Dominância Total",
      price: "R$ 1.997",
      period: "/mês",
      desc: "Máquina de vendas automatizada com IA, automações N8N e esteira de aquisição contínua.",
      features: [
        "Tudo do Plano Pro Growth",
        "Automação de Atendimento Receptivo com IA",
        "CRM e Funil Integrado ao WhatsApp",
        "Campanhas Agressivas Multi-Canal",
        "Consultoria Semanal de Otimização de Vendas",
        "Suporte Prioritário VIP com SLA de 2h",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "Em quanto tempo meu site fica no ar?",
      a: "Nossa esteira de produção entrega landing pages prontas e validadas em até 48 a 72 horas úteis após o alinhamento inicial do briefing.",
    },
    {
      q: "Preciso pagar taxa de adesão ou fidelidade?",
      a: "Não! Trabalhamos com planos mensais transparentes e sem fidelidade contratual. Você permanece conosco pelo resultado e pela qualidade da entrega.",
    },
    {
      q: "O site funciona bem em smartphones?",
      a: "Sim, todos os nossos layouts são desenhados no conceito Mobile-First com testes em iOS e Android, touch targets confortáveis e carregamento instantâneo.",
    },
    {
      q: "Como os clientes chegam até o meu WhatsApp?",
      a: "Inserimos botões estratégicos de conversão e simuladores interativos com mensagens pré-formatadas, facilitando a abordagem imediata da sua equipe comercial.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-rose-500 selection:text-white font-sans overflow-x-hidden">
      {/* Background Lighting & Cyber Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-rose-600/15 blur-[160px]" />
        <div className="absolute top-[30%] right-[-10%] h-[700px] w-[700px] rounded-full bg-indigo-600/15 blur-[180px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="relative z-10 border-b border-white/[0.06] bg-black/60 backdrop-blur-md px-4 py-2 text-center text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <span className="flex h-1.5 w-1.5 rounded-full bg-rose-500 animate-ping" />
          <span className="font-semibold text-rose-300">VERSÃO 1: CYBER-OBSIDIAN NEO-GLASS</span>
          <span className="text-white/40">|</span>
          <span className="text-white/70 hidden sm:inline">Design Dark Luxury, Vidro Fumê & Alta Conversão</span>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#030712]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500/20 to-white/5 border border-rose-500/40 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <span className="font-serif text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                CRONOS <span className="text-rose-500">.</span> OBSIDIAN
              </span>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                High-Conversion Architecture
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#pilares" className="hover:text-white transition">
              Diferenciais
            </a>
            <a href="#planos" className="hover:text-white transition">
              Planos & Preços
            </a>
            <a href="#simulador" className="hover:text-white transition">
              Simulador
            </a>
            <a href="#depoimentos" className="hover:text-white transition">
              Resultados
            </a>
            <a href="#faq" className="hover:text-white transition">
              Dúvidas
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá! Vim pelo site da Cronos e quero solicitar uma proposta comercial.")}`}
              target="_blank"
              rel="noreferrer"
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(244,63,94,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Falar com Especialista</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative z-10 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-bold text-rose-300 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                <span>Infraestrutura Digital de Escala & Vendas</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.1]">
                O Futuro do seu <br />
                <span className="bg-gradient-to-r from-white via-slate-200 to-rose-400 bg-clip-text text-transparent">
                  Negócio no Digital
                </span>{" "}
                em Vidro & Alta Conversão.
              </h1>

              <p className="text-base sm:text-lg text-slate-300/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Sites ultrarrápidos com estética Glassmorphism, copy persuasiva e funil direto para o seu WhatsApp.
                Transforme tráfego frio em contratos assinados todos os dias.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#simulador"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 px-8 py-4 text-sm font-black text-white shadow-[0_10px_35px_-5px_rgba(244,63,94,0.5)] transition hover:scale-105 active:scale-95"
                >
                  <span>Simular Projeto & Preço</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#planos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl hover:bg-white/[0.08] transition"
                >
                  <Zap className="h-4 w-4 text-rose-400" />
                  <span>Ver Planos Disponíveis</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-rose-500" />
                  <span>Entrega em 72h</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-rose-500" />
                  <span>Sem Fidelidade</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-rose-500" />
                  <span>Suporte Dedicado</span>
                </div>
              </div>
            </div>

            {/* Right Card: Obsidian Cockpit */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                      Painel Operacional
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-400">
                    Online 24/7
                  </span>
                </div>

                <div className="space-y-4 py-6">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-400">Taxa Média de Conversão</p>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-2xl font-black text-white">+38.4%</span>
                      <span className="text-xs text-emerald-400 font-bold flex items-center gap-0.5">
                        <TrendingUp className="h-3 w-3" /> vs modelo padrão
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-400">Tempo de Carregamento Médio</p>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-2xl font-black text-white">0.6s</span>
                      <span className="text-xs text-rose-300 font-semibold">100/100 Core Web Vitals</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-400">Canal Principal de Vendas</p>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-sm font-bold text-white">WhatsApp Direto Integrado</span>
                      <span className="text-xs text-emerald-400 font-bold">1-Click</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#simulador"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 py-3 text-xs font-bold text-white transition"
                >
                  <BarChart3 className="h-4 w-4 text-rose-400" />
                  <span>Configurar Meu Projeto Agora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS BAR */}
      <section className="relative z-10 border-y border-white/[0.08] bg-black/40 backdrop-blur-xl py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">34+</p>
              <p className="mt-1 text-xs text-slate-400 font-medium">Projetos no Ar em Produção</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-rose-400">&lt; 72h</p>
              <p className="mt-1 text-xs text-slate-400 font-medium">Tempo Médio de Entrega</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">100%</p>
              <p className="mt-1 text-xs text-slate-400 font-medium">Sem Fidelidade Contratual</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-amber-400">4.9 / 5.0</p>
              <p className="mt-1 text-xs text-slate-400 font-medium">Satisfação Média Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PILARES / DIFERENCIAIS */}
      <section id="pilares" className="relative z-10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-rose-400">
              Arquitetura de Conversão
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Por que nossos sites vendem mais do que sites comuns?
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Abandonamos templates genéricos e pesados. Cada elemento visual é projetado para conduzir o visitante ao
              fechamento.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl hover:bg-white/[0.06] hover:border-rose-500/40 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Copywriting Focado em Venda</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Textos estruturados com gatilhos de autoridade, quebra de objeções e clareza absoluta na proposta de
                valor para gerar ação.
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl hover:bg-white/[0.06] hover:border-rose-500/40 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Estética Glassmorphism 2026</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Camadas translúcidas com profundidade, luzes dinâmicas e acabamento de luxo que posicionam sua marca
                como líder inquestionável.
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl hover:bg-white/[0.06] hover:border-rose-500/40 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Velocidade Extrema (React 19)</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Código compilado com Vite e Tailwind v4. O cliente clica no anúncio e a página abre em menos de 1
                segundo, sem perder tráfego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PLANOS & PREÇOS */}
      <section id="planos" className="relative z-10 py-20 bg-black/50 border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-rose-400">Planos e Escala</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Investimento Transparente, Sem Surpresas
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Escolha a solução ideal para o momento atual da sua empresa. Faça upgrade a qualquer momento.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur-2xl transition-all ${
                  p.popular
                    ? "border-rose-500/60 bg-gradient-to-b from-rose-500/10 via-white/[0.04] to-transparent shadow-[0_0_50px_rgba(244,63,94,0.2)] -translate-y-2"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-600 to-amber-500 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                    Mais Recomendado
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <span className="text-xs font-semibold text-rose-400">{p.badge}</span>
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">{p.desc}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{p.price}</span>
                  <span className="text-xs text-slate-400 font-medium">{p.period}</span>
                </div>

                <ul className="mt-8 space-y-3 flex-1">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Quero contratar o plano ${p.name} (${p.price}). Como podemos começar?`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold transition-all ${
                    p.popular
                      ? "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30 active:scale-95"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/15 active:scale-95"
                  }`}
                >
                  <span>Começar com {p.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-rose-500" />
              <span>Garantia de Qualidade Cronos</span>
            </div>
            <div className="flex items-center gap-2">
              <Unlock className="h-4 w-4 text-rose-500" />
              <span>Sem Multas ou Fidelidade</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-rose-500" />
              <span>Atendimento Direto com Diretores</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIMULADOR INTERATIVO (HIGH CONVERSION) */}
      <section id="simulador" className="relative z-10 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] p-6 sm:p-12 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-rose-400">
                Simulador Interativo
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Monte Sua Estrutura Sob Medida</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Calcule a estimativa e receba a proposta pronta diretamente no seu WhatsApp:
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {/* Nome e Segmento */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">Seu Nome ou Empresa:</label>
                  <input
                    type="text"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="Ex: Dra. Mariana / Barbearia Silva"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-rose-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">Segmento do Negócio:</label>
                  <select
                    value={leadSegment}
                    onChange={(e) => setLeadSegment(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#0a0d18] px-4 py-3 text-sm text-white focus:border-rose-500 focus:outline-none"
                  >
                    <option value="Clínica Médica / Odontológica">Clínica Médica / Odontológica</option>
                    <option value="Estética Automotiva / Veículos">Estética Automotiva / Veículos</option>
                    <option value="Barbearia / Beleza / Estética">Barbearia / Beleza / Estética</option>
                    <option value="Comércio Local / Varejo">Comércio Local / Varejo</option>
                    <option value="Gastronomia / Alimentação">Gastronomia / Alimentação</option>
                    <option value="Advocacia / Serviços Corporativos">Advocacia / Serviços Corporativos</option>
                  </select>
                </div>
              </div>

              {/* Escolha do Plano */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Plano Base Desejado:</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Essential Start", "Pro Growth", "Scale Dominance"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setSelectedPlan(p)}
                      className={`rounded-xl border p-3.5 text-xs font-bold transition-all text-center ${
                        selectedPlan === p
                          ? "border-rose-500 bg-rose-500/20 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                          : "border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Opcional: Tráfego Pago */}
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="pr-4">
                  <p className="text-xs font-bold text-white">Adicionar Gestão de Tráfego Pago (Meta / Google Ads)</p>
                  <p className="text-[11px] text-slate-400">Campanhas ativas direcionando clientes ao WhatsApp (+ R$ 500/mês)</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeAds(!includeAds)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    includeAds ? "bg-rose-600" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                      includeAds ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Resumo do Cálculo */}
              <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-rose-300 font-semibold uppercase tracking-wider">Investimento Estimado</p>
                  <p className="text-3xl font-black text-white">
                    R$ {calculateTotal()}
                    <span className="text-xs text-slate-300 font-normal"> /mês</span>
                  </p>
                </div>

                <a
                  href={generateWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-lg shadow-rose-600/30 transition hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enviar Simulação no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DEPOIMENTOS */}
      <section id="depoimentos" className="relative z-10 py-20 bg-black/40 border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-rose-400">Casos Reais</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "O site no estilo dark glass chamou muita atenção dos meus pacientes. Em menos de 1 semana já recebi agendamentos diretamente pelo botão de WhatsApp.",
                name: "Dr. Victor Lichotti",
                role: "Ortopedia e Joelho",
              },
              {
                quote:
                  "A velocidade de carregamento é inacreditável. Os anúncios no Instagram ficaram muito mais baratos porque o cliente não desiste antes de abrir a página.",
                name: "Alexandre",
                role: "Garagem 21 Collection",
              },
              {
                quote:
                  "A Cronos simplificou tudo. Em 48 horas o site já estava no ar com design incrível e zero complicação.",
                name: "Renata C.",
                role: "BioMolecular Farmácia",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">"{t.quote}"</p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/20 text-rose-400 font-bold text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{t.name}</p>
                    <p className="text-[10px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-rose-400">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Dúvidas Frequentes</h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((f, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-white hover:bg-white/[0.02]"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-rose-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
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

      {/* 10. FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-black/80 py-12 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-4">
            <div className="sm:col-span-2 space-y-3">
              <span className="font-serif text-base font-bold text-white tracking-tight">
                CRONOS MARKETING & DESIGN
              </span>
              <p className="text-slate-400/80 max-w-sm leading-relaxed">
                Desenvolvimento de sites de alta performance, esteiras de vendas e agentes inteligentes.
                Teresópolis, Rio de Janeiro.
              </p>
              <p className="text-slate-400">
                WhatsApp: <strong className="text-white">{phoneDisplay}</strong>
              </p>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Navegação</p>
              <ul className="space-y-2">
                <li>
                  <a href="#pilares" className="hover:text-white">
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-white">
                    Planos
                  </a>
                </li>
                <li>
                  <a href="#simulador" className="hover:text-white">
                    Simulador
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white">
                    Perguntas Frequentes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Modelos Disponíveis</p>
              <ul className="space-y-2">
                <li>
                  <a href="/modelo-1" className="text-rose-400 hover:underline">
                    1. Cyber Obsidian (Atual)
                  </a>
                </li>
                <li>
                  <a href="/modelo-2" className="hover:text-white">
                    2. Aurora Bento Grid
                  </a>
                </li>
                <li>
                  <a href="/modelo-3" className="hover:text-white">
                    3. Crystal Frosted Glass
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <p>© {new Date().getFullYear()} Cronos Agency. Todos os direitos reservados.</p>
            <p className="text-slate-500">Modelo Padrão Versão 1 — Cyber-Obsidian Neo-Glass</p>
          </div>
        </div>
      </footer>

      {/* 11. MOBILE BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/15 bg-black/90 backdrop-blur-xl p-3 md:hidden">
        <a
          href={generateWhatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 py-3 text-xs font-black text-white shadow-lg active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Falar no WhatsApp Agora</span>
        </a>
      </div>
    </div>
  );
}
