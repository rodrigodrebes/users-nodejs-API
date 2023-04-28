const express = require('express');
const routes = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

routes.post('/usuario', (req, res) => {
    const { nome, idade } = req.body;
    db.run(`INSERT INTO usuarios (nome, idade) VALUES (?, ?)`, [nome, idade], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        return res.status(201).json({ message: `Usuario ${nome} adicionado com sucesso!`, id: this.lastID });
    });
});

routes.get('/usuarios', (req, res) => {
    db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        return res.status(200).json({ usuarios: rows });
    });
});

routes.delete('/usuario/:id', (req, res) => {
    db.run(`DELETE FROM usuarios WHERE id = ?`, req.params.id, function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        return res.status(200).json({ message: `Usuario deletado com sucesso!` });
    });
});

module.exports = routes;
