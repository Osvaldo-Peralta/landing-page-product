import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Aqui el contenido de otras secciones */}
        <div className="text-red-500">¡Tailwind CSS está funcionando!</div>
      </main>
    </div>
  );
}
