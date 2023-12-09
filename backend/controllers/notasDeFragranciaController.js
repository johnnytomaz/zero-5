//pegamos a entidade em si dessa forma usando .Autor
const NotasDeFragrancia = require('../models').NotasDeFragrancia;
const FragranciaDoPerfume = require('../models').FragranciaDoPerfume;
const Produto = require('../models').Produto;


const add = async (req, res) => {
    try {
        const { nomeFragrancia, descricaoFragrancia } = req.body;
        const frag = await NotasDeFragrancia.create({ nomeFragrancia, descricaoFragrancia });
        res.status(200).json({ message: 'Cadastrado com sucesso', frag });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};

const addFragranciaProduto = async (req, res) => {
    try {
        const { id } = req.params; // Este é o id do Produto
        const { fk_NotasDeFragrancia_ID } = req.body;
        const fragranciaDoProduto = await FragranciaDoPerfume.create({ fk_Produto_ID: id, fk_NotasDeFragrancia_ID });
        res.status(200).json({ message: 'Cadastrado com sucesso', fragranciaDoProduto });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};
//buscar todos as notas de fragrancia
const all = async (req, res) => {
    try {
        const notasDeFragrancia = await NotasDeFragrancia.findAll();
        res.status(200).json(notasDeFragrancia);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};
//Altera os enderecos (PUT)
const update = async (req, res) => {
    try {
        const { nomeFragrancia, descricaoFragrancia } = req.body;
        await NotasDeFragrancia.update(
            { nomeFragrancia, descricaoFragrancia },
            {
                where: { id: req.params.id },
            }
        );
        res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};
//Deleta endereco por id (DELETE)
const del = async (req, res) => {
    try {
        await NotasDeFragrancia.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};
module.exports = {
    all,
    add,
    addFragranciaProduto,
    update,
    del
};