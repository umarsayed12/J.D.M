import React from "react";
// import Person1 from "../../public/jabed_ali.jpg"; // Replace with actual path
// import Person2 from "../../public/md_israr.jpg"; // Replace with actual path

export default function Team() {
  const teamMembers = [
    {
      name: "Jabed Ali",
      role: "CEO",
      image: "/jabed_ali.jpg",
    },
    {
      name: "Md. Israr",
      role: "Admin Executive",
      image: "/md_israr.jpg",
    },
  ];

  return (
    <section
      id="team"
      className="min-h-screen bg-[#00509d] flex flex-col justify-center items-center text-white p-6 md:p-16 pt-[20%]"
    >
      <h2 className="text-5xl font-extrabold mb-16 text-center">
        Meet Our Team
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#003f88] p-8 rounded-2xl hover:shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg flex flex-col items-center max-w-sm"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-52 h-52 md:w-72 md:h-72 rounded-full mb-4 object-cover shadow-md"
            />
            <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
            <p className="text-lg text-[#fdc500]">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
