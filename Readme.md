API+BANCO_DE_DADOS

API  feita com Node.js, TypeScript, Express, TypeORM e PostgreSQL, usada para cadastrar, listar, atualizar e excluir alunos.

Tecnologias usadas

- Node.js  
- TypeScript  
- Express  
- TypeORM  
- PostgreSQL  
- Dotenv

Como configurar

1. Clone o projeto:

   bash

   git clone https://github.com/Sandrojr1990/API-ALUNOS.git

2. Acesse a pasta:

   bash

   cd api-alunos

3. Instale as dependências:

   bash

   npm install

4. Crie o arquivo .env na raiz do projeto com os dados do banco:
   
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASS=1234
   DB_NAME=api_escola
   PORT=3000

5. Rode o projeto:

   bash

   npm run dev
   
6. O servidor estará rodando em:
   
   http://localhost:3000
   
Banco de dados

O banco de dados usado é o PostgreSQL.

A tabela criada automaticamente pelo TypeORM é:

Tabela: aluno

|      Campo      |   Tipo    |        Descrição       |

|      id         |  SERIAL   | Identificador do aluno |
|      nome       |  VARCHAR  |      Nome do aluno     |
|      email      |  VARCHAR  |      Email do aluno    |   
| data_nascimento | TIMESTAMP |    Data de nascimento  |

Rotas da API

| Método |     Rota    |          Descrição          |

|  GET   |   /alunos   |    Lista todos os alunos    |
|  GET   | /alunos/:id | Retorna um aluno específico |
|  POST  |   /alunos   |   Cadastra um novo aluno    |
|  PUT   | /alunos/:id |      Atualiza um aluno      |
| DELETE | /alunos/:id |       Remove um aluno       |

Testes

Você pode testar a API usando o Thunder Client, Insomnia ou Postman.

Exemplo de teste Thunder Client:

- Método: POST
- URL: http://localhost:3000/alunos
- Corpo (JSON):

  json
  
  {
    "nome": "Sandro Roberto da Silva Júnior",
    "email": "SandroJunior@email.com",
    "data_nascimento": "1990-07-02"
  }


Autor

 Sandro Roberto da Silva Júnior

 Projeto criado para fins de aprendizado.
