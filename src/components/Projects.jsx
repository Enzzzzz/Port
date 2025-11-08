import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Wrench } from "lucide-react";

import AlmiroWeb from "/Projects/almiro.png";
import YulBot from "/Projects/yulbot.png";
import Bloxstore from "/Projects/bloxstore.png";
import Port from "/Projects/port.png";

const Projects = () => {
  const ButtonGitUnable = () => (
    <button className="h-9 rounded-md px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-accent transition-colors focus-visible:outline-none focus-visible:ring-2focus-visible:ring-offset-2 cursor-not-allowed bg-red-500/30 hover:bg-primary/40 border border-input text-accent/70 hover:text-accent">
      <Github className="mr-2 h-4 w-4" />
      Código Indisponível
    </button>
  );
  const ButtonGitBuild = () => (
    <button className="h-9 rounded-md px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-not-allowed bg-yellow-500/10 hover:bg-primary/40 border border-input text-accent/70 hover:text-accent">
      <Github className="mr-2 h-4 w-4" />
      Código em Breve
    </button>
  );
  const ProjectBuilding = () => (
    <button className="h-9 rounded-md px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-not-allowed bg-yellow-300/10 border border-input text-accent/70 hover:text-accent hover:bg-primary/40">
      <Wrench className="mr-2 h-4 w-4" />
      Projeto em Desenvolvimento
    </button>
  );

  const projects = [
    {
      title: "Almiro Fragoso Advocacia",
      description:
        "Landing page de advocacia multi-page desenvolvida em ReactJS e TailwindCSS, com design responsivo e links diretos para contato via WhatsApp.",
      image: AlmiroWeb,
      tags: ["React", "JavaScript", "Tailwind CSS", "Multi-Page", "UI/UX", "Responsive Design"],
      liveUrl: "https://www.almirofragosoadvocacia.com.br/",
      githubUrl: "#",
    },
    {
      title: "Discord Bot Website",
      description:
        "Website moderno multi-page para bot de Discord feito em ReactJS e TailwindCSS, com design limpo e animações suaves, com sistema de porcentagem de desenvolvimento e commits em tempo real.",
      image: YulBot,
      tags: ["React", "JavaScript", "API Integration", "Tailwind CSS", "Multi-Page", "UI/UX", "Responsive Design"],
      liveUrl: "https://yulbot.vercel.app/",
      githubUrl: "https://github.com/Enzzzzz/YulbotSite",
    },
    {
      title: "BloxStore",
      description:
        "Loja virtual de Roblox feito em ReactJS e TailwindCSS, com design responsivo com sistema de banco de dados para as funcionalidades de Registro e Login.",
      image: Bloxstore,
      tags: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Database",
        "Login System",
        "UI/UX",
        "Responsive Design"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Enzzzzz/Blox-Store",
    },
    {
      title: "Portfólio",
      description:
        "Meu portfólio pessoal, criado com ReactJS e TailwindCSS, onde compartilho meus projetos, minha jornada como desenvolvedor e minha paixão por criar interfaces modernas e intuitivas.",
      image: Port,
      tags: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "UI/UX",
        "Responsive Design"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Enzzzzz/Port",
    },
  ];

  const projectRef = useRef(null);
  const [isVisible2, setIsVisible2] = useState(false);
  useEffect(() => {
    const projectElement = projectRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectRef.current) {
            setIsVisible2(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (projectElement) observer.observe(projectElement);

    return () => {
      if (projectElement) observer.unobserve(projectElement);
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 lg:px-16 bg-background"
      ref={projectRef}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 ">
          <h2 className="font-poppins text-center text-text font-bold text-5xl ipad:text-6xl transition-all duration-700">
            Meus Projetos
          </h2>
          <p className="text-muted-foreground fade-in text-center text-lg max-w-2xl w-[95%] mx-auto">
            Confira alguns dos projetos que desenvolvi, demonstrando minhas
            habilidades em front-end
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-portfolio border-2 rounded-xl border-muted-foreground/20 hover:border-muted-foreground group bg-[radial-gradient(circle_at_center,_rgba(153,153,153,0.1),_transparent_90%)] ${
                isVisible2 ? "fade-in opacity-100" : ""
              }`}
            >
              <div className="relative overflow-hidden h-64 rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-xl overflow-hidden object-top transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 border-t border-muted-foreground/30">
                <h3 className="text-2xl mb-2 text-text font-poppins">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-poppins">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm2:flex-row gap-3">
                  {(() => {
                    if (index === 3) {
                      return (
                          <button className="h-9 rounded-md px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-accent transition-colors focus-visible:outline-none focus-visible:ring-2focus-visible:ring-offset-2 cursor-not-allowed bg-background/80 opacity-50 border border-input text-accent/70 hover:text-accent">
                            Este Projeto
                          </button>
                      );

                    } else if ([2, 3].includes(index)) {
                      return <ProjectBuilding />;
                    } else {
                      return (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="h-9 rounded-md px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-accent transition-colors focus-visible:outline-none focus-visible:ring-2focus-visible:ring-offset-2 cursor-pointer hover:bg-primary/40 border border-input text-accent/70 hover:text-accent">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver Projeto
                          </button>
                        </a>
                      );
                    }
                  })()}

                  {(() => {
                    if (index === 0) {
                      return <ButtonGitUnable />;
                    } else {
                      return (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="h-9 rounded-md px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-accent transition-colors focus-visible:outline-none focus-visible:ring-2focus-visible:ring-offset-2 cursor-pointer hover:bg-primary/40 border border-input text-accent/70 hover:text-accent">
                            <Github className="mr-2 h-4 w-4" />
                            Ver Código
                          </button>
                        </a>
                      );
                    }
                  })()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
