import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  FlaskConical,
  ShieldCheck,
  CheckCircle2,
  HeartPulse,
  Clock,
  MapPin,
  MessageCircle,
  FileText,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ChevronDown,
  Star,
  Phone,
  Menu,
  X,
  Award,
  Zap,
  Tag,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: DermafarmHome,
});

interface Product {
  id: string;
  name: string;
  category: "dermocare" | "longevidade" | "fitoterapia";
  categoryLabel: string;
  volume: string;
  price: number;
  highlight: string;
  description: string;
  activeIngredients: string[];
}

const CATALOG_PRODUCTS: Product[] = [
  {
    id: "serum-tranexamico",
    name: "Sérum Clareador Ultra-Glow",
    category: "dermocare",
    categoryLabel: "Dermocosméticos",
    volume: "Frasco Pipeta 30ml",
    price: 118.9,
    highlight: "Uniformização & Anti-Manchas",
    description: "Fórmula de alta eficácia dermatológica para clareamento de melasma, marcas solares e uniformização do tom da pele.",
    activeIngredients: ["Ácido Tranexâmico 3%", "Alfa-Arbutin 2%", "Niacinamida Pura 5%"],
  },
  {
    id: "vit-c-nano",
    name: "Vitamina C Pura 20% Nanoencapsulada",
    category: "dermocare",
    categoryLabel: "Dermocosméticos",
    volume: "Airless Pump 30g",
    price: 129.0,
    highlight: "Antioxidante & Luminosidade",
    description: "Estabilizada com Ácido Ferúlico e Vitamina E. Estimula a síntese de colágeno e combate radicais livres causados pela poluição.",
    activeIngredients: ["Vitamina C Ativa 20%", "Ácido Ferúlico 0.5%", "Ácido Hialurônico"],
  },
  {
    id: "fotoprotetor-fps60",
    name: "Fotoprotetor Fluido FPS 60 Toque Seco",
    category: "dermocare",
    categoryLabel: "Dermocosméticos",
    volume: "Bisnaga 50g",
    price: 89.9,
    highlight: "Proteção Diária UVA/UVB",
    description: "Textura ultra-leve com controle de oleosidade e acabamento aveludado fosco. Não comedogênico e livre de parabenos.",
    activeIngredients: ["Filtros Fotoestáveis FPS 60", "Silício Orgânico", "Ação Anti-Poluição"],
  },
  {
    id: "coq10-bioidentica",
    name: "Coenzima Q10 Bioidêntica 100mg + PQQ",
    category: "longevidade",
    categoryLabel: "Longevidade & Suplementos",
    volume: "60 Cápsulas Vegetais",
    price: 115.0,
    highlight: "Energia Celular & Cardioproteção",
    description: "Potente antioxidante mitocondrial para suporte cardiovascular, disposição física e combate ao envelhecimento celular.",
    activeIngredients: ["Coenzima Q10 100mg", "Pirroloquinolina Quinona (PQQ)", "Vitamina E"],
  },
  {
    id: "magnesio-trio",
    name: "Complexo Quelato Magnésio Inositol + Dimalato",
    category: "longevidade",
    categoryLabel: "Longevidade & Suplementos",
    volume: "60 Doses em Pó Sabor Limão",
    price: 94.5,
    highlight: "Relaxamento Muscular & Cognição",
    description: "Forma de altíssima absorção gastrointestinal sem desconforto gástrico. Alívio de dores musculares e equilíbrio do humor.",
    activeIngredients: ["Magnésio Dimalato", "Inositol Puro", "Vitamina B6 Ativada"],
  },
  {
    id: "composto-sono-sereno",
    name: "Elixir Sono Sereno & Anti-Estresse",
    category: "fitoterapia",
    categoryLabel: "Fitoterapia & Bem-Estar",
    volume: "Frasco Conta-Gotas 50ml",
    price: 79.9,
    highlight: "Descanso Profundo & Repouso",
    description: "Tintura vegetal concentrada com fitoterápicos padronizados para modular o cortisol e promover noites de sono reparadoras.",
    activeIngredients: ["Extrato Fluido de Passiflora", "Melissa Officinalis", "Camomila Nobre"],
  },
];

interface CartItem extends Product {
  quantity: number;
}

