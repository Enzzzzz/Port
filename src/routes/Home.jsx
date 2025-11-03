import Navbar from "../components/navbar";
import Logo from "/Logo2-Sem-Fundo.png";
import Logo2 from "/Logo-Sem-Fundo.png";

function Home() {
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
              className="w-64 sm2:w-44 sm:w-64 md:w-[450px] 2xlg:w-[550px] rounded-4xl filter drop-shadow-[0_0_15px_rgba(0,255,100,0.5)]"
              alt="Logo"
            />
          <div className="animate-fade-in-left">
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
          <img
            src={Logo}
            className="mt-24 sm2:mt-10 w-64 sm2:w-44 sm:w-64 md:w-[450px] 2xlg:w-[550px]"
          />
          <h1 className="text-3xl text-center m-10 font-extrabold text-text sm:text-4xl lg:text-5xl xl:text-7xl font-kenyan">
            Welcome to my
            <p className="text-accent font-kenyan font-semibold hover:animate-none animate-pulse">
              Portfolio
            </p>
          </h1>
        </section>
      </div>
    </div>
  );
}

export default Home;
