//pegamos a entidade em si dessa forma usando .Autor
const Produto = require('../models').Produto;
//Cadastra produto (POST)
const add = async (req, res) => {
    try {
    const { nomeProduto, descricao, preco, tamanho, imagens, origem } = req.body;
    const newEdit = await Produto.create({ nomeProduto, descricao, preco, tamanho, imagens, origem });
    res.status(200).json({ message: 'Cadastrado com sucesso' });
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};
//buscar todos os produtos
const all = async (req, res) => {
    try{
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
    };
//Altera os clientes (PUT)
const update = async (req, res) => {
    try{
    const { nomeProduto, descricao, preco, tamanho, imagens, origem } = req.body;
    await Produto.update(
        { nomeProduto, descricao, preco, tamanho, imagens, origem },
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
    await Produto.destroy({
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