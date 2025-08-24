"use client";

import { FaWhatsapp } from "react-icons/fa";

type WhatsappFloatingProps = {
  phone: string; // WhatsApp number in international format without +
  message?: string; // optional default message
};

const WhatsappFloating: React.FC<WhatsappFloatingProps> = ({
  phone,
  message = "Hello! I’d like to connect with you.",
}) => {
 

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-[70px] -translate-y-1/2 z-50 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappFloating;
