import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Por favor, configura tu URI de MongoDB en el archivo .env");
}

const options = {};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient>;

// Crea una instancia única de MongoClient
if (!client) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
} else {
  clientPromise = Promise.resolve(client);
}

export default clientPromise;
