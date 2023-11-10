//pegamos a entidade em si dessa forma usando .Autor
const Categoria = require('../models').Categoria;
//Cadastra cliente (POST)
const add = async (req, res) => {
    try {
    const { nome, descricao } = req.body;
    const newEdit = await Categoria.create({ nome, descricao  });
    res.status(200).json({ message: 'Cadastrado com sucesso' });
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};
//buscar todos os endereços
const all = async (req, res) => {
    try{
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
    };
//Altera os clientes (PUT)
const update = async (req, res) => {
    try{
    const { nome, descricao } = req.body;
    await Categoria.update(
        { nome, descricao },
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
    await Categoria.destroy({
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