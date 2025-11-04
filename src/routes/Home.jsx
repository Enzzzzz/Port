import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import ProjectCard from "../components/projectCards";

import Logo from "/Logo2-Sem-Fundo.png";
import AlmiroWeb from "/Projects/almiro.png";
import YulBot from "/Projects/yulbot.png";
import Bloxstore from "/Projects/bloxstore.png"

function Home() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const section2Ref = useRef(null);
  const [isVisible2, setIsVisible2] = useState(false);

  

  const fadeLeft = isVisible2
    ? "animate-fade-in-left opacity-100"
    : "animate-fade-out-right opacity-0";

  const fadeRight = isVisible2
    ? "animate-fade-in-right opacity-100"
    : "animate-fade-out-left opacity-0";

  useEffect(() => {
    const textElement = textRef.current;
    const section2Element = section2Ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === textRef.current) {
            setIsVisible(entry.isIntersecting);
          } else if (entry.target === section2Ref.current) {
            setIsVisible2(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textElement) observer.observe(textElement);
    if (section2Element) observer.observe(section2Element);

    return () => {
      if (textElement) observer.unobserve(textElement);
      if (section2Element) observer.unobserve(section2Element);
    };
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <section
          id="firstLayer"
          className="section bg-green-gradient flex flex-col sm2:-space-y-16"
        >
          <img
            src={Logo}
            ref={textRef}
            className={` w-64 sm2:w-44 sm:w-64 md:w-[450px] 2xlg:w-[550px] rounded-4xl drop-shadow-[0_0_20px_#00ff88] hover:drop-shadow-[0_0_35px_#00ffcc] transition-all duration-700 ${
              isVisible
                ? "animate-fade-in-right opacity-100"
                : "animate-fade-out-left opacity-0"
            }`}
            alt="Logo"
          />
          <div
            ref={textRef}
            className={`transition-all duration-700 ${
              isVisible
                ? "animate-fade-in-left opacity-100"
                : "animate-fade-out-right opacity-0"
            }`}
          >
            <h1 className="text-4xl font-bebas text-center m-10 font-extrabold text-transparent bg-clip-text bg-linear-to-r from-green-900 via-emerald-500  to-green-900 sm:text-4xl lg:text-5xl xl:text-7xl animate-gradient">
              Welcome to my
              <p
                className="text-accent cursor-pointer font-felix font-extrabold hover:animate-none animate-pulse [animation-duration:6s]"
                onClick={() =>
                  document
                    .querySelector("#secondLayer")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Portfolio
              </p>
            </h1>
          </div>
        </section>

        <div className="h-32 bg-gradient-to-b from-[#070f08] to-[#0e300a]"></div>

        <section
          id="secondLayer"
          className="pt-10 section2 bg-green-gradient-reverse flex flex-col sm2:-space-y-16"
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
            image={AlmiroWeb}
            title="Almiro Fragoso Advocacia"
            description={
              <>
                Landing page de advocacia multi-page desenvolvida em{" "}
                <span className="text-emerald-400">ReactJS</span> e{" "}
                <span className="text-emerald-400">TailwindCSS</span>, com
                design responsivo e links diretos para contato via WhatsApp.
              </>
            }
            link="https://www.almirofragosoadvocacia.com.br/"
            fadeRight={fadeRight}
            fadeLeft={fadeLeft}
          />

          <ProjectCard
            image={YulBot}
            title="Discord Bot Website"
            description={
              <>
                Website moderno para bot de Discord feito em{" "}
                <span className="text-emerald-400  group-hover:shadow-blue-200 group-hover:[text-shadow:0_0_20px_rgba(59,130,246,0.9)] transition-all duration-300">ReactJS</span> e{" "}
                <span className="text-emerald-400  group-hover:shadow-blue-200 group-hover:[text-shadow:0_0_20px_rgba(59,130,246,0.9)] transition-all duration-300">TailwindCSS</span>, com
                design limpo e animações suaves.
              </>
            }
            link="https://yulbot.vercel.app/"
            fadeRight={fadeRight}
            fadeLeft={fadeLeft}
          />

          <ProjectCard
            image={Bloxstore}
            title="Almiro Fragoso Advocacia"
            description={
              <>
                Landing page de advocacia multi-page desenvolvida em{" "}
                <span className="text-emerald-400">ReactJS</span> e{" "}
                <span className="text-emerald-400">TailwindCSS</span>, com
                design responsivo e links diretos para contato via WhatsApp.
              </>
            }
            link="https://www.almirofragosoadvocacia.com.br/"
            fadeRight={fadeRight}
            fadeLeft={fadeLeft}
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
