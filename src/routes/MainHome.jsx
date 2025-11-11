import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner"
import HeroMain from "@/components/MainPage/HeroMain";

function MainHome() {

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <HeroMain />
      </div>
      <Footer />
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}

export default MainHome;
