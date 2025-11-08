import { useState } from "react";
import { menu } from "../assets";
import { navLinks } from "../constants";
import Logo from "/Logo.jpg";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Code } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex py-3 justify-between bg-[#0d0d0d]/60 backdrop-blur-md items-center absolute md:fixed shadow-xl shadow-tertiary/5 top-0 left-0 z-50">
      <ul>
        <li>
          <a href="/">
            <img
              src={Logo}
              alt="logo"
              className="ml-2 lg:mt-1 lg:mb-1 md:ml-32 cursor-pointer transform duration-200 hover:scale-[0.90] sm:hover:scale-100 md:hover:scale-150 scale-[0.8] sm:scale-90 md:scale-125 w-12 xl:w-12 lg:"
            />
          </a>
        </li>
      </ul>
      <ul className="sm:flex hidden justify-end items-center flex-1 mr-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-extrabold cursor-pointer text-[16px] sm:text-[18px] lg:text-[20px] ${
              index === navLinks.lenght - 1 ? "mr-0" : "mr-3 md:mr-10 lg:mr-12"
            } text-text hover:text-text sub`}
          >
            {index === 0 ? (
              <a href={`#${nav.id}`}>{nav.title}</a>
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end  mr-10 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <img
                src={menu}
                alt="menu"
                className="w-[24px] h-[24px] object-contain"
              />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
            className={`fixed inset-y-0 left-0 h-full w-3/4 border-r bg-[#0d0d0d] shadow-lg transform transition-all duration-500 ease-in-out font-bebas ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-10 h-10 text-primary" />
                <span className="text-2xl font-bebas font-bold text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-blue-200 to-zinc-200">
                  Maia Dev
                </span>
              </div>

              {navLinks.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    const section = document.getElementById(item.id);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                      setTimeout(() => setIsOpen(false), 800);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="text-left text-foreground hover:text-primary transition-smooth text-xl"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
