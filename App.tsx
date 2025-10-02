import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveMusicSection from './components/LiveMusicSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import InstagramFeed from './components/InstagramFeed';
import MenuSection from './components/MenuSection';
import FloatingButtons from './components/FloatingButtons';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const handleLanguageChange = (lang: 'en' | 'es') => {
    setLanguage(lang);
  };

  return (
    <div className="bg-[#323232] text-white">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero language={language} />

        {/* Feature Grid Section */}
        <section className="py-16 bg-[#008AFC]">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-64 md:h-96">
              <img src="https://static.wixstatic.com/media/a9827a_bce85b7bb52c4fdba2141a036e7de689~mv2.jpg/v1/fill/w_427,h_506,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9827a_bce85b7bb52c4fdba2141a036e7de689~mv2.jpg" alt="Seafood dish 1" className="w-full h-full object-cover"/>
            </div>
            <div className="h-64 md:h-96">
              <img src="https://static.wixstatic.com/media/a9827a_c702c6669ab946c6b300146baf4e4355~mv2.png/v1/fill/w_430,h_506,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9827a_c702c6669ab946c6b300146baf4e4355~mv2.png" alt="Seafood dish 2" className="w-full h-full object-cover"/>
            </div>
            <div className="h-64 md:h-96">
              <img src="https://static.wixstatic.com/media/a9827a_ff494bd18587455f9f2d89adfe1d0f2e~mv2.jpg/v1/fill/w_427,h_506,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9827a_ff494bd18587455f9f2d89adfe1d0f2e~mv2.jpg" alt="Seafood dish 3" className="w-full h-full object-cover"/>
            </div>
          </div>
        </section>

        {/* Daily Bar Specials Section */}
        <section className="flex flex-col md:flex-row min-h-[600px]">
          <div className="w-full md:w-1/2 bg-[#043B51] flex items-center justify-center p-8 md:p-16">
            <div className="text-center text-[#FFD756] max-w-md">
              <i className="fa fa-martini-glass-citrus text-6xl mb-4"></i>
              <h2 className="text-3xl md:text-4xl font-oswald tracking-wide mb-4">Daily BAR specials</h2>
              <p className="font-georgia text-lg mb-2">Beer Bucket Special<br/>Only $25.99!</p>
              <p className="font-georgia text-base mb-4">Gather your friends and enjoy our Modelo beer bucket special for just $25.99! Perfect for sharing.</p>
              <p className="font-georgia text-lg mb-2">Breakfast Drink Specials<br/>9 AM – 1 PM</p>
              <p className="font-georgia text-base mb-6">Enjoy our signature breakfast drinks for only $6.99 each.</p>
              <button className="bg-[#AE9A64] text-[#323232] font-oswald text-sm font-bold py-3 px-8 hover:bg-white hover:text-[#AE9A64] transition-colors duration-300">
                BAR
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://static.wixstatic.com/media/a9827a_1e20ba285ed64c678bf888b91bdb9135~mv2.jpeg/v1/fill/w_980,h_1154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9827a_1e20ba285ed64c678bf888b91bdb9135~mv2.jpeg')"}}>
          </div>
        </section>

        <LiveMusicSection />

        {/* About Section */}
        <section className="py-20 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://static.wixstatic.com/media/a9827a_0606d1e5b6a246deb4f0bde16ddd5fb0~mv2.jpg/v1/fill/w_1960,h_1498,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a9827a_0606d1e5b6a246deb4f0bde16ddd5fb0~mv2.jpg')"}}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative container mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-8xl font-oswald tracking-wider mb-16 text-shadow">THE RESTAURANT</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <p className="font-oswald text-lg text-[#AE9A64]">01</p>
                        <hr className="w-16 mx-auto my-2 border-[#AE9A64]" />
                        <h3 className="font-oswald text-xl text-[#F6F2E6] mb-4">Authentic Sinaloa-Style Seafood & Mexican Cuisine</h3>
                        <p className="font-georgia text-base">Experience the bold flavors of Sinaloa with fresh ceviches, aguachiles, and classic Mexican dishes in a warm, rustic setting.</p>
                    </div>
                    <div>
                        <p className="font-oswald text-lg text-[#AE9A64]">02</p>
                        <hr className="w-16 mx-auto my-2 border-[#AE9A64]" />
                        <h3 className="font-oswald text-xl text-[#F6F2E6] mb-4">All-Day Bar & Weekend Specials</h3>
                        <p className="font-georgia text-base">Enjoy our full bar with handcrafted cocktails and beer buckets. Don't miss our weekend drink specials and live music.</p>
                    </div>
                    <div>
                        <p className="font-oswald text-lg text-[#AE9A64]">03</p>
                        <hr className="w-16 mx-auto my-2 border-[#AE9A64]" />
                        <h3 className="font-oswald text-xl text-[#F6F2E6] mb-4">Family-Friendly Dining with a Cozy Atmosphere</h3>
                        <p className="font-georgia text-base">Gather with family and friends in a welcoming, countryside-inspired ambiance for a memorable dining experience.</p>
                    </div>
                </div>
            </div>
        </section>

        <MenuSection />

        {/* Weekday Specials Section */}
        <section className="flex flex-col md:flex-row-reverse min-h-[600px]">
          <div className="w-full md:w-1/2 bg-[#043B51] flex items-center justify-center p-8 md:p-16">
            <div className="text-center text-[#FFD756] max-w-md">
              <i className="fa fa-utensils text-6xl mb-4"></i>
              <h2 className="text-3xl md:text-4xl font-oswald tracking-wide mb-4">WEEKDAY SPECIALS</h2>
              <p className="font-georgia text-base mb-6">Enjoy our delicious weekday specials, including 2-for-1 cocktails and unbeatable deals on tacos and fresh seafood plates. Perfect for a midday treat or an evening out.</p>
              <button className="bg-[#AE9A64] text-[#323232] font-oswald text-sm font-bold py-3 px-8 hover:bg-white hover:text-[#AE9A64] transition-colors duration-300">
                MENU
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://static.wixstatic.com/media/11062b_f4c6c221d8c94ea18b967382d10dd593~mv2.jpg/v1/fill/w_980,h_1912,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_f4c6c221d8c94ea18b967382d10dd593~mv2.jpg')"}}>
          </div>
        </section>

        <InstagramFeed />

      </main>
      <Footer />
      <ScrollToTopButton />
      <FloatingButtons />
    </div>
  );
};

export default App;