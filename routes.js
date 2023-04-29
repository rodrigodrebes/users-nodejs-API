// routes.js

const express = require('express');
const routes = express.Router();
const Pessoa = require('./pessoa');

routes.post('/usuario', (req, res) => {
    const pessoa = new Pessoa(req.body.nome, req.body.idade, req.body.emprego);
    pessoa.save();
    res.status(201).json({ message: `Usuario ${pessoa.nome} adicionado com sucesso!` });
});

routes.get('/usuarios', async (req, res) => {
    const usuarios = await Pessoa.getAll();
    res.status(200).json({ usuarios });
});

routes.delete('/usuario/:id', (req, res) => {
    Pessoa.deleteById(req.params.id);
    res.status(200).json({ message: `Usuario deletado com sucesso!` });
});

module.exports = routes;