function DermafarmHome() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<"delivery" | "retirada">("delivery");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const phone = "5521986140462";
  const phoneDisplay = "(21) 98614-0462";

  const filteredProducts =
    selectedCategory === "todos"
      ? CATALOG_PRODUCTS
      : CATALOG_PRODUCTS.filter((p) => p.category === selectedCategory);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const itemsSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCost = deliveryMode === "delivery" ? (itemsSubtotal >= 160 ? 0 : 12) : 0;
  const totalCart = itemsSubtotal + deliveryCost;

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const generateWhatsappCartUrl = () => {
    if (cart.length === 0) return "";
    let msg = `Olá! Gostaria de fazer um pedido na Dermafarm Farmácia de Manipulação:\n\n`;
    cart.forEach((item, i) => {
      msg += `${i + 1}. *${item.name}* (${item.volume})\n   ${item.quantity}x R$ ${item.price.toFixed(2).replace(".", ",")} = R$ ${(item.quantity * item.price).toFixed(2).replace(".", ",")}\n`;
    });
    msg += `\n• *Subtotal:* R$ ${itemsSubtotal.toFixed(2).replace(".", ",")}`;
    if (deliveryMode === "delivery") {
      msg += `\n• *Modalidade:* Entrega Delivery em Teresópolis (${deliveryCost === 0 ? "Frete Grátis" : "R$ 12,00"})`;
      if (deliveryAddress) msg += `\n• *Endereço:* ${deliveryAddress}`;
    } else {
      msg += `\n• *Modalidade:* Retirada na Loja 34 (Galeria Francisco Sá, 185)`;
    }
    msg += `\n• *TOTAL DO PEDIDO:* R$ ${totalCart.toFixed(2).replace(".", ",")}\n\nPodem confirmar o prazo de preparo e o pagamento?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  const receitaWhatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Gostaria de enviar uma foto da minha receita médica para orçamento na Dermafarm Farmácia de Manipulação."
  )}`;

  return (
    <div className="relative min-h-screen bg-[#FCF9FA] text-slate-800 font-sans selection:bg-rose-600 selection:text-white overflow-x-hidden">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="border-b border-rose-900/10 bg-rose-900 text-rose-100 px-4 py-2 text-center text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <span className="flex h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
          <span className="font-semibold text-white">DERMAFARM MANIPULAÇÃO & DERMOCOSMÉTICA</span>
          <span className="text-rose-300/60 hidden sm:inline">|</span>
          <span className="text-rose-200 hidden sm:inline">
            R. Francisco Sá, 185 - Loja 34 (Galeria) · Entrega Delivery no Mesmo Dia em Teresópolis
          </span>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-rose-100/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-700 to-rose-900 text-white shadow-md shadow-rose-900/20 transition group-hover:scale-105">
              <FlaskConical className="h-6 w-6 text-rose-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl font-bold tracking-tight text-slate-900">Dermafarm</span>
                <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-800 uppercase tracking-wider">
                  Dermocare
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium">Farmácia Magistral · Loja 34 Galeria Centro</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#catalogo" className="hover:text-rose-700 transition">
              Catálogo Skincare
            </a>
            <a href="#como-funciona" className="hover:text-rose-700 transition">
              Enviar Receita
            </a>
            <a href="#diferenciais" className="hover:text-rose-700 transition">
              Qualidade Magistral
            </a>
            <a href="#sobre" className="hover:text-rose-700 transition">
              A Galeria
            </a>
            <a href="#avaliacoes" className="hover:text-rose-700 transition">
              Depoimentos 4.9
            </a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Carrinho no Header (Oculto em mobile, visível apenas em tablet/desktop) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative hidden md:flex h-10 sm:h-11 items-center gap-2 rounded-xl sm:rounded-2xl border border-rose-200 bg-rose-50/60 px-3.5 sm:px-4 text-xs sm:text-sm font-bold text-rose-900 transition hover:bg-rose-100 active:scale-95"
              aria-label="Abrir Carrinho"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-rose-700 shrink-0" />
              <span>Carrinho</span>
              {cartCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[11px] font-black text-white shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href={receitaWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-rose-700 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-rose-900/15 hover:bg-rose-800 transition active:scale-95"
            >
              <FileText className="h-4 w-4 text-rose-200" />
              <span>Orçar Receita</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-rose-200 text-slate-800 lg:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="border-b border-rose-100 bg-white px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
              <a
                href="#catalogo"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-rose-50"
              >
                Catálogo de Fórmulas
              </a>
              <a
                href="#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-rose-50"
              >
                Como Enviar Receita
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-rose-50"
              >
                Rigor e Laudos
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-rose-50"
              >
                Loja 34 na Galeria Francisco Sá
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-rose-50"
              >
                Avaliações Google (4.9 Estrelas)
              </a>

              <div className="pt-2 border-t border-rose-100">
                <a
                  href={receitaWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-700 py-3 text-xs font-bold text-white shadow-md"
                >
                  <FileText className="h-4 w-4" />
                  <span>Enviar Foto da Receita no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden py-12 sm:py-20 bg-gradient-to-b from-[#FFF5F7] via-[#FCF9FA] to-[#FCF9FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100/70 px-4 py-1.5 text-xs font-bold text-rose-900">
                <Sparkles className="h-3.5 w-3.5 text-rose-700" />
                <span>Dermocosmética Avançada & Rigor Magistral · Centro, Teresópolis</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                A Precisão da Farmácia Magistral com a{" "}
                <span className="bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 bg-clip-text text-transparent">
                  Delicadeza da Dermocosmética.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Suas fórmulas médicas e dermocosméticos personalizados manipulados com matérias-primas de alta pureza,
                laudo analítico e entrega no mesmo dia em Teresópolis.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href={receitaWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-rose-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-rose-900/20 hover:bg-rose-800 transition active:scale-95"
                >
                  <FileText className="h-4 w-4 text-rose-200" />
                  <span>Enviar Foto da Receita no WhatsApp</span>
                </a>
                <a
                  href="#catalogo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-white px-6 py-4 text-sm font-bold text-slate-800 hover:bg-rose-50 transition"
                >
                  <Sparkles className="h-4 w-4 text-rose-700" />
                  <span>Ver Catálogo Skincare</span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-rose-600" />
                  <span>Laudo em Cada Lote</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-rose-600" />
                  <span>Entrega no Mesmo Dia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-rose-600" />
                  <span>Atendimento Humanizado</span>
                </div>
              </div>
            </div>

            {/* Reassurance Card Lateral */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-rose-200 bg-white/95 p-6 sm:p-8 shadow-2xl shadow-rose-900/5 backdrop-blur-xl">
                <div className="flex items-center gap-4 border-b border-rose-100 pb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-800 font-black text-xl">
                    DF
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-rose-800 uppercase">
                      Farmácia Magistral & Skincare
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">Dermafarm Teresópolis</h3>
                    <p className="text-xs text-slate-500">R. Francisco Sá, 185 - Loja 34 Galeria</p>
                  </div>
                </div>

                <div className="space-y-3.5 py-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700">
                      <strong>Avaliação 4.9 no Google Maps:</strong> Elogiada pela simpatia, acolhimento e medicamentos seguros.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700">
                      <strong>Rigor de Laboratório:</strong> Pesagem eletrônica de precisão e controle de umidade.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700">
                      <strong>Delivery Ágil:</strong> Entrega no mesmo dia em toda a Várzea, Centro, Alto e bairros.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-slate-500">WhatsApp de Plantão</p>
                    <p className="text-sm font-bold text-slate-900">{phoneDisplay}</p>
                  </div>
                  <a
                    href={receitaWhatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-rose-700 px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-rose-800 transition"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Falar Agora</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS METRICS */}
      <section className="border-y border-rose-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-black text-rose-700">4.9 ⭐</p>
              <p className="text-xs text-slate-500 font-medium mt-1">31 Avaliações no Google</p>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900">100%</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Matérias-Primas com Laudo</p>
            </div>
            <div>
              <p className="text-3xl font-black text-rose-700">Mesmo Dia</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Entrega Delivery na Serra</p>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900">Loja 34</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Galeria Rua Francisco Sá</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUIA EM 3 PASSOS: COMO ENVIAR RECEITA */}
      <section id="como-funciona" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
              Processo Simples & Sem Fila
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Como Solicitar Sua Medicação em 3 Passos
            </h2>
            <p className="text-sm text-slate-600">
              Você não precisa se deslocar nem esperar em filas. Faça seu orçamento em minutos pelo WhatsApp:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-rose-100 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 font-black text-lg">
                1
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">Fotografe a Receita</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tire uma foto legível da receita do seu dermatologista, médico clínico, dentista ou nutricionista.
              </p>
            </div>

            <div className="rounded-3xl border border-rose-100 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 font-black text-lg">
                2
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">Validação Farmacêutica</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nossa equipe técnica confere dosagens, orienta a posologia correta e envia o orçamento detalhado.
              </p>
            </div>

            <div className="rounded-3xl border border-rose-100 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 font-black text-lg">
                3
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">Produção & Entrega</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Manipulamos com pureza e enviamos via delivery na sua residência ou deixamos pronto para retirada na Loja 34.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CATÁLOGO DE PRODUTOS & CARRINHO */}
      <section id="catalogo" className="py-16 sm:py-24 bg-white border-t border-rose-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-700">Fórmulas Pronta-Entrega</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Catálogo Dermocosmético & Longevidade
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fórmulas exclusivas desenvolvidas com rigor dermatológico e pureza máxima.
              </p>
            </div>

            {/* Categorias Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "todos", label: "Todas as Fórmulas" },
                { id: "dermocare", label: "Dermocosméticos" },
                { id: "longevidade", label: "Longevidade & Suplementos" },
                { id: "fitoterapia", label: "Fitoterapia & Sono" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-rose-700 text-white shadow-sm"
                      : "bg-rose-50 text-slate-700 hover:bg-rose-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group rounded-3xl border border-rose-100 bg-[#FCF9FA] p-6 transition-all hover:border-rose-300 hover:shadow-xl hover:shadow-rose-900/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-[10px] font-bold text-rose-800 uppercase tracking-wider">
                      {p.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{p.volume}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-rose-700 transition">
                    {p.name}
                  </h3>
                  <p className="text-xs font-semibold text-rose-600 mt-1">{p.highlight}</p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">{p.description}</p>

                  <div className="mt-4 rounded-xl bg-white p-3 border border-rose-100/60">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Ativos da Fórmula:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.activeIngredients.map((ing, i) => (
                        <span
                          key={i}
                          className="inline-block rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-slate-700"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Valor Unitário</span>
                    <span className="text-xl font-black text-slate-900">
                      R$ {p.price.toFixed(2).replace(".", ",")}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(p)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-rose-700 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-rose-800 transition active:scale-95"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DRAWER LATERAL DO CARRINHO */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between border-b border-rose-100 px-6 py-4 bg-rose-50/50">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-rose-700" />
                  <h3 className="font-serif text-lg font-bold text-slate-900">Meu Pedido Dermafarm</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-xl p-1.5 text-slate-500 hover:bg-white transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12 space-y-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-400 mx-auto">
                      <ShoppingCart className="h-8 w-8" />
                    </div>
                    <p className="text-sm font-bold text-slate-800">Seu carrinho está vazio</p>
                    <p className="text-xs text-slate-500">Adicione fórmulas do catálogo para finalizar seu pedido.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-rose-100 bg-[#FCF9FA] p-4 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{item.name}</h4>
                        <p className="text-[11px] text-slate-500">{item.volume}</p>
                        <p className="text-xs font-black text-rose-700 mt-1">
                          R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-rose-200 bg-white text-slate-700 hover:bg-rose-50"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-900 w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-rose-200 bg-white text-slate-700 hover:bg-rose-50"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}

                {cart.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-rose-100">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">Forma de Recebimento:</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setDeliveryMode("delivery")}
                          className={`rounded-xl border p-3 text-xs font-bold transition-all text-center ${
                            deliveryMode === "delivery"
                              ? "border-rose-600 bg-rose-50 text-rose-900"
                              : "border-slate-200 text-slate-600"
                          }`}
                        >
                          Entrega Delivery
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryMode("retirada")}
                          className={`rounded-xl border p-3 text-xs font-bold transition-all text-center ${
                            deliveryMode === "retirada"
                              ? "border-rose-600 bg-rose-50 text-rose-900"
                              : "border-slate-200 text-slate-600"
                          }`}
                        >
                          Retirada Loja 34
                        </button>
                      </div>
                    </div>

                    {deliveryMode === "delivery" && (
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Endereço para Entrega em Teresópolis:
                        </label>
                        <input
                          type="text"
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          placeholder="Bairro, Rua e Número"
                          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:border-rose-600 focus:outline-none"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-rose-100 p-6 bg-[#FCF9FA] space-y-3">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Subtotal:</span>
                    <span>R$ {itemsSubtotal.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Taxa de Entrega:</span>
                    <span>{deliveryCost === 0 ? "Grátis" : "R$ 12,00"}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-900 border-t border-rose-100 pt-2">
                    <span>Total Estimado:</span>
                    <span className="text-base text-rose-700">R$ {totalCart.toFixed(2).replace(".", ",")}</span>
                  </div>

                  <a
                    href={generateWhatsappCartUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-rose-700 py-3.5 text-xs font-bold text-white shadow-md hover:bg-rose-800 transition active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Concluir Pedido no WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 8. PROVA SOCIAL (DEPOIMENTOS GOOGLE 4.9) */}
      <section id="avaliacoes" className="py-16 sm:py-24 bg-white border-t border-rose-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700">Avaliações Reais</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              O Que Dizem Nossos Pacientes e Clientes
            </h2>
            <p className="text-sm text-slate-600">Nota 4,9 com 31 avaliações no Google Maps em Teresópolis:</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-rose-100 bg-[#FCF9FA] p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "Excelente farmácia de manipulação. Além da qualidade dos medicamentos, o atendimento é excelente. As
                  profissionais são muito simpáticas e atenciosas."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rose-100 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-800 font-bold text-xs">
                  CP
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Cristiane Peculas Modesto</p>
                  <p className="text-[10px] text-slate-500">Local Guide Google</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-rose-100 bg-[#FCF9FA] p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "Esta farmácia sempre a minha preferida, uso e recomendo, desde o atendimento até a qualidade dos
                  produtos, é maravilhoso."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rose-100 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-800 font-bold text-xs">
                  MJ
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Maria Jose</p>
                  <p className="text-[10px] text-slate-500">Cliente Fiel em Teresópolis</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-rose-100 bg-[#FCF9FA] p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "Uma farmácia com produtos de alta qualidade e de confiança. A medicação foi entregue no mesmo dia com
                  muito capricho!"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rose-100 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-800 font-bold text-xs">
                  CH
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Camila Hermida</p>
                  <p className="text-[10px] text-slate-500">Entrega Delivery Confirmada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. A LOCALIZAÇÃO NA GALERIA */}
      <section id="sobre" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl border border-rose-200 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Loja Física no Centro</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Venha nos Visitar na Galeria da Rua Francisco Sá
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Estamos localizados na <strong>Loja 34</strong> da tradicional Galeria da Rua Francisco Sá, 185, no
                  ponto mais conveniente do Centro de Teresópolis. Um ambiente planejado para orientações farmacêuticas
                  com privacidade, conforto e carinho.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-rose-700" />
                    <span>R. Francisco Sá, 185 - Loja 34 (Galeria) - Centro, Teresópolis - RJ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-rose-700" />
                    <span>Segunda a Sexta: 08:30 às 18:30 | Sábados sob consulta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-rose-700" />
                    <span>WhatsApp Direto: {phoneDisplay}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-6 text-center space-y-4">
                  <HeartPulse className="h-10 w-10 text-rose-700 mx-auto" />
                  <h3 className="font-bold text-slate-900">Precisa de Entrega em Domicílio?</h3>
                  <p className="text-xs text-slate-600">
                    Nosso motoboy entrega seu pedido no mesmo dia em toda a cidade de Teresópolis.
                  </p>
                  <a
                    href={receitaWhatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-700 py-3 text-xs font-bold text-white shadow-md hover:bg-rose-800 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Solicitar Delivery pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-16 sm:py-24 bg-white border-t border-rose-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700">Tire Suas Dúvidas</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Perguntas Frequentes</h2>
          </div>

          <div className="mt-10 space-y-3">
            {[
              {
                q: "A Dermafarm aceita receitas digitais (com QR Code)?",
                a: "Sim! Basta encaminhar o arquivo em PDF ou o link da receita com assinatura digital emitida pelo seu médico pelo nosso WhatsApp.",
              },
              {
                q: "Como funciona a entrega delivery no mesmo dia?",
                a: "Para receitas aprovadas pela manhã, a manipulação e a entrega são realizadas no mesmo dia útil para os bairros da malha urbana de Teresópolis.",
              },
              {
                q: "As fórmulas dermocosméticas podem ser personalizadas para meu tipo de pele?",
                a: "Com certeza! Adequamos veículos livres de óleo (oil-free) para peles acneicas, bases emolientes para peles maduras e fórmulas hipoalergênicas.",
              },
              {
                q: "Qual a garantia de pureza das matérias-primas?",
                a: "Todas as nossas substâncias e ativos possuem certificado de análise (laudo analítico) dos principais distribuidores qualificados do Brasil.",
              },
            ].map((f, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="rounded-2xl border border-rose-100 bg-[#FCF9FA] overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:bg-rose-50/50"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-rose-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-rose-100/60 p-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="border-t border-rose-900 bg-rose-950 text-rose-200 py-12 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-4">
            <div className="sm:col-span-2 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base font-serif">
                <FlaskConical className="h-5 w-5 text-rose-400" />
                <span>Dermafarm Farmácia de Manipulação</span>
              </div>
              <p className="text-rose-300/80 max-w-sm leading-relaxed">
                Rigor farmacêutico, acolhimento humano e dermocosméticos de alta performance no Centro de Teresópolis.
              </p>
              <p className="text-rose-300">
                Endereço: <strong>R. Francisco Sá, 185 - Loja 34 (Galeria) - Centro</strong>
              </p>
              <p className="text-rose-300">
                WhatsApp: <strong className="text-white">{phoneDisplay}</strong>
              </p>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Links Rápidos</p>
              <ul className="space-y-2">
                <li>
                  <a href="#catalogo" className="hover:text-white">
                    Catálogo de Skincare
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-white">
                    Como Enviar Receita
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-white">
                    A Loja na Galeria
                  </a>
                </li>
                <li>
                  <a href="#avaliacoes" className="hover:text-white">
                    Depoimentos 4.9
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Horários de Atendimento</p>
              <p className="text-rose-300">Segunda a Sexta: 08:30 às 18:30</p>
              <p className="text-rose-300">Sábados: Sob Consulta</p>
              <p className="text-rose-300 mt-2">Entrega Delivery em Teresópolis</p>
            </div>
          </div>

          <div className="mt-12 border-t border-rose-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-rose-400">
            <p>© {new Date().getFullYear()} Dermafarm Farmácia de Manipulação. Todos os direitos reservados.</p>
            <p>
              Desenvolvido estrategicamente por <span className="text-white">Cronos Agency</span>
            </p>
          </div>
        </div>
      </footer>

      {/* 12. BARRA FLUTUANTE MOBILE (LARGURA TOTAL E LIMPA) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-rose-100 bg-white/95 backdrop-blur-lg px-4 py-3 md:hidden shadow-xl">
        {cartCount > 0 ? (
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-rose-700 py-3 text-xs sm:text-sm font-bold text-white shadow-md active:scale-95 transition"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>
              Ver Carrinho ({cartCount} {cartCount === 1 ? "item" : "itens"} · R${" "}
              {totalCart.toFixed(2).replace(".", ",")})
            </span>
          </button>
        ) : (
          <a
            href={receitaWhatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-rose-700 py-3 text-xs sm:text-sm font-bold text-white shadow-md active:scale-95 transition"
          >
            <span className="flex h-2 w-2 rounded-full bg-rose-300 animate-pulse" />
            <FileText className="h-4 w-4 text-rose-200" />
            <span>Enviar Receita no WhatsApp</span>
          </a>
        )}
      </div>

      {/* BOTÃO FLUTUANTE WHATSAPP - FECHAR COMPRA DO SITE COM A CRONOS */}
      <a
        href="https://wa.me/5521964639999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Dermafarm%20e%20gostaria%20de%20ver%20como%20funciona%20para%20fechar%20a%20compra%20dele%20com%20voc%C3%AA."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Falar sobre a compra deste site no WhatsApp"
        title="Falar sobre a compra deste site"
      >
        <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <span className="absolute right-16 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap opacity-0 shadow-xl transition-opacity group-hover:opacity-100 lg:block pointer-events-none">
          Comprar este site
        </span>
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
