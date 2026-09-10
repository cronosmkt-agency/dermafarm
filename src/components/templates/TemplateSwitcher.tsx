import { useState } from "react";
import { Sparkles, Layers, Gem, ChevronRight, ChevronDown } from "lucide-react";

export type TemplateId = "cyber-obsidian" | "aurora-bento" | "crystal-frosted";

interface TemplateSwitcherProps {
  activeTemplate: TemplateId;
  onChangeTemplate?: (template: TemplateId) => void;
}

export function TemplateSwitcher({ activeTemplate, onChangeTemplate }: TemplateSwitcherProps) {
  const [isMinimized, setIsMinimized] = useState(false);

  const templates: Array<{
    id: TemplateId;
    name: string;
    tag: string;
    path: string;
    icon: typeof Sparkles;
    accent: string;
    description: string;
  }> = [
    {
      id: "cyber-obsidian",
      name: "1. Cyber Obsidian",
      tag: "Dark Luxury Glass",
      path: "/modelo-1",
      icon: Sparkles,
      accent: "from-amber-400 to-rose-500",
      description: "Vidro fumê espelhado, bevel superior e precisão tecnológica estilo Apple Pro",
    },
    {
      id: "aurora-bento",
      name: "2. Aurora Bento",
      tag: "Holographic Bento Grid",
      path: "/modelo-2",
      icon: Layers,
      accent: "from-cyan-400 to-violet-500",
      description: "Layout modular Bento Grid, malhas de luz fluída e reflexos prismáticos",
    },
    {
      id: "crystal-frosted",
      name: "3. Crystal Frosted",
      tag: "Frosted Acrylic Glass",
      path: "/modelo-3",
      icon: Gem,
      accent: "from-emerald-400 to-sky-400",
      description: "Vidro jateado leitoso hiper-refinado, borda dupla e painel Cockpit Glass",
    },
  ];

  return (
    <aside
      aria-label="Controles de Demonstração de Templates"
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300 pointer-events-auto"
    >
      <div className="rounded-2xl border border-white/20 bg-black/80 backdrop-blur-2xl p-2 sm:p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between gap-2">
          {/* Brand & Mini Badge */}
          <div className="hidden sm:flex items-center gap-2 pl-2 text-left">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <p className="text-[11px] font-black tracking-wider uppercase text-white/90">
                Showcase de Templates Glassmorphism
              </p>
              <p className="text-[10px] text-white/60">3 Estéticas Exclusivas · Mesma Estrutura de Vendas</p>
            </div>
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-1 sm:flex-initial items-center justify-center gap-1.5 sm:gap-2">
            {templates.map((t) => {
              const Icon = t.icon;
              const isActive = activeTemplate === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => onChangeTemplate?.(t.id)}
                  className={`group relative flex items-center gap-1.5 sm:gap-2 rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-white/20 text-white shadow-lg border border-white/30 backdrop-blur-xl"
                      : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
                  }`}
                  title={t.description}
                >
                  <Icon
                    className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:scale-110 ${
                      isActive ? "text-amber-300" : "text-white/60"
                    }`}
                  />
                  <span className="text-[11px] sm:text-xs tracking-tight whitespace-nowrap">{t.name}</span>
                  {isActive && (
                    <span className="hidden md:inline-block rounded-md bg-white/15 px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-emerald-300">
                      Ativo
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Minimize / Toggle */}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition"
            aria-label={isMinimized ? "Expandir detalhes" : "Minimizar detalhes"}
          >
            {isMinimized ? <ChevronDown className="h-4 w-4" /> : <ChevronDown className="h-4 w-4 rotate-180" />}
          </button>
        </div>

        {/* Expanded Info Tray */}
        {!isMinimized && (
          <div className="mt-2 border-t border-white/10 pt-2 px-1 grid grid-cols-1 sm:grid-cols-3 gap-2 text-left">
            {templates.map((t) => (
              <div
                key={t.id}
                onClick={() => onChangeTemplate?.(t.id)}
                className={`cursor-pointer rounded-xl p-2 transition-all border ${
                  activeTemplate === t.id
                    ? "border-white/30 bg-white/[0.08]"
                    : "border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white">{t.tag}</span>
                  <a
                    href={t.path}
                    className="text-[10px] text-white/50 hover:text-white hover:underline flex items-center gap-0.5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Rota fixa <ChevronRight className="h-2.5 w-2.5" />
                  </a>
                </div>
                <p className="mt-1 text-[10px] text-white/60 line-clamp-1">{t.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
