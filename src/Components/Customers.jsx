import React from "react";

const companies = [
  {
    id: 1,
    name: "NPCL",
    description: "Power Distribution Company",
    image:
      "https://jaihindjanab.com/wp-content/uploads/2023/03/electricity.jpg",
  },
  {
    id: 2,
    name: "Sunlac Paints Ltd",
    description: "Industrial Paint Solutions",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQGesmVN54vCCQ/company-logo_200_200/company-logo_200_200/0/1707895781901?e=2147483647&v=beta&t=IYBH6rnJxUBTKq3auTVHBiUfjmIhkbnYJ0i9QUSiTEI",
  },
  {
    id: 3,
    name: "United College",
    description: "Educational Institution",
    image: "https://www.united.ac.in/home/images/uni_banner_4.jpg",
  },
  {
    id: 4,
    name: "HIMT College",
    description: "Higher Education Institution",
    image:
      "https://images.shiksha.com/mediadata/images/1707131797phpXLKR9b.jpeg",
  },
  {
    id: 5,
    name: "S.K.S. International University",
    description: "Global Education Hub",
    image:
      "https://content.jdmagicbox.com/v2/comp/mathura/z4/9999px565.x565.240405160117.t2z4/catalogue/s-k-s-international-university-mathura-universities-wme5yg4wox.jpg",
  },
  {
    id: 6,
    name: "Gaursons India Ltd",
    description: "Real Estate Developer",
    image:
      "https://cdn.velocityhousing.in/builder/large_1667294356gaursons-builder.jpg",
  },
  {
    id: 7,
    name: "D.S. Group Ltd",
    description: "Diversified Business Group",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/DS_GROUP_1200x768.jpeg?size=690:388",
  },
  {
    id: 8,
    name: "Colortek Pvt Ltd",
    description: "Paints and Coatings Manufacturer",
    image:
      "https://images.jdmagicbox.com/v2/comp/mumbai/g9/022pxx22.xx22.180529171544.c8g9/catalogue/colortek-india-ltd-sion-mumbai-puf-panel-manufacturers-mkl9angj40.jpg",
  },
  {
    id: 9,
    name: "U.P.R.R.N (Badaun Women Hospital)",
    description: "Healthcare Infrastructure",
    image:
      "https://staticimg.amarujala.com/assets/images/4cplus/2025/03/09/jal-mahal-asapatal-savatha_04c0669170cb97d1fe46244cb7583cd1.jpeg",
  },
  {
    id: 10,
    name: "Delhi Police Society",
    description: "Residential Society",
    image:
      "https://content.jdmagicbox.com/comp/greater_noida/a6/011pxx11.xx11.220316151748.i6a6/catalogue/delhi-police-society-knowledge-park-1-greater-noida-greater-noida-property-developers-tirljndgrx.jpg",
  },
  {
    id: 11,
    name: "Rail Vihar, Alpha-1",
    description: "Residential Society",
    image:
      "https://www.livehindustan.com/lh-img/uploadimage/library/2022/04/01/16_9/16_9_7/alpha_1648784070.jpg",
  },
  {
    id: 12,
    name: "OM Tower, Alpha-1",
    description: "Commercial Complex",
    image: "public/om_tower.png",
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
            className="bg-[#003f88] p-8 rounded-2xl shadow-lg flex flex-col cursor-pointer items-center justify-center hover:shadow-2xl transition-shadow duration-300"
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
