# API de Usuários com Express e SQLite

Este é um exemplo simples de uma API REST construída com Node.js usando o framework Express e o SQLite como banco de dados local.

## Pré-requisitos

Antes de começar, você deve ter os seguintes pacotes instalados na sua máquina:

- Node.js
- NPM (Node Package Manager)

## Pacotes utilizados

- `express`: Framework para construir a aplicação web.
- `sqlite3`: Driver para interagir com o banco de dados SQLite.
- `body-parser`: Middleware para lidar com o corpo das solicitações HTTP.
- `nodemon`: Ferramenta que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo de node quando mudanças nos arquivos são detectadas.


## Rotas

A API possui as seguintes rotas:

- `POST /api/usuario`: Cria um novo usuário. O corpo da solicitação deve conter um objeto JSON com as propriedades `nome` e `idade`.
- `GET /api/usuarios`: Retorna uma lista de todos os usuários.
- `DELETE /api/usuario/:id`: Exclui o usuário com o ID especificado.

## Iniciando o servidor

Para iniciar o servidor, execute o comando `npm start` na pasta do projeto.

## Testando a API

Para testar a API, você pode usar o Postman ou qualquer outro cliente HTTP de sua preferência.

Exemplos de solicitações:

- Para criar um novo usuário: `POST http://localhost:3000/api/usuario` com o corpo `{ "nome": "João", "idade": 30 }`.
- Para obter todos os usuários: `GET http://localhost:3000/api/usuarios`.
- Para excluir um usuário: `DELETE http://localhost:3000/api/usuario/1`, onde `1` é o ID do usuário.

