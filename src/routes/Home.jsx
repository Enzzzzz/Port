import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero"
import Projects from "../components/Projects"

function Home() {

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
