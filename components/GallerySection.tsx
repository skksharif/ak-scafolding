'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaTimes } from 'react-icons/fa';

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'scaffolding', name: 'Scaffolding Systems' },
    { id: 'spans', name: 'Acro Spans & Jacks' },
    { id: 'sheets', name: 'Sheets & Clamps' },
    { id: 'planks', name: 'Metal Planks & Accessories' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'scaffolding',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cuplock Scaffolding System',
      description: 'Heavy-duty scaffolding for commercial construction',
    },
    {
      id: 2,
      category: 'spans',
      image: 'https://images.pexels.com/photos/1426825/pexels-photo-1426825.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Adjustable Acro Spans',
      description: 'Flexible support systems for various applications',
    },
    {
      id: 3,
      category: 'sheets',
      image: 'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Centering Sheets Installation',
      description: 'Premium mild steel sheets for concrete work',
    },
    {
      id: 4,
      category: 'planks',
      image: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Galvanized Planks',
      description: 'Anti-slip platforms for worker safety',
    },
    {
      id: 5,
      category: 'scaffolding',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'High-rise Scaffolding',
      description: 'Complete scaffolding solution for tall buildings',
    },
    {
      id: 6,
      category: 'spans',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Base Jack Systems',
      description: 'Adjustable base support for level foundations',
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A2A52] mb-6">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-[#F36A2D] mx-auto mb-6"></div>
          <p className="text-xl text-[#555555] max-w-3xl mx-auto leading-relaxed">
            Showcase of our premium scaffolding solutions across various construction projects in Hyderabad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#F36A2D] text-white shadow-lg'
                  : 'bg-white text-[#555555] border border-gray-300 hover:border-[#F36A2D] hover:text-[#F36A2D]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                inView ? 'animate-fade-scale' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#F36A2D] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 z-10"
            >
              <FaTimes className="text-gray-800" />
            </button>
            
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;