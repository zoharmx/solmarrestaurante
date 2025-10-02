import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { menuData } from '../data/menu';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].name);

  const selectedCategory = menuData.find(cat => cat.name === activeCategory);

  return (
    <section id="menu" className="py-20 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://static.wixstatic.com/media/a9827a_4d3b8f8a1a3e4b7b8a9d1c1e5e6f6d3e~mv2.jpg/v1/fill/w_1960,h_1102,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a9827a_4d3b8f8a1a3e4b7b8a9d1c1e5e6f6d3e~mv2.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-8xl font-oswald tracking-wider mb-12 text-shadow text-white">OUR MENU</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {menuData.map(category => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`font-oswald text-xs md:text-sm font-bold py-2 px-4 rounded-md transition-colors duration-300 whitespace-nowrap ${
                activeCategory === category.name
                  ? 'bg-[#FFD756] text-[#323232]'
                  : 'bg-black bg-opacity-30 text-white hover:bg-[#FFD756] hover:text-[#323232]'
              }`}
            >
              {category.name.toUpperCase()}
            </button>
          ))}
        </div>

        {selectedCategory && (
          <div key={selectedCategory.name} className="max-w-7xl mx-auto bg-black bg-opacity-40 p-4 md:p-8 rounded-lg animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 flex flex-col justify-start">
                <img src={selectedCategory.imageUrl} alt={selectedCategory.name} className="w-full h-80 object-cover rounded-lg shadow-lg"/>
                {selectedCategory.description && (
                  <p className="font-georgia text-gray-300 mt-4 text-left italic text-sm">{selectedCategory.description}</p>
                )}
              </div>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {selectedCategory.items.map(item => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default MenuSection;
