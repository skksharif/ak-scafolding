"use client";

import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";

type WhatsappQRProps = {
  phone: string; // WhatsApp number in international format without +
  size?: number;
};

const WhatsappQR: React.FC<WhatsappQRProps> = ({ phone, size = 180 }) => {
  const whatsappLink = `https://wa.me/${phone}`;

  return (
    <section className="flex flex-col items-center justify-center py-10">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center"
      >
        {/* QR pulse */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-3 rounded-xl bg-gray-100"
        >
          <img src="/qr.png" alt="QR" className="w-[0px]" />
        </motion.div>

        {/* Scan Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-4 text-lg font-semibold text-green-600"
        >
        Scan to Connect on WhatsApp
        </motion.p>

        {/* Direct Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-green-600 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          Open in WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default WhatsappQR;
