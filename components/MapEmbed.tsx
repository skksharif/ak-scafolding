"use client";

import React from "react";

type MapEmbedProps = {
  /** Optional: override the default address */
  address?: string;
  /** Optional: height of the map container */
  height?: number | string;
  /** Optional: round the map card */
  rounded?: boolean;
};

const DEFAULT_ADDRESS =
  "1-4-523/1, Beside Line United Weight Bridge, Near Badi Masjid, Bholakpur, Musheerabad, Hyd-500020, Telangana";

const MapEmbed: React.FC<MapEmbedProps> = ({
  address = DEFAULT_ADDRESS,
  height = 380,
  rounded = true,
}) => {
  // Google Maps "search" embed works without an API key
  const q = encodeURIComponent(address);
  const googleEmbedSrc = `https://www.google.com/maps?q=${q}&output=embed`;
  const googleLink = `https://maps.app.goo.gl/ZYpFtFDhSXoNvRFp8`;
  const osmLink = `https://www.openstreetmap.org/search?query=${q}`;

  return (
    <section className="w-full px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
          Find Us on the Map
        </h2>
        <p className="text-gray-600 mb-4">{address}</p>

        <div
          className={[
            "relative w-full overflow-hidden shadow-lg border border-gray-200 bg-white",
            rounded ? "rounded-2xl" : "",
          ].join(" ")}
          style={{ height }}
        >
          {/* Keep aspect & responsiveness */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.849909561387!2d78.4984472!3d17.4189891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb998cc239cbc7%3A0xeea88c22ca8156e8!2sAk%20scaffolding!5e0!3m2!1sen!2sin!4v1756024403240!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            Open in Google Maps
          </a>

     
        </div>
      </div>
    </section>
  );
};

export default MapEmbed;
