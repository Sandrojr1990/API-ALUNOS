import express from 'express';
import { AppDataSource } from './database';
import alunoRoutes from './routes/alunoRoutes';

const app = express();
app.use(express.json());
app.use('/alunos', alunoRoutes);

AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => console.log( 'Servidor rodando em http://localhost:3000'));

    })

    .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));