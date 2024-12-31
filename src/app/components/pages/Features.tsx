import React from "react";

// Creamos un componente funcional llamado Features
const Features = () => {
  // Datos de las características del producto
  const features = [
    {
      title: "Rápido y Eficiente",
      description:
        "Optimiza tus tareas diarias con un producto diseñado para ofrecer rendimiento y velocidad.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 3.75l-4.5 16.5m6-16.5l-4.5 16.5m-6-16.5L7.5 20.25m-3-16.5l4.5 16.5"
          />
        </svg>
      ),
    },
    {
      title: "Fácil de Usar",
      description:
        "Interfaz intuitiva que permite a cualquier usuario sacar el máximo provecho desde el primer día.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M9 12l-2-2m12-1.5v10.5A2.25 2.25 0 0116.75 21h-9.5A2.25 2.25 0 015 18.75V8.25A2.25 2.25 0 017.25 6h9.5A2.25 2.25 0 0119 8.25V10.5z"
          />
        </svg>
      ),
    },
    {
      title: "Soporte Confiable",
      description:
        "Nuestro equipo está disponible 24/7 para garantizar que siempre tengas respaldo.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h6.75M6.75 6h.75m0 0a.75.75 0 01.75-.75h9a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75m0 0H6.75"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Características Destacadas
        </h2>
        {/* Contenedor de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Ícono de la característica */}
              <div className="flex justify-center mb-4">{feature.icon}</div>
              {/* Título de la característica */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              {/* Descripción de la característica */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
