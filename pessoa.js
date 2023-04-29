// pessoa.js

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

class Pessoa {
    constructor(nome, idade, emprego) {
        this.nome = nome;
        this.idade = idade;
        this.emprego = emprego;
    }

    save() {
        db.run(`INSERT INTO usuarios (nome, idade, emprego) VALUES (?, ?, ?)`, [this.nome, this.idade, this.emprego], function(err) {
            if (err) {
                console.error(err.message);
            }
        });
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    static deleteById(id) {
        db.run(`DELETE FROM usuarios WHERE id = ?`, id, function(err) {
            if (err) {
                console.error(err.message);
            }
        });
    }
}

module.exports = Pessoa;
