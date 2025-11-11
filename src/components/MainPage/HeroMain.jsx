import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";

const HeroMain = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 main-bg overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border font-poppins">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Desenvolvimento Web Profissional</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Seu Site,
            <br />
            <span className="text-gradient">Sua Presença Digital</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Criamos sites modernos, responsivos e otimizados para converter visitantes em clientes. 
            Da ideia ao lançamento, com suporte completo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group bg-landmain hover:bg-landmain/90 text-primary-foreground glow"
            >
              Ver Mais
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary hover:text-secondary-foreground"
              asChild
            >
              <a href="#contact">Entre em Contato</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
