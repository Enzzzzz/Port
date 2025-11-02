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
          <div className="mt-24 hover:shadow-accent hover:shadow-xl sm2:hover:shadow-none hover:duration-200 hover:scale-101 sm2:mt-10 md:-mt-32 border-3 border-accent/50 rounded-4xl sm2:border-0 inline-block sm2:hidden">
            <img
              src={Logo}
              className="w-64 sm2:w-44 sm:w-64 md:w-[450px] 2xlg:w-[550px] rounded-4xl"
              alt="Logo"
            />
          </div>
          <h1 className="text-3xl font-kenyan text-center m-10 font-extrabold text-text sm:text-4xl lg:text-5xl xl:text-7xl">
            Welcome to my
            <p className="text-accent font-kenyan font-extrabold hover:animate-none animate-pulse">
              Portfolio
            </p>
          </h1>
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
          <h1 className="text-3xl text-poppins text-center m-10 font-extrabold text-text sm:text-4xl lg:text-5xl xl:text-7xl">
            Welcome to my
            <p className="text-accent font-poppins font-semibold hover:animate-none animate-pulse">
              Portfolio
            </p>
          </h1>
        </section>
      </div>
    </div>
  );
}

export default Home;
