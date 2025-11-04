import React from "react";
import { useState } from "react";

const ProjectCard = ({
  image,
  title,
  description,
  link,
  fadeRight,
  fadeLeft,
  reverse = false,
  isDev = false,
  titleColor,
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
      className={`relative flex flex-col sm2:flex-row gap-4 ${ reverse ? "sm2:flex-row-reverse sm2:bg-[radial-gradient(circle_at_center,_rgba(153,153,153,0.3),_transparent_70%)]" : "sm2:bg-[radial-gradient(circle_at_center,_rgba(153,153,153,0.3),_transparent_70%)]" } w-[90%] items-center p-4 overflow-visible`}
    >

      <div
        className="relative z-10 w-[280px] h-[280px] sm2:w-[450px] sm2:h-[230px] sm2:min-h-[230px] sm2:min-w-[300px] ipad:h-[300px] ipad:min-w-[320px] rounded-4xl  overflow-hidden hover:drop-shadow-[0_0_8px_#f1f1f1] transition-all duration-700 cursor-pointer"
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
        className={`relative z-10 p-2 group ${
          reverse ? fadeRight : fadeLeft
        } sm2:flex sm2:flex-col sm2:justify-between sm2:h-full ipad:justify-center ipad:max-w-[50%] md:max-w-[40%] ${
          reverse ? "sm2:text-right" : "sm2:text-left"
        }`}
      >
        <h2
          className={`text-2xl text-center sm2:text-4xl lg:text-5xl xl:text-7xl font-bebas ${
            reverse ? "sm2:text-right" : "sm2:text-left"
          }`}
          style={{ color: titleColor }}
        >
          {title}
        </h2>
        <p
          className={`text-text/80 leading-5 md:leading-6 2xlg:leading-7 text-lg ipad:text-xl md:text-2xl 2xlg:text-3xl text-justify font-bebas ${
            reverse ? "sm2:text-right" : "sm2:text-left"
          }`}
        >
          {description}
        </p>
        <div className={`mt-2 ${reverse ? "text-right" : "text-left"}`}>
          {isDev ? (
            <span className="text-2xl md:text-3xl 2xlg:text-4xl font-bebas text-gray-400 italic cursor-not-allowed select-none">
              Em desenvolvimento
            </span>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl 2xlg:text-4xl font-bebas text-blue-50 hover:text-accent hover:[text-shadow:0_0_10px_rgba(255, 255, 255, 0.9)] transition-all duration-300 inline-block cursor-pointer"
            >
              Ir para o site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
