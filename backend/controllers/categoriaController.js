//pegamos a entidade em si dessa forma usando .Autor
const Categoria = require('../models').Categoria;
const CategoriaDeProduto = require('../models').CategoriaDeProduto;
const Produto = require('../models').Produto;



//Cadastra categoria (POST)
const add = async (req, res) => {
    try {
        const { id } = req.params; // Este é o id do Produto
        const { nomeCategoria, descricaoCategoria } = req.body;
        const categ = await Categoria.create({ nomeCategoria, descricaoCategoria });
        const idCategoria = categ.id;
        const categoriaDeProduto = await CategoriaDeProduto.create({ fk_Produto_ID: id, fk_Categoria_ID: idCategoria });
        res.status(200).json({ message: 'Cadastrado com sucesso', categoriaDeProduto });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};
//buscar todos os endereços
const all = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};
//Altera os clientes (PUT)
const update = async (req, res) => {
    try {
        const { nomeCategoria, descricaoCategoria } = req.body;
        await Categoria.update(
            { nomeCategoria, descricaoCategoria },
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
        await Categoria.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};

//Deleta categoria produto por id (DELETE)
const delCategoriaProduto = async (req, res) => {
    try {
        await CategoriaDeProduto.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};

const categoriaByProduto = async (req, res) => {
    try {
        const { id } = req.params; // Este é o id do Produto
        const categoriaDeProduto = await CategoriaDeProduto.sequelize.query(
            `SELECT * FROM categoria_produto WHERE fk_Produto_ID = :id`,
            {
                type: CategoriaDeProduto.sequelize.QueryTypes.SELECT,
                replacements: { id },
            });
        res.status(200).json(categoriaDeProduto);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};

module.exports = {
    all,
    add,
    update,
    del,
    categoriaByProduto,
    delCategoriaProduto
};