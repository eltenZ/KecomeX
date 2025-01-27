import React, { useState } from "react";

const FeaturedCard = () => {
  const projectData = [
    {
      title: "Openstays Webapp Development",
      date: "November 2024",
      description:
        "Developed a highly interactive web application for Openstays, a platform for booking vacation homes.",
      benefits: [
        "Custom UI/UX design",
        "Integration with booking platforms",
        "Responsive across devices",
      ],
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Watuma & Co website development",
      date: "January 2025",
      description:
        "Building a scalable webapp for Watuma & Co, catering to the growing need for digital infrastructure among SMEs.",
      benefits: [
        "Tailored digital solutions for SMEs",
        "Real-time analytics integration",
        "Cloud hosting for scalability",
      ],
      technologies: ["React", "Express.js", "PostgreSQL"],
    },
    {
      title: "Brand Kit and Marketing Collateral for KecomeX Business Club",
      date: "December 2024",
      description:
        "Designed a comprehensive brand kit and marketing materials for KecomeX, enhancing their visual identity.",
      benefits: [
        "Complete brand identity",
        "Marketing collateral for both digital and print",
        "Consistent visual design across platforms",
      ],
      technologies: ["Canva", "Adobe Photoshop", "Adobe Illustrator"],
    },
  ];

  return (
    <div className="flex flex-col space-y-8">
      {projectData.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
};

const Card = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer`}
      onClick={toggleExpand}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-black font-cyberpunk">{project.title}</h3>

      {/* Underline */}
      <div className="h-[2px] bg-gray-400 my-3"></div>

      {/* Date and Short Description */}
      <p className="text-gray-600 mb-3">{project.date}</p>
      <p className="text-gray-600">{project.description}</p>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="mt-4">
          {/* Benefits */}
          <h4 className="text-lg font-semibold text-black">Key Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            {project.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          {/* Technologies Used */}
          <h4 className="text-lg font-semibold text-black">Technologies Used:</h4>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          {/* Details Button */}
          <button
            className="mt-4 bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              alert("More details coming soon!");
            }}
          >
            Learn More
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedCard;

<style jsx>{`
  .font-cyberpunk {
    font-family: "VT323", monospace; /* Cyberpunk Font */
  }
`}</style>
