const express = require('express');
// const router = express.Router();
const api = express.Router();

// Importando rotas
const userRoutes = require('./routes/userRoutes.js');
const exemploRoutes = require('./routes/exemploRoutes.js');

// Definir rotas importadas
api.use(["/users", "/usuarios"], userRoutes);
api.use('/exemplos', exemploRoutes);

module.exports = api
