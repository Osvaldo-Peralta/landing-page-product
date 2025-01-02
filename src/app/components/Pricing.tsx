import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Basico",
      price: "$10/mes",
      features: [
        "Acceso limitado a la plataforma",
        "Soporte por correo",
        "5 proyectos simultáneos",
      ],
      buttonText: "Comenzar",
      popular: false,
    },
    {
      name: "Pro",
      price: "$25/mes",
      features: [
        "Todas las funcionalidades básicas",
        "Soporte prioritario",
        "20 proyectos simultáneos",
        "Integraciones avanzadas",
      ],
      buttonText: "Elige Pro",
      popular: true,
    },
    {
      name: "Premium",
      price: "$50/mes",
      features: [
        "Funcionalidades completas",
        "Soporte prioritario 24/7",
        "Proyectos ilimitados",
        "Acceso a herramientas exclusivas",
      ],
      buttonText: "Únete a Premium",
      popular: false,
    },
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Planes de Precios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md transition-shadow ${
                plan.popular
                  ? "bg-blue-100 border-2 border-blue-500"
                  : "bg-white"
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-xs font-bold uppercase px-2 py-1 rounded-full inline-block mb-4">
                  Más Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-gray-800 mb-4">
                {plan.price}
              </p>
              <ul className="mb-6 text-gray-600">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    {/* Icono de verificación */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-green-500 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
