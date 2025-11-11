import { Zap, Shield, Smartphone, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Sites rápidos e otimizados para SEO, garantindo melhor posicionamento no Google e experiência superior.",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Design adaptado para todos os dispositivos - desktop, tablet e mobile. Seu site perfeito em qualquer tela.",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Certificado SSL, proteção contra ataques e backups automáticos. Sua presença digital sempre protegida.",
  },
  {
    icon: TrendingUp,
    title: "Focado em Resultados",
    description: "Desenvolvemos com foco em conversão. Cada elemento pensado para transformar visitantes em clientes.",
  },
];

const Extra = () => {
  return (
    <section id="beneficios" className="bg-secondary/40 py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Escolher Nossos Serviços?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologia de ponta combinada com estratégia para impulsionar seu negócio online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl bg-[#1a1a1a] border border-border hover:border-landmain/50 transition-all duration-300 hover:glow"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-landmain/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6 text-landmain" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extra;
