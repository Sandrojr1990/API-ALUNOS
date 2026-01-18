import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerConfig } from "./config/swagger";

import authRoutes from "./routes/auth.routes";
import alunoRoutes from "./routes/aluno.routes";

const app = express();
app.use(express.json());

const swaggerSpec = swaggerJsdoc(swaggerConfig);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api-docs.json", (req, res) => res.json(swaggerSpec));

app.use("/auth", authRoutes);
app.use("/alunos", alunoRoutes);

export default app;
