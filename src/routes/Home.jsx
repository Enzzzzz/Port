import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import Logo from "/Logo2-Sem-Fundo.png";

function Home() {

  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
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
              className="w-64 sm2:w-44 sm:w-64 md:w-[450px] 2xlg:w-[550px] rounded-4xl drop-shadow-[0_0_20px_#00ff88] hover:drop-shadow-[0_0_35px_#00ffcc] transition-all duration-700"
              alt="Logo"
            />
          <div
            ref={textRef}
            className={`transition-all duration-700 ${
              isVisible ? "animate-fade-in-left opacity-100" : "animate-fade-out-left opacity-0"
            }`}
          >
          <h1 className="text-3xl font-kenyan text-center m-10 font-extrabold text-transparent bg-clip-text bg-linear-to-r from-green-900 via-emerald-500  to-green-900 sm:text-4xl lg:text-5xl xl:text-7xl animate-gradient">
            Welcome to my
            <p className="text-accent cursor-pointer font-kenyan font-extrabold hover:animate-none animate-pulse [animation-duration:6s]"
            onClick={() => document.querySelector('#secondLayer')?.scrollIntoView({ behavior: 'smooth' })}>
              Portfolio
            </p>
          </h1>
          </div>
        </section>
        <div className="h-32 bg-gradient-to-b from-[#070f08] to-[#0e300a]"></div>
        <section
          id="secondLayer"
          className="section bg-green-gradient-reverse flex flex-col sm2:-space-y-16"
        >
          <div>
            <h1 className="font-kenyan text-text font-bold text-5xl mb-5">
              Projects
            </h1>
          </div>
          <div className="flex flex-col items-center p-2 border">
          <img
            src={Logo}
            className="border w-52 sm2:w-44 sm:w-64 md:w-[450px] 2xlg:w-[550px]"
          />
          <p className="border text-3xl text-center m-10 font-extrabold text-text sm:text-4xl lg:text-5xl xl:text-7xl font-kenyan">
            Welcome to my
            <p className="text-accent font-kenyan font-semibold hover:animate-none animate-pulse">
              Portfolio
            </p>
          </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
