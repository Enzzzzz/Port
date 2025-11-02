import Navbar from "../components/navbar";
import Logo from "/Logo2-Sem-Fundo.png";
import Logo2 from "/Logo-Sem-Fundo.png";

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <div
          id="firstLayer"
          className="section bg-blue-gradient flex flex-col sm2:-space-y-16"
        >
          <img
            src={Logo}
            className="mt-24 sm2:mt-10 md:-mt-32 w-64 sm2:w-44 sm:w-64 md:w-[450px] 2xlg:w-[550px]"
          />
          <h1 className="text-3xl text-center m-10 font-extrabold text-text sm:text-4xl lg:text-5xl xl:text-7xl">
            Template Tailwind and ReactJS
          </h1>
        </div>
        <div id="secondLayer" className="section bg-red-gradient-reverse flex flex-col sm2:-space-y-16">
          <img
            src={Logo2}
            className="mt-24 sm2:mt-10 w-64 sm2:w-44 sm:w-64 md:w-[450px] 2xlg:w-[550px]"
          />
          <h1 className="text-3xl text-center m-10 font-extrabold text-tertiary sm:text-4xl lg:text-5xl xl:text-7xl">
            Template Tailwind and ReactJS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
