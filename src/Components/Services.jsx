import React from "react";
import {
  FaFireExtinguisher,
  FaBell,
  FaBuilding,
  FaSnowflake,
  FaWater,
  FaAirFreshener,
  FaTint,
  FaToolbox,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    icon: <FaFireExtinguisher size={40} />,
    title: "Fire Fighting",
    desc: "Advanced fire safety solutions.",
  },
  {
    icon: <FaBell size={40} />,
    title: "Fire Alarm",
    desc: "Reliable fire alarm systems.",
  },
  {
    icon: <FaBuilding size={40} />,
    title: "Fire Separation",
    desc: "Ensuring safe building separation.",
  },
  {
    icon: <FaSnowflake size={40} />,
    title: "Cooling Tower",
    desc: "Efficient cooling systems.",
  },
  {
    icon: <FaWater size={40} />,
    title: "Chilling Plant",
    desc: "High-performance chilling plants.",
  },
  {
    icon: <FaAirFreshener size={40} />,
    title: "Central A.C.",
    desc: "Central air conditioning systems.",
  },
  {
    icon: <FaTint size={40} />,
    title: "Soft Water Treatment",
    desc: "Advanced water treatment solutions.",
  },
  {
    icon: <FaToolbox size={40} />,
    title: "Raw Water",
    desc: "Supply and installation services.",
  },
  {
    icon: <FaCogs size={40} />,
    title: "Air Compressor Line",
    desc: "Robust air compression lines.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen bg-[#003f88] p-8 pt-16 flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl text-white font-extrabold mb-8 text-center w-full">
        Our Services
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#00509d] flex flex-col items-center hover:scale-110 p-6 rounded-xl cursor-pointer text-center shadow-lg hover:shadow-3xl transition-all duration-300"
          >
            <div className="text-[#fdc500] mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-white">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
