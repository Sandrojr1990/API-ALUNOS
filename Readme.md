API de Alunos com Banco de Dados, JWT e Swagger

API desenvolvida com Node.js, TypeScript, Express, TypeORM e PostgreSQL, com autenticação JWT e documentação interativa via Swagger.

A aplicação permite cadastrar, listar, atualizar e excluir alunos, garantindo que apenas usuários autenticados possam acessar as rotas protegidas.

Tecnologias Utilizadas

Node.js

TypeScript

Express

TypeORM

PostgreSQL

Dotenv

JSON Web Token (JWT)

Bcrypt

Swagger (swagger-ui-express, swagger-jsdoc)

Como Configurar o Projeto
1. Clonar o repositório

git clone https://github.com/Sandrojr1990/API-ALUNOS.git

2. Acessar a pasta do projeto

cd API-ALUNOS

3. Instalar as dependências

npm install

Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=1234
DATABASE_NAME=api_escola
JWT_SECRET=chave_secreta_forte_e_complexa

Nunca versionar o arquivo .env.

Como Executar o Projeto
Ambiente de desenvolvimento

npm run dev

Build e execução (produção)

npm run build
npm start

Servidor disponível em:

http://localhost:3000

Documentação Swagger

A API possui documentação interativa utilizando Swagger UI.

Acesse no navegador:

http://localhost:3000/api-docs

No Swagger é possível:

Visualizar todos os endpoints

Testar requisições diretamente no navegador

Autenticar utilizando token JWT

Autenticação (JWT)
Rotas Públicas

POST /auth/register – Cadastro de usuário
POST /auth/login – Login e geração do token JWT

Fluxo de Autenticação

Criar usuário em /auth/register

Fazer login em /auth/login

Copiar o token JWT retornado

Acessar /api-docs

Clicar em Authorize

Informar:

Bearer SEU_TOKEN_AQUI

Utilizar os endpoints protegidos

Rotas Protegidas – Alunos

Todas as rotas abaixo exigem autenticação JWT.

GET /alunos – Lista todos os alunos
GET /alunos/:id – Retorna um aluno específico
POST /alunos – Cadastra um novo aluno
PUT /alunos/:id – Atualiza um aluno
DELETE /alunos/:id – Remove um aluno

Banco de Dados

Banco de dados utilizado: PostgreSQL.

Tabela: aluno

id – SERIAL – Identificador do aluno
nome – VARCHAR – Nome do aluno
email – VARCHAR – Email do aluno
data_nascimento – TIMESTAMP – Data de nascimento

Tabela: usuario

id – SERIAL – Identificador do usuário
nome – VARCHAR – Nome do usuário
email – VARCHAR – Email único
senha – VARCHAR – Senha criptografada
createdAt – TIMESTAMP – Data de criação
updatedAt – TIMESTAMP – Data de atualização

Testes da API

A API pode ser testada utilizando:

Swagger UI

Thunder Client

Insomnia

Postman

Exemplo – Cadastro de Aluno

POST /alunos

nome: Sandro Roberto da Silva Júnior
email: sandro@email.com

data_nascimento: 1990-07-02

É obrigatório enviar o token JWT no header:

Authorization: Bearer SEU_TOKEN_AQUI

Evidências de Funcionamento

Este projeto permite comprovar:

Endpoint protegido retornando 401 sem autenticação

Criação de usuário com sucesso

Login com geração de token JWT

Acesso a endpoints protegidos após autenticação

Autor

Sandro Roberto da Silva Júnior

Projeto desenvolvido para fins de aprendizado, com foco em APIs REST, autenticação JWT, segurança, documentação com Swagger e boas práticas de backend.
