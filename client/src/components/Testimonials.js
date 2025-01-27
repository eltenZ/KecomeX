// src/components/Testimonials.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
// Testimonial Card Component
const TestimonialCard = ({ name, role, testimonial }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
      <p className="text-lg text-gray-700 mb-4">{testimonial}</p>
      <p className="font-semibold text-purple-600">{name}</p>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

// Testimonials Component with Swiper carousel
const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Emily Taylor",
      role: "Entrepreneur",
      testimonial:
        "KecomeX has been an invaluable resource for networking and professional growth. The events are always top-notch!"
    },
    {
      name: "David Lee",
      role: "Business Consultant",
      testimonial:
        "I’ve made so many valuable connections through KecomeX. Highly recommend to anyone in business!"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Specialist",
      testimonial:
        "The KecomeX community is so welcoming, and the events have opened up new opportunities for my business!"
    }
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      loop
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="testimonial-carousel"
    >
      {testimonialsData.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard
            name={testimonial.name}
            role={testimonial.role}
            testimonial={testimonial.testimonial}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
