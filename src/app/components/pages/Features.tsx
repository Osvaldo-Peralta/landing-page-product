// src/components/Features.tsx

import React from "react";
import { FaRocket, FaLock, FaMobileAlt } from "react-icons/fa"; // Íconos representativos

const Features = () => {
  const features = [
    {
      icon: <FaRocket size={40} className="text-blue-500" />, // Icono personalizado
      title: "Velocidad y Rendimiento",
      description:
        "Nuestro producto está diseñado para ofrecer el máximo rendimiento sin comprometer la velocidad.",
    },
    {
      icon: <FaLock size={40} className="text-green-500" />, // Icono personalizado
      title: "Seguridad Avanzada",
      description:
        "Priorizamos la seguridad de tus datos con las mejores tecnologías de cifrado.",
    },
    {
      icon: <FaMobileAlt size={40} className="text-purple-500" />, // Icono personalizado
      title: "Compatibilidad Móvil",
      description:
        "Disfruta de una experiencia optimizada en todos los dispositivos móviles.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Características Destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
