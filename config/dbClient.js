import 'dotenv/config';
import { MongoClient } from "mongodb";

class dbClient {
    constructor() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Cluster1`;
        this.client = new MongoClient(queryString);
        this.conectarBD();
    }

    async conectarBD() {
        try {
            await this.client.connect();
            this.db = this.client.db("libreria");
            console.log("Conectado al servidor de base de datos");
        } catch (e) {
            console.error("Error al conectar a la base de datos:", e);
        }
    }

    getDB() {
        if (this.db) {
            return this.db;
        }
        throw new Error("Base de datos no conectada");
    }
}

export default new dbClient(); 