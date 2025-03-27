import React from "react";
import Person1 from "../../public/jabed_ali.jpg"; // Replace with actual path
import Person2 from "../../public/md_israr.jpg"; // Replace with actual path

export default function Team() {
  const teamMembers = [
    {
      name: "Jabed Ali",
      role: "CEO",
      image: Person1,
    },
    {
      name: "Md. Israr",
      role: "Admin Executive",
      image: Person2,
    },
  ];

  return (
    <section
      id="team"
      className="min-h-screen bg-[#00509d] flex flex-col justify-center items-center text-white p-6 pt-16 md:p-16"
    >
      <h2 className="text-5xl font-extrabold mb-16 text-center">
        Meet Our Team
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#003f88] p-8 rounded-2xl shadow-lg flex flex-col items-center max-w-sm"
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
