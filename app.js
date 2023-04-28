const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

// Configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(3000, () => {
    console.log('Aplicação está no ar na porta 3000');
});
