"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Create a mailto link with subject & body
    const mailtoLink = `mailto:akscaffolding.hyd@gmail.com
    ?subject=${encodeURIComponent(formData.subject || "Scaffolding Inquiry")}
    &body=${encodeURIComponent(
      `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}`
    )}`;

    // Redirect to default email client
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Location",
      details: [
        "1-4-523/1, Beside Line United Weight Bridge,",
        "Near Badi Masjid, Bholakpur, Musheerabad,",
        "Hyderabad – 500020, T.S.",
      ],
    },

    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["akscaffolding.hyd@gmail.com"],
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#1A2A52] via-[#15213E] to-[#1A2A52]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in <span className="gradient-text">Touch</span> with Us
          </h2>
          <div className="w-24 h-1 bg-[#F36A2D] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Looking for the best scaffolding in Hyderabad? Contact AK
            Scaffolding today for premium scaffolding solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div
            ref={ref}
            className={`space-y-8 ${inView ? "animate-slide-up" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 ${
                    inView ? "animate-fade-scale" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-[#F36A2D] rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-300 text-sm leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Emergency Contact */}
            <div className="bg-[#F36A2D] p-6 rounded-lg">
              <h4 className="text-white font-bold text-lg mb-2">
                24/7 Emergency Service
              </h4>
              <p className="text-white/90 text-sm mb-3">
                For urgent scaffolding requirements, call our emergency hotline:
              </p>
              <a
                href="tel:9989934599"
                className="text-white font-bold text-xl hover:underline"
              >
                +91 97058 99998
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1A2A52] mb-8">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F36A2D] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F36A2D] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F36A2D] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F36A2D] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request Quote</option>
                    <option value="rental">Scaffolding Rental</option>
                    <option value="purchase">Purchase Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F36A2D] focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your scaffolding requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F36A2D] hover:bg-[#E85C24] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
