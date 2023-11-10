//pegamos a entidade em si dessa forma usando .Autor
const NotasDeFragrancia = require('../models').NotasDeFragrancia;
//Cadastra endereço (POST)
const add = async (req, res) => {
    try {
    const { nome, descricao } = req.body;
    const newEdit = await NotasDeFragrancia.create({ nome, descricao });
    res.status(200).json({ message: 'Cadastrado com sucesso' });
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};
//buscar todos as notas de fragrancia
const all = async (req, res) => {
    try{
    const notasDeFragrancia = await NotasDeFragrancia.findAll();
    res.status(200).json(notasDeFragrancia);
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
    };
    //Altera os enderecos (PUT)
const update = async (req, res) => {
    try{
    const { nome, descricao } = req.body;
    await NotasDeFragrancia.update(
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
    await NotasDeFragrancia.destroy({
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