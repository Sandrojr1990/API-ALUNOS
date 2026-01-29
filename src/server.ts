import { AppDataSource } from './database.js';
import app from './app.js';

AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor rodando em http://localhost:3000');
            console.log('Swagger docs disponíveis em http://localhost:3000/api-docs');
        });
    })
    .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));