import React from "react";

const companies = [
  {
    id: 1,
    name: "NPCL",
    description: "Power Distribution Company",
    image: "/NPCL.jpg",
  },
  {
    id: 2,
    name: "Sunlac Paints Ltd",
    description: "Industrial Paint Solutions",
    image: "/SUNLAC.jpeg",
  },
  {
    id: 3,
    name: "United College",
    description: "Educational Institution",
    image: "/UNITED.jpg",
  },
  {
    id: 4,
    name: "HIMT College",
    description: "Higher Education Institution",
    image: "/HIMT.jpeg",
  },
  {
    id: 5,
    name: "S.K.S. International University",
    description: "Global Education Hub",
    image: "/SKS.avif",
  },
  {
    id: 6,
    name: "Gaursons India Ltd",
    description: "Real Estate Developer",
    image: "/GAURS.jpg",
  },
  {
    id: 7,
    name: "D.S. Group Ltd",
    description: "Diversified Business Group",
    image: "/DS.avif",
  },
  {
    id: 8,
    name: "Colortek Pvt Ltd",
    description: "Paints and Coatings Manufacturer",
    image: "/COLORTEK.avif",
  },
  {
    id: 9,
    name: "U.P.R.R.N (Badaun Women Hospital)",
    description: "Healthcare Infrastructure",
    image: "/UPRRN.avif",
  },
  {
    id: 10,
    name: "Delhi Police Society",
    description: "Residential Society",
    image: "/DPS.avif",
  },
  {
    id: 11,
    name: "Rail Vihar, Alpha-1",
    description: "Residential Society",
    image: "/RAIL.avif",
  },
  {
    id: 12,
    name: "OM Tower, Alpha-1",
    description: "Commercial Complex",
    image: "/om_tower.png",
  },
];

export default function Customers() {
  return (
    <section id="customers" className="bg-[#00509d] p-8 min-h-screen">
      <h2 className="text-5xl font-extrabold text-center mb-8 text-[#fff] pt-16 p-8">
        Our Valuable Customers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-[#003f88] p-8 hover:scale-110 rounded-2xl shadow-lg flex flex-col cursor-pointer items-center justify-center hover:shadow-3xl transition-all duration-300"
          >
            <img
              src={company.image}
              alt={company.name}
              className="w-50 h-44 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-[#fff] mb-2">
              {company.name}
            </h3>
            <p className="text-[#fdc500] text-center">{company.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
