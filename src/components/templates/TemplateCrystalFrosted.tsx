import { useState } from "react";
import {
  Gem,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  ChevronDown,
  ShieldCheck,
  Clock,
  Compass,
  Headphones,
  Check,
  Layers,
  Award,
} from "lucide-react";

export function TemplateCrystalFrosted() {
  const [tierSelection, setTierSelection] = useState("Empresarial");
  const [maintenanceSupport, setMaintenanceSupport] = useState(true);
  const [nicheName, setNicheName] = useState("Clínica / Saúde Integrada");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const phone = "5521964639999";
  const phoneDisplay = "(21) 96463-9999";

  const getMonthlyTotal = () => {
    let price = 997;
    if (tierSelection === "Essencial") price = 497;
    if (tierSelection === "Empresarial") price = 997;
    if (tierSelection === "Liderança") price = 1997;
    if (maintenanceSupport) price += 150;
    return price;
  };

  const getWhatsappCheckout = () => {
    const message = `Olá! Quero dar início ao meu projeto no modelo Crystal Frosted:
• Nicho: ${nicheName}
• Plano Escolhido: ${tierSelection}
• Manutenção & Atualizações VIP: ${maintenanceSupport ? "Sim (+R$150)" : "Não"}
• Valor Mensal: R$ ${getMonthlyTotal()}/mês

Podemos agendar o onboarding inicial?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const crystalPackages = [
    {
      title: "Essencial",
      label: "Entrada Rápida",
      cost: "R$ 497",
      recurrence: "/mês",
      isRecommended: false,
      summary: "Estrutura enxuta e visual de alto luxo para iniciar suas vendas online com credibilidade.",
      benefits: [
        "Landing Page em Vidro Jateado Cristalino",
        "Design Ultra-Responsivo (Apple Vision Pro Feel)",
        "Otimização de SEO e Google Meu Negócio",
        "Botão Inteligente de Contato no WhatsApp",
        "Hospedagem em Nuvem de Alta Velocidade",
      ],
    },
    {
      title: "Empresarial",
      label: "Mais Escolhido",
      cost: "R$ 997",
      recurrence: "/mês",
      isRecommended: true,
      summary: "A solução completa para empresas consolidadas que buscam atração contínua de clientes.",
      benefits: [
        "Tudo do Plano Essencial",
        "Campanhas de Tráfego Pago (Meta & Google)",
        "Copywriting Estratégico de Persuasão",
        "Simulador Interativo Cockpit Glass",
        "Certificado SSL e Domínio Personalizado",
        "Relatório Mensal de Desempenho e ROI",
      ],
    },
    {
      title: "Liderança",
      label: "Dominância de Mercado",
      cost: "R$ 1.997",
      recurrence: "/mês",
      isRecommended: false,
      summary: "Ecossistema tecnológico avançado com automações de atendimento e captação em massa.",
      benefits: [
        "Tudo do Plano Empresarial",
        "Agente Inteligente de Triagem no WhatsApp",
        "Integração com CRM e Funil de Vendas",
        "Consultoria Semanal de Conversão",
        "Linha Direta Prioritária com os Sócios",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#070D18] text-slate-100 selection:bg-emerald-400 selection:text-slate-950 font-sans overflow-x-hidden">
      {/* Crystal Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] right-[15%] h-[650px] w-[650px] rounded-full bg-sky-500/15 blur-[170px]" />
        <div className="absolute top-[35%] left-[-10%] h-[750px] w-[750px] rounded-full bg-emerald-500/15 blur-[190px]" />
        <div className="absolute bottom-[-15%] right-[20%] h-[600px] w-[600px] rounded-full bg-teal-400/10 blur-[160px]" />
      </div>

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="relative z-10 border-b border-white/15 bg-white/[0.03] backdrop-blur-xl px-4 py-2 text-center text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-emerald-300">VERSÃO 3: CRYSTAL FROSTED MINIMALIST</span>
          <span className="text-white/40">·</span>
          <span className="text-white/70 hidden sm:inline">Vidro Jateado Leitoso, Borda Dupla & Cockpit Glass</span>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/15 bg-[#070D18]/70 backdrop-blur-3xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/25 text-emerald-300 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4)]">
              <Gem className="h-6 w-6" />
            </div>
            <div>
              <span className="font-serif text-lg font-black tracking-tight text-white flex items-center gap-1">
                CRONOS <span className="text-emerald-400">·</span> CRYSTAL
              </span>
              <p className="text-[10px] tracking-wider uppercase text-emerald-200/70 font-bold">
                Pure Glass Architecture
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#crystal-recursos" className="hover:text-emerald-300 transition">
              Precisão Visual
            </a>
            <a href="#crystal-planos" className="hover:text-emerald-300 transition">
              Planos & Investimento
            </a>
            <a href="#crystal-simulador" className="hover:text-emerald-300 transition">
              Simulador Cockpit
            </a>
            <a href="#crystal-faq" className="hover:text-emerald-300 transition">
              Dúvidas
            </a>
          </nav>

          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá! Estou no modelo Crystal Frosted e gostaria de falar sobre o projeto da minha empresa.")}`}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-2.5 text-xs sm:text-sm font-bold text-emerald-300 backdrop-blur-xl transition-all hover:bg-emerald-500/20 hover:border-emerald-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Falar com Consultor</span>
          </a>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative z-10 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold text-emerald-300 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span>Elegância Asséptica de Alto Padrão</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.1]">
                A Pureza do{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                  Vidro Jateado
                </span>{" "}
                Aliada à Máxima Conversão.
              </h1>

              <p className="text-base sm:text-lg text-slate-300/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Um layout que transmite prestígio imediato. Acabamento frosted acrylic com bordas duplas acetinadas e
                funil otimizado para gerar contatos qualificados.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#crystal-simulador"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-8 py-4 text-sm font-black text-slate-950 shadow-[0_10px_35px_-5px_rgba(52,211,153,0.4)] transition hover:scale-105 active:scale-95"
                >
                  <span>Simulador Cockpit Glass</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#crystal-planos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-2xl hover:bg-white/15 transition"
                >
                  <Gem className="h-4 w-4 text-emerald-300" />
                  <span>Ver Pacotes</span>
                </a>
              </div>
            </div>

            {/* Right Crystal Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-[2.5rem] border border-white/20 bg-gradient-to-b from-white/15 via-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-3xl shadow-[inset_0_2px_2px_rgba(255,255,255,0.4),0_25px_60px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Rigor Estético Vision Pro
                    </span>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                    4K Sharpness
                  </span>
                </div>

                <div className="space-y-4 py-6">
                  <div className="rounded-2xl border border-white/15 bg-white/[0.05] p-4 backdrop-blur-xl">
                    <p className="text-xs text-slate-400">Tempo de Resposta Médio</p>
                    <p className="text-2xl font-black text-white mt-1">450ms</p>
                    <p className="text-[11px] text-emerald-300">Carregamento instantâneo via Nitro Edge</p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/[0.05] p-4 backdrop-blur-xl">
                    <p className="text-xs text-slate-400">Qualificação dos Contatos</p>
                    <p className="text-2xl font-black text-white mt-1">94.8%</p>
                    <p className="text-[11px] text-emerald-300">Clientes com real intenção de compra</p>
                  </div>
                </div>

                <a
                  href="#crystal-simulador"
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 py-3 text-xs font-bold text-white transition"
                >
                  <span>Calcular Investimento no Cockpit</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METRICAS & STATS */}
      <section className="relative z-10 border-y border-white/15 bg-white/[0.02] backdrop-blur-2xl py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">35 Anos</p>
              <p className="mt-1 text-xs text-slate-400">Expertise de Mercado</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-emerald-300">&lt; 48h</p>
              <p className="mt-1 text-xs text-slate-400">Deploy em Produção</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">0 Emojis</p>
              <p className="mt-1 text-xs text-slate-400">Identidade 100% Vetorial</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-sky-300">100%</p>
              <p className="mt-1 text-xs text-slate-400">Liberdade Contratual</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RECURSOS EM VIDRO JATEADO */}
      <section id="crystal-recursos" className="relative z-10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
              Acabamento de Alta Precisão
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              A Nova Geração do Design Web
            </h2>
            <p className="text-sm text-slate-400">
              Combinação de sofisticação visual e engenharia de software para transformar autoridade em receita real.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <div className="rounded-[2rem] border border-white/20 bg-white/[0.04] p-8 backdrop-blur-3xl hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/25 text-emerald-300">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Percepção de Valor Elevada</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Seu cliente percebe imediatamente que não se trata de uma empresa amadora. O design cristalino justifica
                preços mais altos.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/20 bg-white/[0.04] p-8 backdrop-blur-3xl hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/25 text-teal-300">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Navegação Intuitiva</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Fluxo de leitura contínuo sem atrito, com espaçamentos milimetricamente equilibrados e tipografia de alta
                legibilidade.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/20 bg-white/[0.04] p-8 backdrop-blur-3xl hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/25 text-sky-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Código Seguro e Moderno</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Construído com React 19 e Vite, sem dependências obsoletas. Segurança máxima contra falhas e
                vulnerabilidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PLANOS CRYSTAL */}
      <section id="crystal-planos" className="relative z-10 py-20 bg-black/40 border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
              Pacotes de Crescimento
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Preços Transparentes e Sem Surpresas
            </h2>
            <p className="text-sm text-slate-400">
              Contratos mensais flexíveis. Você só permanece conosco se estiver satisfeito com os resultados.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {crystalPackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`relative flex flex-col rounded-[2.5rem] border p-8 backdrop-blur-3xl transition-all ${
                  pkg.isRecommended
                    ? "border-emerald-400/60 bg-gradient-to-b from-emerald-500/15 via-white/[0.05] to-transparent shadow-[0_0_50px_rgba(52,211,153,0.25)] -translate-y-2"
                    : "border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"
                }`}
              >
                {pkg.isRecommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-md">
                    Mais Popular
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
                  <span className="text-xs font-bold text-emerald-300">{pkg.label}</span>
                </div>

                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{pkg.summary}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-black text-white">{pkg.cost}</span>
                  <span className="text-xs text-slate-400 font-semibold">{pkg.recurrence}</span>
                </div>

                <div className="mt-8 border-t border-white/15 pt-6 space-y-3 flex-1">
                  {pkg.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Desejo contratar o pacote Crystal ${pkg.title} (${pkg.cost}). Quais são os próximos passos?`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-bold transition-all ${
                    pkg.isRecommended
                      ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-slate-950 font-black shadow-lg hover:scale-105 active:scale-95"
                      : "bg-white/15 hover:bg-white/25 text-white border border-white/25 active:scale-95"
                  }`}
                >
                  <span>Escolher {pkg.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COCKPIT GLASS SIMULADOR INTERATIVO */}
      <section id="crystal-simulador" className="relative z-10 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-[2.5rem] border border-white/25 bg-gradient-to-br from-white/10 via-white/[0.04] to-emerald-500/10 p-6 sm:p-12 backdrop-blur-3xl shadow-[inset_0_2px_2px_rgba(255,255,255,0.4),0_25px_60px_rgba(0,0,0,0.6)]">
            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                Cockpit Glass Simulator
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Simulador de Projeto Sob Medida</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Calcule seu plano em tempo real e envie o pedido formatado para nossa equipe:
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Seu Ramo ou Atividade:</label>
                <input
                  type="text"
                  value={nicheName}
                  onChange={(e) => setNicheName(e.target.value)}
                  className="w-full rounded-2xl border border-white/20 bg-white/[0.05] px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none backdrop-blur-xl"
                  placeholder="Ex: Consultório de Dermatologia"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Selecione o Nível do Site:</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Essencial", "Empresarial", "Liderança"].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setTierSelection(tier)}
                      className={`rounded-2xl border p-3.5 text-xs font-bold transition-all text-center ${
                        tierSelection === tier
                          ? "border-emerald-400 bg-emerald-500/20 text-white shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                          : "border-white/15 bg-white/[0.03] text-slate-400 hover:text-white"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.03] p-4 backdrop-blur-xl">
                <div>
                  <p className="text-xs font-bold text-white">Suporte Técnico VIP & Alterações Mensais</p>
                  <p className="text-[11px] text-slate-400">Atualizações de conteúdo e monitoramento 24h (+ R$ 150/mês)</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMaintenanceSupport(!maintenanceSupport)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    maintenanceSupport ? "bg-emerald-400" : "bg-white/15"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-950 shadow-lg ring-0 transition duration-200 ease-in-out ${
                      maintenanceSupport ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Total Card */}
              <div className="rounded-2xl border border-emerald-400/40 bg-emerald-950/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-2xl">
                <div>
                  <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider">
                    Total Estimado no Cockpit
                  </p>
                  <p className="text-3xl sm:text-4xl font-black text-white">
                    R$ {getMonthlyTotal()}
                    <span className="text-xs text-slate-300 font-normal"> /mês</span>
                  </p>
                </div>

                <a
                  href={getWhatsappCheckout()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-8 py-4 text-xs sm:text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enviar Simulação no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="crystal-faq" className="relative z-10 py-20 bg-black/30 border-t border-white/15">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400">Esclarecimentos</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Dúvidas Comuns</h2>
          </div>

          <div className="mt-12 space-y-3">
            {[
              {
                q: "Por que escolher a versão Crystal Frosted?",
                a: "A versão Crystal transmite pureza, modernidade e sofisticação inigualável. É ideal para clínicas, consultórios, boutiques, escritórios de advocacia e marcas que desejam comunicar autoridade e refinamento.",
              },
              {
                q: "Preciso ter conhecimento técnico para gerenciar?",
                a: "Não! Cuidamos de 100% da infraestrutura técnica, servidores, certificados de segurança e atualizações. Você foca apenas em atender os clientes que chegam pelo WhatsApp.",
              },
              {
                q: "Como é feita a contratação?",
                a: "Basta clicar em 'Falar com Consultor' ou enviar sua simulação. Alinhamos os dados da sua empresa no mesmo dia e iniciamos a montagem do site imediatamente.",
              },
            ].map((f, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-white hover:bg-white/[0.06]"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-emerald-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/15 p-5 text-xs sm:text-sm text-slate-300/80 leading-relaxed bg-black/20">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="relative z-10 border-t border-white/15 bg-black/85 py-12 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-4">
            <div className="sm:col-span-2 space-y-3">
              <span className="font-serif text-base font-bold text-white tracking-tight">
                CRONOS CRYSTAL FROSTED
              </span>
              <p className="text-slate-400/80 max-w-sm leading-relaxed">
                Design editorial contemporâneo com tecnologia de vidro hiper-refinado e foco em resultados.
              </p>
              <p className="text-slate-400">
                Atendimento Oficial: <strong className="text-white">{phoneDisplay}</strong>
              </p>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Modelos Disponíveis</p>
              <ul className="space-y-2">
                <li>
                  <a href="/modelo-1" className="hover:text-white">
                    1. Cyber Obsidian
                  </a>
                </li>
                <li>
                  <a href="/modelo-2" className="hover:text-white">
                    2. Aurora Bento Grid
                  </a>
                </li>
                <li>
                  <a href="/modelo-3" className="text-emerald-400 hover:underline">
                    3. Crystal Frosted (Atual)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Garantias</p>
              <ul className="space-y-2 text-slate-400">
                <li>• Cancelamento flexível sem multas</li>
                <li>• Entrega rápida em até 72h</li>
                <li>• Suporte técnico humanizado</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <p>© {new Date().getFullYear()} Cronos Agency. Todos os direitos reservados.</p>
            <p className="text-slate-500">Modelo Padrão Versão 3 — Crystal Frosted Minimalist</p>
          </div>
        </div>
      </footer>

      {/* 10. MOBILE BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-400/30 bg-black/90 backdrop-blur-xl p-3 md:hidden">
        <a
          href={getWhatsappCheckout()}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 py-3 text-xs font-black text-slate-950 shadow-lg active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Falar no WhatsApp Agora</span>
        </a>
      </div>
    </div>
  );
}
