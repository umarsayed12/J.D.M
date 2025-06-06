import React from "react";
// import HeroImage from "../../public/office_image.jpg"; // Replace with actual path

export default function Homepage() {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="homepage"
      className="min-h-screen bg-[#00509d] flex flex-col md:flex-row justify-center items-center text-white p-16 pt-[30%] sm:pt-[10%]"
    >
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:items-start md:text-start">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Welcome to
          <br />
          <span className="text-[#fdc500]">M/S. J.D.M. Engineering Works</span>
        </h1>
        <div className="md:w-1/2 md:hidden justify-end items-center mt-6 mb-6 md:mb-0">
          <img
            src="/office_image.jpg"
            alt="Engineering Works"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Retail & Wholesaler: Installer, Supplier & Contractor of Industrial
          Equipment with all kind of Pipe Line & Fittings, Industrial Safety &
          Fire Fighting Equipments.
        </p>
        <button
          onClick={() => handleScroll("aboutus")}
          className="bg-[#fdc500] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#ffd500] hidden md:block"
        >
          More About Us
        </button>
        <button
          onClick={() => handleScroll("contactus")}
          className="bg-[#fdc500] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#ffd500] md:hidden"
        >
          Get a Callback
        </button>
      </div>

      <div className="md:w-1/2 hidden md:flex justify-end items-center mt-6 mb-6 md:mb-0">
        <img
          src="/office_image.jpg"
          alt="Engineering Works"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
