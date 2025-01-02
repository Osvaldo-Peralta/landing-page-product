import React from "react";

const Benefits = () => {
  const benefits = [
    {
      title: "Acceso Inmediato",
      description:
        "Obtén acceso instantáneo a tu producto digital desde cualquier lugar.",
      icon: "🌐",
    },
    {
      title: "Soporte 24/7",
      description: "Estamos aquí para ayudarte en cualquier momento del día.",
      icon: "⏰",
    },
    {
      title: "Seguridad Garantizada",
      description:
        "Tus datos están protegidos con tecnología de última generación.",
      icon: "🔒",
    },
    {
      title: "Actualizaciones Frecuentes",
      description: "Disfruta de mejoras continuas y nuevas funcionalidades.",
      icon: "🚀",
    },
  ];
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Beneficios del Producto
        </h2>
        <p className="text-gray-600 mb-12">
          Conoce las ventajas de probar nuestro producto digital.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-lg transition shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
