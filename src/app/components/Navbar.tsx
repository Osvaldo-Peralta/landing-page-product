// Importamos los módulos necesarios
"use client"; // Necesario para manejar el estado en un componente de Next.js | Indica que el archivo se ejecutará en el cliente
import React from "react";

// Componente funcional Navbar
const Navbar = () => {
  // Cambiamos la función por una constante
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      {/* Contenedor principal para alinear los elementos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo o nombre de la marca */}
          <div className="text-2xl font-bold">
            <a href="#">Producto Digital</a>
          </div>

          {/* Links de navegación */}
          <div className="hidden md:flex space-x-4">
            {/* Cambia los # por los IDs de las secciones */}
            <a href="/features" className="hover:text-gray-200">
              Características
            </a>
            <a href="/pricing" className="hover:text-gray-200">
              Precio
            </a>
            <a href="/contact" className="hover:text-gray-200">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
