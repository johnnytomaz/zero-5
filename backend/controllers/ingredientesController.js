//pegamos a entidade em si dessa forma usando .Autor
const Ingredientes = require('../models').Ingredientes;
//Cadastra ingredientes (POST)
const add = async (req, res) => {
    try {
    const { nome } = req.body;
    const newEdit = await Ingredientes.create({ nome });
    res.status(200).json({ message: 'Cadastrado com sucesso' });
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};
//buscar todos os ingredientes
const all = async (req, res) => {
    try{
    const ingredientes = await Ingredientes.findAll();
    res.status(200).json(ingredientes);
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
    };
//Altera os ingredientes (PUT)
const update = async (req, res) => {
    try{
    const { nome } = req.body;
    await Ingredientes.update(
        { nome },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};
//Deleta ingredientes por id (DELETE)
const del = async (req, res) => {
    try{
    await Ingredientes.destroy({
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