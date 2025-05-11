import React, { useState, useEffect, useRef } from "react";
// import AboutImage from "../../public/aboutus.webp"; // Replace with actual path

export default function AboutUs() {
  const [servicesCount, setServicesCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const animateCounts = () => {
    if (hasAnimated) return;

    let serviceInterval = setInterval(() => {
      setServicesCount((prev) => (prev < 8 ? prev + 1 : 8));
    }, 100);

    let customerInterval = setInterval(() => {
      setCustomersCount((prev) => (prev < 100 ? prev + 2 : 100));
    }, 50);

    setTimeout(() => {
      clearInterval(serviceInterval);
      clearInterval(customerInterval);
      setHasAnimated(true);
    }, 5000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateCounts();
        }
      },
      {
        threshold: 0.5, // Trigger when at least 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      id="aboutus"
      ref={sectionRef}
      className="min-h-screen bg-[#003f88] flex flex-col justify-center items-center text-white p-6 md:p-16"
    >
      {/* Heading centered at the top for all screen sizes */}
      <h2 className="text-5xl font-extrabold mb-8 text-center md:text-start w-full">
        About Us
      </h2>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center">
        <div className="mb-6 flex justify-center items-center">
          <img
            src="/aboutus.webp"
            alt="About J.D.M."
            className="w-[50%] max-w-md rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-md mb-6 max-w-2xl">
            M/S. J.D.M. Engineering Works is dedicated to providing top-notch
            industrial equipment, specializing in pipeline and fitting
            solutions. Our commitment extends to industrial safety and
            firefighting equipment, ensuring the highest safety standards across
            industries. With a client-first approach, we focus on delivering
            reliable products backed by exceptional after-sales support.
          </p>
          <div className="flex space-x-4 mt-4">
            <div className="bg-[#00509d] p-8 rounded-xl text-center shadow-lg">
              <h3 className="text-4xl font-bold mb-2">{servicesCount}+</h3>
              <p className="text-lg">Total Services</p>
            </div>
            <div className="bg-[#00509d] p-8 rounded-xl text-center shadow-lg">
              <h3 className="text-4xl font-bold mb-2">{customersCount}+</h3>
              <p className="text-lg">Total Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Medium and Larger Screens View */}
      <div className="hidden md:flex flex-col w-full">
        <div className="flex items-center justify-between space-x-8">
          <div className="w-1/2 flex flex-col justify-center">
            <p className="text-2xl mb-6 max-w-2xl">
              M/S. J.D.M. Engineering Works is dedicated to providing top-notch
              industrial equipment, specializing in pipeline and fitting
              solutions. Our commitment extends to industrial safety and
              firefighting equipment, ensuring the highest safety standards
              across industries. With a client-first approach, we focus on
              delivering reliable products backed by exceptional after-sales
              support.
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="bg-[#00509d] p-8 rounded-xl text-center shadow-lg">
                <h3 className="text-4xl font-bold mb-2">{servicesCount}+</h3>
                <p className="text-lg">Total Services</p>
              </div>
              <div className="bg-[#00509d] p-8 rounded-xl text-center shadow-lg">
                <h3 className="text-4xl font-bold mb-2">{customersCount}+</h3>
                <p className="text-lg">Total Customers</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <img
              src="/aboutus.webp"
              alt="About J.D.M."
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
