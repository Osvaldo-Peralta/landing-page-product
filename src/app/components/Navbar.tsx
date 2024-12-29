// Importamos los módulos necesarios
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
            <a href="#">Producto</a>
          </div>

          {/* Links de navegación */}
          <div className="hidden md:flex space-x-4">
            {/* Cambia los # por los IDs de las secciones */}
            <a href="#features" className="hover:text-gray-200">
              Características
            </a>
            <a href="#about" className="hover:text-gray-200">
              Sobre Nosotros
            </a>
            <a href="#contact" className="hover:text-gray-200">
              Contacto
            </a>
          </div>

          {/* Botón de acción principal */}
          <div>
            <a
              href="#cta"
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-200"
            >
              Comienza Ahora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
