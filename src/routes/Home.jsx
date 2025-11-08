import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import { Toaster } from "sonner"

function Home() {

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <About/>
        <Projects />
        <Contact />
      </div>
      <Footer />
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}

export default Home;
