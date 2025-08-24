"use client";

import { FaComments, FaCogs, FaCheckCircle } from "react-icons/fa";

const processSteps = [
  {
    icon: <FaComments className="text-blue-600 text-3xl" />,
    title: "Briefing",
    description:
      "We begin with a detailed consultation to understand your site's safety, load, and height requirements precisely.",
  },
  {
    icon: <FaCogs className="text-green-600 text-3xl" />,
    title: "Processing",
    description:
      "Our team engineers the perfect scaffolding setup — calculating dimensions, assembling components, and inspecting for precision.",
  },
  {
    icon: <FaCheckCircle className="text-red-600 text-3xl" />,
    title: "Finishing",
    description:
      "Installation is done on-site with strict safety compliance, ensuring stability and durability for your entire project duration.",
  },
];

const OurProcess: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-white via-[#FFF6EC] py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A2A52] mb-6">
          Our <span className="gradient-text">Process</span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {processSteps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
          >
            {step.icon}
            <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          The Best Process Experience
        </h3>
        <p className="text-gray-600 mb-6">
          We follow a structured and safety-first scaffolding workflow to
          deliver precision, reliability, and maximum efficiency across all
          project types—residential, commercial, and industrial.
        </p>
        <p className="text-gray-600 mb-6">
          From site inspection and planning to scaffolding erection and safe
          dismantling, our experienced team blends traditional expertise with
          modern solutions. The result? Secure scaffolding systems that protect
          your workforce and keep your project on schedule—without compromise.
        </p>

        <a
          href={`https://wa.me/+919705899998`}
          target="_blank"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default OurProcess;
