import { Github, Instagram, Mail, Phone, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="w-8 h-8 text-primary" />
              <span className="text-xl font-bebas font-bold text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-blue-200 to-zinc-200">
                Enzo Maia
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Desenvolvedor Front-End apaixonado por criar interfaces modernas,
              responsivas e funcionais. Sempre em busca de novas tecnologias e
              desafios.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Sobre mim
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">(71) </span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">contatoenzz@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/maia.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-smooth group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-smooth" />
              </a>
              <a
                href="https://github.com/Enzzzzz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-smooth group"
              >
                <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-smooth" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Conecte-se comigo nas redes sociais e acompanhe meus novos
              projetos e publicações!
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Enzo Maia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Este portfólio é apenas para fins de demonstração. Todo o código e
            design foram desenvolvidos por mim.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
