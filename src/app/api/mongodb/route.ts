import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("practiceDB"); // Cambia por el nombre real de tu base de datos
    const collections = await db.listCollections().toArray(); // Listamos las colecciones disponibles

    return NextResponse.json({
      message: "Conexión exitosa a MongoDB",
      collections,
    });
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    return NextResponse.json(
      { error: "Error al conectar a MongoDB" },
      { status: 500 }
    );
  }
}
