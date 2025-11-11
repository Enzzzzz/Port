import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner"
import HeroMain from "@/components/MainPage/HeroMain";
import Extra from "@/components/MainPage/extra";

function MainHome() {

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <HeroMain />
        <Extra />
      </div>
      <Footer />
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}

export default MainHome;
