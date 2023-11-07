const express = require('express');
const router = express.Router();
//importações
 const endereco = require('./controllers/enderecoController.js');

 //métodos http ou rotas do endereço
 router.post('/endereco/add', endereco.add);
 router.get('/endereco/all', endereco.all);
 router.put('/endereco/:id', endereco.update);
 router.delete('/endereco/:id', endereco.del);
module.exports = router;