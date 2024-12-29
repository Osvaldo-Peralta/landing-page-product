// Este es el componente HeroSection
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenido a Nuestro Producto
        </h1>
        {/* Subtítulo */}
        <p className="text-lg md:text-xl mb-8">
          Descubre cómo este producto puede transformar tu vida.
        </p>
        {/* Botón de llamada a la acción */}
        <div>
          <a
            href="#"
            className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition"
          >
            ¡Empieza Ahora!
          </a>
        </div>
      </div>
    </section>
  );
}
