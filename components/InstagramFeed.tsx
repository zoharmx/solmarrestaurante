
import React from 'react';

const InstagramFeed: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/insta1/400/400',
    'https://picsum.photos/seed/insta2/400/400',
    'https://picsum.photos/seed/insta3/400/400',
    'https://picsum.photos/seed/insta4/400/400',
    'https://picsum.photos/seed/insta5/400/400',
    'https://picsum.photos/seed/insta6/400/400',
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-oswald text-gray-800 mb-8">Follow Us On Instagram</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {images.map((src, index) => (
            <a href="#" key={index} className="block group relative">
              <img src={src} alt={`Instagram post ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                 <i className="fab fa-instagram text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
