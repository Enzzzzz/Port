import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/projectCards";
import AlmiroWeb from "/Projects/almiro.png";
import YulBot from "/Projects/yulbot.png";
import Bloxstore from "/Projects/bloxstore.png";

const Projects = () => {
    const section2Ref = useRef(null);
  const [isVisible2, setIsVisible2] = useState(false);

  const fadeLeft = isVisible2
    ? "animate-fade-in-left opacity-100"
    : "animate-fade-out-right opacity-0";

  const fadeRight = isVisible2
    ? "animate-fade-in-right opacity-100"
    : "animate-fade-out-left opacity-0";

  useEffect(() => {
    const section2Element = section2Ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === section2Ref.current) {
            setIsVisible2(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section2Element) observer.observe(section2Element);

    return () => {
      if (section2Element) observer.unobserve(section2Element);
    };
  }, []);

return (
    <section
          id="projects"
          className="overflow-visible pt-10 section2 bg-gray-gradient-reverse flex flex-col"
          ref={section2Ref}
        >
          <div className="mb-5 sm2:mb-2">
            <h1
              className={`font-bebas text-text font-bold text-5xl ipad:text-6xl transition-all duration-700`}
            >
              Projetos
            </h1>
          </div>
          <ProjectCard
            reverse={true}
            image={AlmiroWeb}
            title="Almiro Fragoso Advocacia"
            titleColor="#ffffff"
            description={
              <>
                Landing page de advocacia multi-page desenvolvida em{" "}
                <span className="text-zinc-100 font-extrabold group-hover:shadow-blue-200 group-hover:[text-shadow:0_0_20px_rgba(255, 255, 255, 0.9)] transition-all duration-300">
                  ReactJS
                </span>{" "}
                e{" "}
                <span className="text-zinc-100 font-extrabold group-hover:shadow-blue-200 group-hover:[text-shadow:0_0_20px_rgba(255, 255, 255, 0.9)] transition-all duration-300">
                  TailwindCSS
                </span>
                , com design responsivo e links diretos para contato via
                WhatsApp.
              </>
            }
            link="https://www.almirofragosoadvocacia.com.br/"
            fadeRight={fadeRight}
            fadeLeft={fadeLeft}
          />

          <ProjectCard
            image={YulBot}
            title="Discord Bot Website"
            titleColor="#ffffff"
            description={
              <>
                Website moderno multi-page para bot de Discord feito em{" "}
                <span className="text-zinc-100 font-extrabold group-hover:shadow-blue-200 group-hover:[text-shadow:0_0_20px_rgba(255, 255, 255, 0.9)0.9)] transition-all duration-300">
                  ReactJS
                </span>{" "}
                e{" "}
                <span className="text-zinc-100 font-extrabold group-hover:shadow-blue-200 group-hover:[text-shadow:0_0_20px_rgba(255, 255, 255, 0.9)] transition-all duration-300">
                  TailwindCSS
                </span>
                , com design limpo e animações suaves, com sistema de
                porcentagem de desenvolvimento e commits em tempo real.
              </>
            }
            link="https://yulbot.vercel.app/"
            fadeRight={fadeRight}
            fadeLeft={fadeLeft}
          />

          <ProjectCard
            reverse={true}
            isDev={true}
            image={Bloxstore}
            title="BloxStore"
            titleColor="#ffffff"
            description={
              <>
                Loja virtual de Roblox feito em{" "}
                <span className="text-zinc-100 font-extrabold group-hover:shadow-blue-200 group-hover:[text-shadow:0_0_20px_rgba(255, 255, 255, 0.9)] transition-all duration-300">
                  ReactJS
                </span>{" "}
                e{" "}
                <span className="text-zinc-100 font-extrabold group-hover:shadow-blue-200 group-hover:[text-shadow:0_0_20px_rgba(255, 255, 255, 0.9)] transition-all duration-300">
                  TailwindCSS
                </span>
                , com design responsivo com sistema de banco de dados para as
                funcionalidades de Registro e Login.
              </>
            }
            link=""
            fadeRight={fadeRight}
            fadeLeft={fadeLeft}
          />
        </section>
      );
};

export default Projects;