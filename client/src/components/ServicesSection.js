import React from 'react';
import Accordion from './Accordion';  // Make sure the Accordion component is imported

const ServiceSection = () => {
  // Example Data for services
const servicesData = [
  {
    category: "Business Strategy",
    services: [
      {
        title: "Consulting",
        description: "Expert business consulting services to drive your business."
      },
      {
        title: "Market Research",
        description: "In-depth analysis of market trends to guide your decisions."
      }
    ]
  },
  {
    category: "Marketing",
    services: [
      {
        title: "SEO",
        description: "Improve your online presence with tailored SEO strategies."
      },
      {
        title: "Social Media",
        description: "Grow your brand on popular social media platforms."
      }
    ]
  },
  {
    category: "Networking",  // New Category for Networking Services
    services: [
      {
        title: "Network Setup",
        description: "Set up secure and efficient networks for businesses of all sizes."
      },
      {
        title: "Network Troubleshooting",
        description: "Diagnose and fix network issues quickly to minimize downtime."
      },
      {
        title: "Cybersecurity",
        description: "Protect your business from cyber threats with our advanced security solutions."
      }
    ]
  }
];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">Our Services</h2>

      {servicesData.map((category, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-3xl font-semibold text-purple-600 mb-6">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.services.map((service, serviceIndex) => (
              <Accordion
                key={serviceIndex}
                title={service.title}
                content={service.description}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceSection;
