// Navbar.js
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-[#00296b] text-white p-4 flex justify-between items-center shadow-lg z-50">
      <div className="text-2xl font-bold">J.D.M.</div>
      <div className="hidden md:flex space-x-6">
        <button
          onClick={() => handleScroll("homepage")}
          className="hover:border-b-2 border-[#fdc500] pb-1"
        >
          Home
        </button>
        <button
          onClick={() => handleScroll("aboutus")}
          className="hover:border-b-2 border-[#fdc500] pb-1"
        >
          About Us
        </button>
        <button
          onClick={() => handleScroll("team")}
          className="hover:border-b-2 border-[#fdc500] pb-1"
        >
          Our Team
        </button>
        <button
          onClick={() => handleScroll("services")}
          className="hover:border-b-2 border-[#fdc500] pb-1"
        >
          Services
        </button>
        <button
          onClick={() => handleScroll("customers")}
          className="hover:border-b-2 border-[#fdc500] pb-1"
        >
          Our Customers
        </button>
        {/* <button
          onClick={() => handleScroll("contactus")}
          className="hover:border-b-2 border-[#fdc500] pb-1"
        >
          Contact Us
        </button> */}
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        <div
          className={`w-8 h-1 bg-white my-1 transition-transform ${
            isOpen ? "rotate-45 translate-y-3" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white my-1 ${isOpen ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-8 h-1 bg-white my-1 transition-transform ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        ></div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#003f88] text-white flex flex-col items-center space-y-4 py-4">
          <button
            onClick={() => handleScroll("homepage")}
            className="hover:text-[#fdc500]"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("aboutus")}
            className="hover:text-[#fdc500]"
          >
            About Us
          </button>
          <button
            onClick={() => handleScroll("team")}
            className="hover:border-b-2 border-[#fdc500] pb-1"
          >
            Our Team
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-[#fdc500]"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("customers")}
            className="hover:text-[#fdc500]"
          >
            Our Customers
          </button>
          <button
            onClick={() => handleScroll("contactus")}
            className="hover:text-[#fdc500]"
          >
            Contact Us
          </button>
        </div>
      )}

      <button
        onClick={() => handleScroll("contactus")}
        className="bg-[#fdc500] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#ffd500] hidden md:block"
      >
        Get a Callback!
      </button>
    </nav>
  );
}
