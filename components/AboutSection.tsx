'use client';

import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaAward, FaUsers, FaCertificate } from 'react-icons/fa';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const highlights = [
    {
      icon: FaCertificate,
      title: 'Certified Safety Compliance',
      description: 'All products meet IS safety standards',
    },
    {
      icon: FaAward,
      title: 'Affordable Pricing in Hyderabad',
      description: 'Quality scaffolding at competitive prices',
    },
    {
      icon: FaCheckCircle,
      title: 'Wide Range of Products',
      description: 'Cuplock, jacks, planks, clamps & more',
    },
    {
      icon: FaUsers,
      title: 'Trusted by Top Contractors',
      description: 'Residential, commercial & industrial',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#1A2A52] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={ref} className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Who <span className="gradient-text">We Are</span>
            </h2>
            
            <div className="w-24 h-1 bg-[#F36A2D] mb-8"></div>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              AK Scaffolding is the leading scaffolding supplier in Hyderabad, providing premium-quality 
              scaffolding materials engineered for strength, safety, and precision. Based in Musheerabad, 
              we serve construction companies, contractors, and industries across Telangana with durable 
              scaffolding systems.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              With over 20 years of experience in the industry, we have built a reputation for excellence, 
              reliability, and unwavering commitment to safety standards. Our team of experts ensures that 
              every project receives the highest quality materials and professional service.
            </p>

         
          </div>

          {/* Image Collage */}
          <div className={`relative ${inView ? 'animate-fade-scale' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
                  style={{
                    backgroundImage: 'url(/scafolding/about1.png)',
                  }}
                ></div>
                <div 
                  className="h-32 bg-cover bg-center rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                  style={{
                    backgroundImage: 'url(/scafolding/about2.png)',
                  }}
                ></div>
              </div>
              <div className="space-y-4 mt-8">
                <div 
                  className="h-32 bg-cover bg-center rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"
                  style={{
                    backgroundImage: 'url(/scafolding/about3.png)',
                  }}
                ></div>
                <div 
                  className="h-48 bg-cover bg-center rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                  style={{
                    backgroundImage: 'url(/scafolding/about4.png)',
                  }}
                ></div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#F36A2D] text-white p-4 rounded-full shadow-lg animate-float">
              <FaAward className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Company Highlights */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className={`text-center group ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-[#F36A2D] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-glow transition-all duration-300">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F36A2D] transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;