import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerConfig } from "./config/swagger.js";

import authRoutes from "./routes/auth.routes.js";
import alunoRoutes from "./routes/aluno.routes.js";

export const app = express();

app.use(express.json());

let swaggerSpec;
try {
  swaggerSpec = swaggerJsdoc(swaggerConfig);
  console.log("✅ Swagger spec gerado com sucesso");
} catch (err) {
  console.error("❌ Erro ao gerar Swagger spec:", err);
  swaggerSpec = { info: { title: "API", version: "1.0.0" }, paths: {} };
}

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api-docs.json", (req, res) => res.json(swaggerSpec));

app.use("/auth", authRoutes);
app.use("/alunos", alunoRoutes);

export default app;
