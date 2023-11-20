//pegamos a entidade em si dessa forma usando .Autor
const Cliente = require('../models').Cliente;
//Cadastra cliente (POST)
const add = async (req, res) => {
    try {
    const { nomeCliente, email, telefone, apelido, senha } = req.body;
    const newEdit = await Cliente.create({ nomeCliente, email, telefone, apelido, senha });
    res.status(200).json({ message: 'Cadastrado com sucesso' });
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};
//buscar todos os endereços
const all = async (req, res) => {
    try{
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
    };
//Altera os clientes (PUT)
const update = async (req, res) => {
    try{
    const { nomeCliente, email, telefone, apelido, senha } = req.body;
    await Cliente.update(
        { nomeCliente, email, telefone, apelido, senha },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};
//Deleta endereco por id (DELETE)
const del = async (req, res) => {
    try{
    await Cliente.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })}catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};
module.exports = {
    all,
    add,
    update,
    del
};