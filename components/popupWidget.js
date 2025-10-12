import React from "react";

export default function PopupWidget() {
  // Configurações do WhatsApp
  const whatsappNumber = "5511999999999"; // Substitua pelo número real da empresa
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Desenvolve. Como vocês podem me ajudar?";
  
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed z-40 flex items-center justify-center transition duration-300 bg-green-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-green-600 focus:bg-green-600 ease group"
      aria-label="Falar no WhatsApp"
    >
      {/* Ícone do WhatsApp */}
      <svg
        className="w-8 h-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.5 7.11c0 .13-.01.26-.06.38-.18.53-.69 1.05-1.52 1.05-.39 0-.78-.07-1.11-.2-.23-.09-.43-.22-.56-.4-.24-.34-.73-1.45-.73-1.45s-.51-.29-.51-.29c-.26-.17-.43-.46-.43-.75 0-.39.23-.74.62-.74h.11c.19 0 .29.09.37.25.09.18.29.73.32.78.03.06.05.13.05.21 0 .09-.04.17-.12.23-.08.06-.17.04-.25-.02-.08-.06-.12-.15-.12-.24 0-.08.04-.15.11-.2.07-.05.16-.02.24.02.08.04.12.11.12.19 0 .26-.17.47-.4.52-.12.03-.25-.01-.35-.09-.1-.08-.15-.2-.13-.31.02-.11.11-.2.22-.22.11-.02.22.05.24.16.02.11-.05.22-.16.24-.32.06-.65-.13-.79-.43-.14-.3-.05-.66.21-.84.26-.18.6-.15.82.08.22.23.25.57.07.83-.09.13-.25.2-.4.15-.15-.05-.25-.2-.22-.35.03-.15.18-.25.33-.22s.25.18.22.33c-.03.15-.18.25-.33.22-.15-.03-.25-.18-.22-.33.03-.15.18-.25.33-.22z"/>
      </svg>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 mb-2 hidden group-hover:block">
        <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
          Falar no WhatsApp
          <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </button>
  );
}
