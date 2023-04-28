const sqlite3 = require('sqlite3').verbose();

// Conecta ao banco de dados
let db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados.');
});

db.run(`CREATE TABLE usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER);`, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Tabela de usuários criada.');
});

// Fecha a conexão com o banco de dados
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conexão com o banco de dados fechada.');
});
