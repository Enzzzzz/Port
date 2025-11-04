import React from "react";
import { useState } from "react";

const ProjectCardLeft = ({
  image,
  title,
  description,
  link,
  fadeRight,
  fadeLeft,
  reverse = false,
}) => {
    const [isImageOpen, setIsImageOpen] = useState(false);

      const handleOpenImage = (e) => {
    e.stopPropagation();
    setIsImageOpen(true);
  };

  const handleCloseImage = (e) => {
    e.stopPropagation();
    setIsImageOpen(false);
  };

  return (
    <div
      className={`flex flex-col sm2:flex-row ${
        reverse ? "sm2:flex-row-reverse" : ""
      } gap-4 w-[90%] items-center p-4`}
    >
      <div
        className="w-[280px] h-[280px] sm2:w-[450px] sm2:h-[230px] sm2:min-h-[230px] sm2:min-w-[300px] ipad:h-[300px] ipad:min-w-[320px] rounded-4xl overflow-hidden hover:drop-shadow-[0_0_8px_#145f24] transition-all duration-700 cursor-pointer"
        onClick={handleOpenImage}
      >
        <img
          src={image}
          className={`w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-90 hover:blur-xs ${
            reverse ? fadeLeft : fadeRight
          } bg-black`}
          alt="project preview"
        />
      </div>

        {isImageOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
            onClick={handleCloseImage}
          >
            <button
              className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-emerald-400 transition"
              onClick={handleCloseImage}
            >
              x
            </button>
            <img
              src={image}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg object-contain cursor-pointer transition-all duration-300"
              alt="full view"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      

      <div
        className={`p-2 group ${
          reverse ? fadeRight : fadeLeft
        } sm2:flex sm2:flex-col sm2:justify-between sm2:h-full ipad:justify-center ipad:max-w-[50%] md:max-w-[40%] ${
          reverse ? "sm2:text-right" : "sm2:text-left"
        }`}
      >
        <h2
          className={`text-2xl text-center sm2:text-4xl lg:text-5xl xl:text-7xl font-bebas text-accent ${
            reverse ? "sm2:text-right" : "sm2:text-left"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-text/80 leading-5 text-lg ipad:text-xl text-justify font-bebas ${
            reverse ? "sm2:text-right" : "sm2:text-left"
          }`}
        >
          {description}
        </p>
        <div
          className={`mt-2 ${
            reverse ? "text-right" : "text-left"
          }`}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bebas text-emerald-400 hover:text-accent hover:[text-shadow:0_0_10px_rgba(59,130,246,0.9)] transition-all duration-300 inline-block cursor-pointer"
          >
            Ir para o site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardLeft;
