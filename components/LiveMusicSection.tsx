
import React from 'react';

const LiveMusicSection: React.FC = () => {
  return (
    <section className="bg-[#008AFC] py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <p className="font-oswald text-3xl md:text-5xl text-white mb-4">FRIDAY AND SATURDAY</p>
          <div className="relative h-48 md:h-64 flex items-center justify-center md:justify-start">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://video.wixstatic.com/video/11062b_47f246c73a0c41f89b088458c4818f48/1080p/mp4/file.mp4"
            ></video>
            <h2 
              className="font-anton text-7xl md:text-9xl lg:text-[120px] font-bold uppercase text-transparent bg-clip-text"
              style={{
                backgroundImage: 'url(https://video.wixstatic.com/video/11062b_47f246c73a0c41f89b088458c4818f48/1080p/mp4/file.mp4)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                mixBlendMode: 'screen',
                filter: 'brightness(1.5) contrast(1.2)'
              }}
            >
              LIVE MUSIC
            </h2>
            {/* Fallback for browsers not supporting background-clip: text */}
            <h2 
              className="absolute top-0 left-0 font-anton text-7xl md:text-9xl lg:text-[120px] font-bold uppercase text-white -z-10"
              aria-hidden="true"
            >
              LIVE MUSIC
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="https://static.wixstatic.com/media/a9827a_ed5f9ad0ca5b4558b535d49db11b1fa7~mv2.png/v1/fill/w_479,h_461,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9827a_ed5f9ad0ca5b4558b535d49db11b1fa7~mv2.png" alt="Vector graphic" className="w-64 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default LiveMusicSection;
