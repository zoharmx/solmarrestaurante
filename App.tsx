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
              <img src="/images/camaron-y-caldo-de-hacha-lg.webp" alt="Camaron y Callo de Hacha" className="w-full h-full object-cover"/>
            </div>
            <div className="h-64 md:h-96">
              <img src="/images/aguachile-en-salsa-verde-lg.webp" alt="Aguachile en Salsa Verde" className="w-full h-full object-cover"/>
            </div>
            <div className="h-64 md:h-96">
              <img src="/images/ceviche-de-camaron-lg.webp" alt="Ceviche de Camarón" className="w-full h-full object-cover"/>
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
          <div className="w-full md:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('/images/michelada-lg.webp')"}}>
          </div>
        </section>

        <LiveMusicSection />

        {/* About Section */}
        <section className="py-20 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('/images/parrillada-de-mariscos-para-dos-personas-lg.webp')"}}>
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
          <div className="w-full md:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('/images/baja-fish-tacos-3-lg.webp')"}}>
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