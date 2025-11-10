import { useEffect, useRef, useState } from "react";

import Logo from "/Logo2-Sem-Fundo.png";

const Hero = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textElement = textRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === textRef.current) {
            setIsVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textElement) observer.observe(textElement);

    return () => {
      if (textElement) observer.unobserve(textElement);
    };
  }, []);

  return (
    <section
      id="hero"
      className="section bg-gray-gradient flex flex-col sm2:-space-y-16 "
    >
      <img
        src={Logo}
        ref={textRef}
        className={`w-64 sm2:w-44 sm:w-64 md:w-[450px] 2xlg:w-[550px] rounded-4xl drop-shadow-[0_0_20px_#9e9e9e] hover:drop-shadow-[0_0_35px_#f1f1f1] transition-all duration-700 ${
          isVisible
            ? " opacity-100 animate-fade-in-right"
            : "animate-fade-out-left opacity-0"
        }`}
        alt="Logo"
      />
      <div
        ref={textRef}
      >
        <h1 className={`text-4xl font-poppins text-center m-10 font-extrabold text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-blue-200 to-zinc-200 sm:text-4xl lg:text-5xl xl:text-7xl animate-gradient transition-all duration-700 ${
          isVisible
            ? "animate-fade-in-left opacity-100"
            : "animate-fade-out-right opacity-0"
        }`}>
          Bem-vindo ao meu
          <p
            className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-blue-200 to-zinc-200 cursor-pointer font-extrabold hover:animate-none animate-pulse [animation-duration:6s]"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Portfolio
          </p>
        </h1>
        <p className="text-xl md:text-2xl text-text/70 font-poppins text-center mb-12 max-w-2xl mx-auto fade-in">
          Desenvolvedor Front-End especializado em criar experiências digitais únicas e modernas
        </p>
      </div>
    </section>
  );
};

export default Hero;
