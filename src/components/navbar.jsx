import { useState, useEffect } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import Logo from "/Logo.jpg";
import Logo2 from "/Logo2.jpg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [textColor, setTextColor] = useState("text-white/80");
  const [logoSrc, setLogoSrc] = useState(Logo);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case "firstLayer":
                setTextColor("text-white/80");
                setLogoSrc(Logo);
                break;
              case "secondLayer":
                setTextColor("text-black/80");
                setLogoSrc(Logo2);
                break;
              default:
                setTextColor("text-white/80");
                setLogoSrc(Logo);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="w-full flex py-3 justify-between bg-[#0d0d0d]/60 backdrop-blur-md items-center absolute md:fixed shadow-xl shadow-tertiary/5 top-0 left-0 z-50">
      <ul>
        <li>
          <a href="/">
            <img
              src={logoSrc}
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
            } ${textColor} hover:text-text sub`}
          >
            {index === 0 ? (
              <a href={`/${nav.id}`}>{nav.title}</a>
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end  mr-10 items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain text-"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex fixed inset-0 bg-black bg-opacity-30 z-50" : "hidden"
          } sm:hidden`}
          onClick={() => setToggle(false)}
        >
          <div className="flex flex-col justify-between items-end p-6 bg-primary/20 border border-secondary/50 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar"
          onClick={(e) => e.stopPropagation()}
          >
            <ul className="list-none flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-semibold cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  } text-text`}
                  onClick={() => setToggle(false)}
                >
                  {index === 0 ? (
                    <a href={`/${nav.id}`}>{nav.title}</a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
