import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"

function Home() {

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <About/>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
