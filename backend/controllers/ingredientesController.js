//pegamos a entidade em si dessa forma usando .Autor
const Ingredientes = require('../models').Ingredientes;
const IngredienteDoProduto = require('../models').IngredienteDoProduto;


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

const addIngredientesProduto = async (req, res) => {
    try {
        const { id } = req.params; // Este é o id do Produto
        const { fk_Ingredientes_ID } = req.body;
        const ingredientesDoProduto = await IngredienteDoProduto.create({ fk_Produto_ID: id, fk_Ingredientes_ID });
        res.status(200).json({ message: 'Cadastrado com sucesso', ingredientesDoProduto });
    } catch (error) {
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
    addIngredientesProduto,
    update,
    del
};