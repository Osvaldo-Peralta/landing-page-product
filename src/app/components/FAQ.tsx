"use client"; // Necesario para manejar el estado en un componente de Next.js | Indica que el archivo se ejecutará en el cliente
import React, { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Controla que pregunta está activa
  const taggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Como puedo empezar a usar este producto?",
      answer:
        "Es muy fácil. Solo regístrate, sigue el proceso de configuración inicial y estarás listo para comenzar.",
    },
    {
      question: "¿Es seguro para mis datos?",
      answer:
        "Absolutamente. Utilizamos tecnología de cifrado avanzada para garantizar la seguridad de tus datos.",
    },
    {
      question: "¿Es compatible con todos los dispositivos?",
      answer:
        "Sí, nuestro producto está diseñado para ser completamente responsivo y compatible con cualquier dispositivo moderno.",
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div
              className="border border-gray-200 rounded-lg p-4 shadow-md"
              key={index}
            >
              <button
                className=" flex justify-between items-center w-full text-left"
                onClick={() => taggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <span className={`transform transition-transform duration-200`}>
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
          ;
        </div>
      </div>
    </section>
  );
}
