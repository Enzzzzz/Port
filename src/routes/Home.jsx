import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import Logo from "/Logo2-Sem-Fundo.png";
import AlmiroWeb from "/Projects/almiro.png";

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
          className="section bg-green-gradient-reverse flex flex-col sm2:-space-y-16"
          ref={section2Ref}
        >
          <div>
            <h1
              className={`font-bebas text-text font-bold text-5xl mb-5 transition-all duration-700 ${fadeLeft}`}
            >
              Projects
            </h1>
          </div>
          <div className="flex flex-col gap-4 w-[90%] items-center p-4">
            <div className="w-[300px] h-[300px] rounded-4xl overflow-hidden hover:drop-shadow-[0_0_8px_#145f24] transition-all duration-700">
              <img
                src={AlmiroWeb}
                className={`w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-90 hover:blur-xs ${fadeRight}`}
              />
            </div>
            <div className={`p-2 group ${fadeLeft}`}>
              <h2 className="text-2xl text-center font-bebas text-accent sm:text-4xl lg:text-5xl xl:text-7xl">
                Almiro Fragoso Advocacia
                <p className="text-text/80 text-lg text-justify font-bebas">
                  Landing page de advocacia multi-page desenvolvida em{" "}
                  <span className="text-emerald-400  group-hover:shadow-blue-200 group-hover:[text-shadow:0_0_20px_rgba(59,130,246,0.9)] transition-all duration-300">
                    ReactJS
                  </span>{" "}
                  e{" "}
                  <span className="text-emerald-400  group-hover:shadow-blue-200 group-hover:[text-shadow:0_0_20px_rgba(59,130,246,0.9)] transition-all duration-300">
                    TailwindCSS
                  </span>
                  , com design responsivo e links diretos para contato via
                  WhatsApp com o advogado responsável.
                </p>
                <div className="text-left mt-2">
                  <a
                    href="https://www.almirofragosoadvocacia.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bebas text-emerald-400 hover:text-accent hover:[text-shadow:0_0_10px_rgba(59,130,246,0.9)] transition-all duration-300 inline-block cursor-pointer"
                  >
                    Ir para o site
                  </a>
                </div>
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
