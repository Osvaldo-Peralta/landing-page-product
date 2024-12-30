// src/components/Testimonials.tsx

import Image from "next/image";
import React from "react";
import profile from "../../images/blank-profile-picture.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana López",
      feedback:
        "Este producto ha cambiado la forma en que manejo mi trabajo diario. Totalmente recomendado.",
      image: profile,
      rating: 5,
    },
    {
      name: "Carlos Méndez",
      feedback:
        "Increíble experiencia. La interfaz es muy intuitiva y el soporte al cliente es excelente.",
      image: profile,
      rating: 4,
    },
    {
      name: "Lucía Hernández",
      feedback:
        "Nunca imaginé que sería tan fácil integrar este producto en mis actividades. ¡Gracias!",
      image: profile,
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`}
                height={64}
                width={64}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mt-2"> {testimonial.feedback} </p>
              {/* Puntuación con estrellas */} 
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={starIndex < testimonial.rating ? "gold" : "gray"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2.25l3.165 6.423 7.1.518-5.214 4.926 1.524 6.833-6.575-3.562-6.575 3.562 1.524-6.833-5.214-4.926 7.1-.518L12 2.25z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
