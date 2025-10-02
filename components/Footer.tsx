
import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, LockIcon, ArrowUpIcon } from './Icons';

const Footer: React.FC = () => {
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white pt-8">
      <div className="bg-gradient-to-r from-[#04589E] to-[#212023] py-12">
        <div className="container mx-auto px-4 text-center">
            <button onClick={scrollToTop} className="mb-6">
                <img src="https://static.wixstatic.com/media/a9827a_25f465c2d25540169cf5e97098ff70db~mv2.png/v1/fill/w_134,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9827a_25f465c2d25540169cf5e97098ff70db~mv2.png" alt="Logo" className="h-24 w-auto mx-auto"/>
            </button>
            <p className="font-oswald text-lg tracking-wider mb-6">Follow us for updates, promotions, and more!</p>
            <h2 className="font-oswald text-4xl tracking-wider mb-6">CONTACT & LOCATION</h2>
            
            <div className="flex justify-center space-x-4 mb-8">
                <a href="#" className="w-11 h-11"><img src="https://static.wixstatic.com/media/a9827a_bae6c4fa07924a47aaca7913e2b3bcaf~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9827a_bae6c4fa07924a47aaca7913e2b3bcaf~mv2.png" alt="Google"/></a>
                <a href="#" className="w-11 h-11"><img src="https://static.wixstatic.com/media/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png" alt="Instagram"/></a>
                <a href="#" className="w-11 h-11"><img src="https://static.wixstatic.com/media/11062b_ef6a6ac194704911951645990055c2ce~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_ef6a6ac194704911951645990055c2ce~mv2.png" alt="Facebook"/></a>
                <a href="#" className="w-11 h-11"><img src="https://static.wixstatic.com/media/11062b_69d309d6dbde492fae325fb0deca6556~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_69d309d6dbde492fae325fb0deca6556~mv2.png" alt="Yelp"/></a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="text-left space-y-4">
                    <div className="flex items-start">
                        <PhoneIcon className="w-10 h-10 mr-4 mt-1 text-[#F6F2E6]"/>
                        <div>
                            <p className="font-oswald text-sm">Phone</p>
                            <a href="tel:323-357-1349" className="underline">323-357-1349</a>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MailIcon className="w-10 h-10 mr-4 mt-1 text-[#F6F2E6]"/>
                        <div>
                            <p className="font-oswald text-sm">Email</p>
                            <a href="mailto:mariscossoldelmar@gmail.com" className="underline">mariscossoldelmar@gmail.com</a>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <MapPinIcon className="w-10 h-10 mr-4 mt-1 text-[#F6F2E6]"/>
                        <div>
                            <p className="font-oswald text-sm">Address</p>
                            <a href="https://maps.app.goo.gl/8fPN5HHji8X3jgXD9" target="_blank" rel="noopener noreferrer" className="underline">10007 Long Beach Blvd., Lynwood, CA 90262</a>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <LockIcon className="w-10 h-10 mr-4 mt-1 text-[#F6F2E6]"/>
                        <div>
                            <p className="font-oswald text-sm underline"><a href="#">PRIVACY POLICY</a></p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-80 bg-gray-700">
                    <a href="https://maps.app.goo.gl/8fPN5HHji8X3jgXD9" target="_blank" rel="noopener noreferrer">
                        <img src="https://picsum.photos/seed/mariscosmap/600/400" alt="Restaurant location map" className="w-full h-full object-cover"/>
                    </a>
                </div>
            </div>
            
            <button onClick={scrollToTop} className="mt-8 flex items-center mx-auto text-[#AE9A64] hover:text-white">
                <div className="transform rotate-[-90deg] mr-2">
                  <ArrowUpIcon className="w-5 h-5"/>
                </div>
                <span className="font-oswald text-sm">GO TO TOP</span>
            </button>
        </div>
      </div>

      <div className="bg-white py-6">
        <p className="text-center text-sm text-[#AE9A64]">
            © 2025 by: Mariscos Sol del Mar Restaurant & Bar
        </p>
         <p className="text-center text-sm text-[#AE9A64]">
            Powered and secured by: <a href="#" className="underline">A WORLD-CLASS ENGINEER</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
