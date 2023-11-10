const express = require('express');
const router = express.Router();
//importações
 const endereco = require('./controllers/enderecoController.js');

 //métodos http ou rotas do endereço
 router.post('/endereco/add/:id', endereco.add);
 router.get('/endereco/all', endereco.all);
 router.get('/endereco-cliente/:id', endereco.enderecoByCliente);
 router.put('/endereco/:id', endereco.update);
 router.delete('/endereco/:id', endereco.del);
 //importações
 const cliente = require('./controllers/clienteController.js');

 //métodos http ou rotas do cliente
 router.post('/cliente/add', cliente.add);
 router.get('/cliente/all', cliente.all);
 router.put('/cliente/:id', cliente.update);
 router.delete('/cliente/:id', cliente.del);

 //importações
 const produto = require('./controllers/produtoController.js');
 //métodos http ou rotas do produto
 router.post('/produto/add', produto.add);
 router.get('/produto/all', produto.all);
 router.put('/produto/:id', produto.update);
 router.delete('/produto/:id', produto.del);
module.exports = router;

//importações
const notasDeFragrancia = require('./controllers/notasDeFragranciaController.js');
//métodos http ou rotas do notasDeFragrancia
router.post('/notasDeFragrancia/add', notasDeFragrancia.add);
router.get('/notasDeFragrancia/all', notasDeFragrancia.all);
router.put('/notasDeFragrancia/:id', notasDeFragrancia.update);
router.delete('/notasDeFragrancia/:id', notasDeFragrancia.del);

//importações
const categoria = require('./controllers/categoriaController.js');
//métodos http ou rotas do categoria
router.post('/categoria/add', categoria.add);
router.get('/categoria/all', categoria.all);
router.put('/categoria/:id', categoria.update);
router.delete('/categoria/:id', categoria.del);

//importações
const ingredientes = require('./controllers/ingredientesController.js');
//métodos http ou rotas do categoria
router.post('/ingredientes/add', ingredientes.add);
router.get('/ingredientes/all', ingredientes.all);
router.put('/ingredientes/:id', ingredientes.update);
router.delete('/ingredientes/:id', ingredientes.del);

module.exports = router;