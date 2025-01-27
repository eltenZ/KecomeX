import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules"; // Import Autoplay module

// KeyOfferingCard Component
const KeyOfferingCard = ({ title, subtitle, descriptions }) => {
  // Convert descriptions to a comma-separated string
  const descriptionText = descriptions.join(", ");

  return (
   <div className="w-full sm:w-400 p-4 flex flex-col justify-between">
  {/* Title at the top */}
  <h1 className="text-6xl font-cyberpunk text-black font-bold mb-4 break-words max-w-full">
    {title}
  </h1>

  {/* Subtitle and sliding descriptions grouped at the bottom */}
  <div className="bottom">
    <p className="text-lg sm:text-xl text-gray-600 font-semibold mb-2">{subtitle}</p>
    {/* Sliding descriptions with cyberpunk font */}
    <div className="relative overflow-hidden">
      <div
        className="inline-block whitespace-nowrap animate-slide-left text-sm sm:text-base font-cyberpunk text-gray-500"
        style={{
          animation: "slideLeft 8s linear infinite",
        }}
      >
        {descriptionText}
      </div>
    </div>
  </div>

  {/* Styling for animation */}
  <style jsx>{`
    @keyframes slideLeft {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .font-cyberpunk {
      font-family: "VT323", monospace; /* Example cyberpunk font */
    }
  `}</style>
</div>
  );
};

// KeyOfferings Component with Swiper carousel
const KeyOfferings = () => {
const keyOfferingsData = [
  {
    title: "System Analysis & Design",
    subtitle: "DevOps",
    descriptions: [
      "Frontend",
      "UI/UX",
      "Backend",
      "Database",
      "Deployment",
      "Operations",
    ],
  },
  {
    title: "Cyber Security",
    subtitle: "Sec",
    descriptions: [
      "HTTPS",
      "SSL",
      "Encryption",
      "Penetration Testing",
      "Rate Limiting",
      "Secrecy",
      "Authentication",
    ],
  },
  {
    title: "Graphic Design",
    subtitle: "Audio/Visual",
    descriptions: [
      "Canva Pro",
      "Brand Kit",
      "Marketing Collateral",
      "Ads",
    ],
  },
  {
    title: "Data Management",
    subtitle: "Vector Analytics",
    descriptions: [
      "Data Entry",
      "Analysis",
      "Research",
      "Visualization",
      "Mining",
    ],
  },
  {
    title: "Photos & Videos",
    subtitle: "Visual Art",
    descriptions: [
      "Product Photography",
      "Event Photography",
      "Portrait & Theme Photography",
      "Documentation",
      "Filming",
      "Cinematic",
      "Visuals",
    ],
  },
  {
    title: "IT Training & Education",
    subtitle: "Training",
    descriptions: [
      "Facilitations",
      "Tutorials",
      "Consultations",
      "Conversion Support",
    ],
  },
];

  return (
<Swiper
  spaceBetween={30}
  slidesPerView={1}
  loop
  className="key-offerings-carousel"
  touchStartPreventDefault={false}
  touchMoveStopPropagation={false}
  autoplay={{
    delay: 5000, // 5 seconds delay
    disableOnInteraction: false, // Continue autoplay after interaction
  }}
  modules={[Autoplay]} // Add Autoplay module
>
  {keyOfferingsData.map((offering, index) => (
    <SwiperSlide key={index} className="px-4 sm:px-6 lg:px-8">
      <KeyOfferingCard
        title={offering.title}
        subtitle={offering.subtitle}
        descriptions={offering.descriptions}
      />
    </SwiperSlide>
  ))}
</Swiper>
  );
};

export default KeyOfferings;
