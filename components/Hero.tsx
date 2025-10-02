import React from 'react';

interface HeroProps {
  language: 'en' | 'es';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      restaurant: "Restaurant & Bar",
      style: "SINALOA STYLE"
    },
    es: {
      restaurant: "Restaurant & Bar",
      style: "ESTILO SINALOA"
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover opacity-75"
      >
        <source
          src="https://video.wixstatic.com/video/a9827a_393fb64be87f4e56b0ce436f1c85aa1d/1080p/mp4/file.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay ligero solo para mejorar contraste del texto */}
      <div className="absolute inset-0 bg-black/15"></div>

      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up backdrop-blur-sm bg-black/10 rounded-3xl p-8 md:p-12">
          <h1 className="font-anton font-black text-5xl md:text-7xl lg:text-8xl mb-2 uppercase tracking-tight">
            <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
              MARISCOS
            </span>
            <span className="block text-[#FFD756] text-6xl md:text-8xl lg:text-9xl drop-shadow-[0_4px_25px_rgba(255,215,86,0.8)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_90%)]">
              SOL DEL MAR
            </span>
          </h1>
          <h2 className="block text-2xl md:text-4xl text-white font-oswald mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {content[language].restaurant}
          </h2>
          <p className="font-oswald text-xl md:text-2xl text-white mt-2 tracking-wider drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {content[language].style}
          </p>
          
          <button className="mt-8 bg-[#323232] text-white border-2 border-[#AE9A64] font-oswald text-sm font-bold py-3 px-8 hover:bg-[#AE9A64] hover:text-[#323232] transition-colors duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
            MENU
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;