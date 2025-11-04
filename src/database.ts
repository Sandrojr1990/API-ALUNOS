import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });


console.log("Banco:", process.env.DB_NAME);
console.log("Usuário:", process.env.DB_USER);
console.log("Senha:", process.env.DB_PASS);


// Corrige __dirname para ambientes ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: String(process.env.DB_PASS),
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [join(__dirname, "/entity/*.js")],
  logging: true,
});