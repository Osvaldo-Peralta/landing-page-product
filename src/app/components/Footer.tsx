import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Texto Principal del Footer*/}
        <p className="text-sm md:text-base  ">
          © {new Date().getFullYear()} Osvaldo Peralta | Tailwind Starter. All
          rights reserved.
        </p>
        {/* Links de Navegacion*/}
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-teal-400 transition">
            Politica de Privacidad
          </a>
          <a href="#" className="hover:text-teal-400 transition">
            Terminos y Condiciones
          </a>
          <a href="#" className="hover:text-teal-400 transition">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
