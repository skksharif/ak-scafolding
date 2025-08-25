"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaTimes } from "react-icons/fa";

type GalleryItem = {
  category: string;
  image: string;
};

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "scaffolding", name: "Scaffolding Systems" },
    { id: "acrospan", name: "Acro Spans" },
    { id: "centeredsheets", name: "Centered Sheets" },
    { id: "clamps", name: "Clamps" },
    { id: "galvanizedplanks", name: "Metal Planks" },
    { id: "jackpipes", name: "Jack Pipes" },

  ];


  // Gallery Items - ALL IMAGES FROM YOUR FOLDERS
  const galleryItems = [
    // Scaffolding
    { category: "scaffolding", image: "/gallery/scaffolding/i1.png" },
    { category: "scaffolding", image: "/gallery/scaffolding/i2.png" },
    { category: "scaffolding", image: "/gallery/scaffolding/i3.png" },
    { category: "scaffolding", image: "/gallery/scaffolding/i4.png" },
    { category: "scaffolding", image: "/gallery/scaffolding/i5.png" },
    { category: "scaffolding", image: "/gallery/scaffolding/i6.png" },
    { category: "scaffolding", image: "/gallery/scaffolding/i7.png" },
    { category: "scaffolding", image: "/gallery/scaffolding/i8.png" },
    { category: "scaffolding", image: "/gallery/scaffolding/i9.png" },
    { category: "scaffolding", image: "/gallery/scaffolding/i10.png" },

    // Acrospan
    { category: "acrospan", image: "/gallery/acrospan/i1.png" },
    { category: "acrospan", image: "/gallery/acrospan/i2.png" },
    { category: "acrospan", image: "/gallery/acrospan/i3.png" },
    { category: "acrospan", image: "/gallery/acrospan/i4.png" },

    // Centered Sheets
    { category: "centeredsheets", image: "/gallery/centeredsheets/i1.png" },
    { category: "centeredsheets", image: "/gallery/centeredsheets/i2.png" },
    { category: "centeredsheets", image: "/gallery/centeredsheets/i3.png" },

    // Clamps
    { category: "clamps", image: "/gallery/clamps/i1.png" },

    // Galvanized Planks
    { category: "galvanizedplanks", image: "/gallery/galvanizedplanks/i1.png" },
    { category: "galvanizedplanks", image: "/gallery/galvanizedplanks/i2.png" },

    // Jack Pipes
    { category: "jackpipes", image: "/gallery/jackpipes/i1.png" },
    { category: "jackpipes", image: "/gallery/jackpipes/i2.png" },

    // Add more items as needed
    { category: "other", image: "/gallery/other/i2.jpg" },
    { category: "other", image: "/gallery/other/i1.jpg" },
    { category: "other", image: "/gallery/other/i3.jpg" },
    { category: "other", image: "/gallery/other/i4.jpg" },
    { category: "other", image: "/gallery/other/i5.jpg" },
    { category: "other", image: "/gallery/other/i6.jpg" },
    { category: "other", image: "/gallery/other/i7.jpg" },
    { category: "other", image: "/gallery/other/i8.jpg" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A2A52] mb-4">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-[#F36A2D] mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[#F36A2D] text-white shadow-md"
                  : "bg-white text-[#555555] border border-gray-300 hover:border-[#F36A2D] hover:text-[#F36A2D]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                inView ? "animate-fade-scale" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt="Gallery"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 z-10"
            >
              <FaTimes className="text-gray-800" />
            </button>
            <img
              src={selectedImage.image}
              alt="Gallery Large"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
