# CRUD de Usuários

Este é um projeto simples de uma API que fornece operações de CRUD (Create, Read, Update, Delete) para usuários. A aplicação foi construída usando Node.js com o Express.js e o SQLite como banco de dados.

## Pacotes utilizados

- **Express**: Framework para construir a aplicação web.
- **SQLite3**: Driver para interagir com o banco de dados SQLite.
- **Body-Parser**: Middleware para lidar com o corpo das solicitações HTTP.
- **Nodemon**: Ferramenta que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo de node quando mudanças nos arquivos são detectadas.

## Estrutura do Projeto

O projeto é estruturado da seguinte maneira:

- **app.js**: Este arquivo configura e inicia o servidor Express.js. Ele também registra as rotas definidas em `routes.js`.
- **routes.js**: Este arquivo define as rotas HTTP para a API. Existem três rotas:
    - POST /usuario: Cria um novo usuário com base nos dados enviados no corpo da solicitação HTTP. Os dados do usuário são salvos no banco de dados SQLite.
    - GET /usuarios: Retorna uma lista de todos os usuários do banco de dados.
    - DELETE /usuario/:id: Exclui o usuário com o ID especificado. Se o usuário com o ID dado não existir, ele retorna um erro.
- **createdb.js**: Este script cria a tabela `usuarios` no banco de dados SQLite. Você deve executar esse script antes de iniciar o aplicativo pela primeira vez para garantir que a tabela `usuarios` exista.
- **pessoa.js**: Este arquivo define a classe Pessoa, que representa um usuário. A classe Pessoa possui métodos para salvar um novo usuário no banco de dados, recuperar todos os usuários e excluir um usuário pelo ID.

## Como usar

Para executar este projeto, você precisa ter Node.js e npm instalados. Siga estas etapas:

1. Clone o repositório do projeto.
2. Navegue até o diretório do projeto e instale as dependências com `npm install`.
3. Execute `node createdb.js` para criar a tabela `usuarios`.
4. Inicie o servidor com `node app.js`.

Agora, você pode usar um cliente HTTP como Postman ou curl para enviar solicitações para a API.

## Rotas

- Para criar um novo usuário, envie uma solicitação POST para `http://localhost:3000/usuario` com um corpo JSON como `{ "nome": "João", "idade": 30, "emprego": "Engenheiro" }`.
- Para obter todos os usuários, envie uma solicitação GET para `http://localhost:3000/usuarios`.
- Para excluir um usuário, envie uma solicitação DELETE para `http://localhost:3000/usuario/:id`, substituindo `:id` pelo ID do usuário que deseja excluir. Por exemplo, para excluir o usuário com ID 1, você enviaria uma solicitação DELETE para `http://localhost:3000/usuario/1`.
