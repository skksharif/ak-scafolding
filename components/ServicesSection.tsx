'use client';

import { useInView } from 'react-intersection-observer';
import { 
  FaCog, 
  FaTools, 
  FaRulerVertical, 
  FaShieldAlt, 
  FaClipboardCheck,
  FaHardHat,
  FaWrench
} from 'react-icons/fa';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FaCog,
      title: 'Scaffolding Cuplock System in Hyderabad',
      description: 'Strong, modular, and safe scaffolding systems for all construction needs.',
      delay: 0,
    },
    {
      icon: FaTools,
      title: 'Adjustable Acro Span Hyderabad',
      description: 'Heavy-duty spans with adjustable support for maximum stability.',
      delay: 0.2,
    },
    {
      icon: FaRulerVertical,
      title: 'Jack Pipes for Construction',
      description: 'Reliable vertical support for scaffolding setups and structures.',
      delay: 0.4,
    },
    {
      icon: FaShieldAlt,
      title: 'Centering Sheets Hyderabad',
      description: 'Premium mild steel sheets for slab & beam casting applications.',
      delay: 0.6,
    },
    {
      icon: FaClipboardCheck,
      title: 'Civil Clamps & Fasteners',
      description: 'High-strength clamps ensuring safety and structural integrity.',
      delay: 0.8,
    },
    {
      icon: FaHardHat,
      title: 'Galvanized Perforated Planks',
      description: 'Anti-slip galvanized platforms for worker safety and efficiency.',
      delay: 1.0,
    },
    {
      icon: FaWrench,
      title: 'U Jack & Base Jack Hyderabad',
      description: 'Adjustable supports for perfect balance & structural strength.',
      delay: 1.2,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-[#FFF6EC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A2A52] mb-6">
            Our Premium <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#F36A2D] mx-auto mb-6"></div>
          <p className="text-xl text-[#555555] max-w-3xl mx-auto leading-relaxed">
            Comprehensive scaffolding solutions designed for safety, strength, and reliability in every project.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#F36A2D]/30 transform hover:-translate-y-2 hover:rotate-1 ${
                  inView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${service.delay}s` }}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#F36A2D] to-[#E85C24] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1A2A52] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1A2A52] mb-4 group-hover:text-[#F36A2D] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#555555] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-[#F36A2D] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F36A2D]/5 to-[#1A2A52]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;