
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[700px] overflow-hidden flex items-center justify-center text-center text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://static.wixstatic.com/media/a9827a_393fb64be87f4e56b0ce436f1c85aa1df000.jpg"
      >
        <source src="https://video.wixstatic.com/video/a9827a_393fb64be87f4e56b0ce436f1c85aa1d/1080p/mp4/file.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-yellow-600 bg-opacity-20 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center">
        {/* Animated Scrolling Text Banner */}
        <div className="w-full h-20 md:h-28 overflow-hidden mb-4">
            <div className="animate-scroll whitespace-nowrap h-full">
                <img src="https://static.wixstatic.com/media/a9827a_3d5452d6d3ba42b090630ebae08be6e4~mv2.png/v1/fill/w_2556,h_208,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/isla_edited.png" className="h-full inline-block" alt="scrolling text" />
                <img src="https://static.wixstatic.com/media/a9827a_3d5452d6d3ba42b090630ebae08be6e4~mv2.png/v1/fill/w_2556,h_208,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/isla_edited.png" className="h-full inline-block" alt="scrolling text" />
            </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
            width: 200%;
          }
        `}</style>
        
        <h1 className="font-anton text-7xl md:text-9xl lg:text-[140px] leading-none text-black text-shadow-white-sm">
          <span className="font-anton text-5xl md:text-7xl lg:text-[80px] tracking-tight">MARISCOS</span><br />
          SOL DEL MAR
        </h1>

        <h2 className="font-anton text-5xl md:text-7xl lg:text-[80px] tracking-tight mt-4 text-black text-shadow-white-sm">
            Restaurant & Bar
        </h2>
        <p className="font-oswald text-2xl md:text-4xl tracking-wider mt-4 text-black text-shadow-white-sm">
            ESTILO SINALOA
        </p>

        <button className="mt-8 bg-[#323232] text-white border-2 border-[#AE9A64] font-oswald text-sm font-bold py-3 px-8 hover:bg-[#AE9A64] hover:text-[#323232] transition-colors duration-300">
            MENU
        </button>
      </div>
    </section>
  );
};

export default Hero;
