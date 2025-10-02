import React, { useState } from 'react';

const FloatingButtons: React.FC = () => {
  const [whatsappHover, setWhatsappHover] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);

  // Números de contacto
  const phoneNumber = '3233571349'; // Sin guiones ni espacios
  const whatsappNumber = '3233571349'; // Número para WhatsApp
  const whatsappMessage = '¡Hola! Me gustaría hacer una reservación en Mariscos Sol Del Mar';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/1${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+1${phoneNumber}`;
  };

  return (
    <div className="fixed left-4 bottom-24 z-50 flex flex-col gap-4">
      {/* Botón de WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setWhatsappHover(true)}
        onMouseLeave={() => setWhatsappHover(false)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        {/* Ícono de WhatsApp */}
        <svg 
          className="w-7 h-7 text-white"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        {/* Tooltip */}
        <div className={`absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-opacity duration-300 ${whatsappHover ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          WhatsApp
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
        </div>

        {/* Efecto de pulso */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </button>

      {/* Botón de Llamada */}
      <button
        onClick={handlePhoneClick}
        onMouseEnter={() => setPhoneHover(true)}
        onMouseLeave={() => setPhoneHover(false)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#008AFC] hover:bg-[#0070CC] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Llamar al restaurante"
      >
        {/* Ícono de Teléfono */}
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>

        {/* Tooltip */}
        <div className={`absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-opacity duration-300 ${phoneHover ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          Llamar: (323) 357-1349
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
        </div>

        {/* Efecto de pulso */}
        <span className="absolute inset-0 rounded-full bg-[#008AFC] animate-ping opacity-20"></span>
      </button>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingButtons;