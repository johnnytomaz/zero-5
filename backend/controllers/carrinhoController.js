//pegamos a entidade em si dessa forma usando .Autor
const Carrinho = require('../models').Carrinho;
const Cliente = require('../models').Cliente;
const Produto = require('../models').Produto;
const ProdutosDoCliente = require('../models').ProdutosDoCliente;


//Cadastra endereço (POST)
const add = async (req, res) => {
    try {
        const { id } = req.params; // Este é o id do Usuário
        const { idProduto } = req.body;
        const carrinho = await Carrinho.create({ fk_Cliente_ID: id, quantidade: 0, valorTotal: 0 });
        const idCarrinho = carrinho.id;
        const produtoDoCliente = await ProdutosDoCliente.create({ fk_Carrinho_ID: idCarrinho, fk_Produto_ID:idProduto });

        res.status(200).json({ message: 'Cadastrado com sucesso', produtoDoCliente });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};

//buscar todos os endereços
const allByCliente = async (req, res) => {
    try {
        const { id } = req.params; // Este é o id do Usuário
        const produtosDoClientes = await Carrinho.sequelize.query(
            `SELECT * FROM produto_do_cliente WHERE fk_Cliente_ID = :id`,
            {
                type: Carrinho.sequelize.QueryTypes.SELECT,
                replacements: { id },
            });
        res.status(200).json(produtosDoClientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
    
};
//Altera os enderecos (PUT)
const update = async (req, res) => {
    try {
        const { quantidade, valorTotal } = req.body;
        await Carrinho.update(
            { quantidade, valorTotal },
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
        await Carrinho.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};

// //endereço do cliente (entidade)(POST)

// //buscar todos os endereços
// const enderecoByCliente = async (req, res) => {
//     try {
//         const { id } = req.params; // Este é o id do Usuário
//         const enderecoCliente = await EnderecoCliente.sequelize.query(
//             `SELECT * FROM endereco_cliente WHERE fk_Cliente_ID = :id`,
//             {
//                 type: EnderecoCliente.sequelize.QueryTypes.SELECT,
//                 replacements: { id },
//             });
//         res.status(200).json(enderecoCliente);
//     } catch (error) {
//         res.status(500).json({ message: 'Erro ao cadastrar', error });
//     }
// };

module.exports = {
    allByCliente,
    add,
    update,
    del
    //     enderecoByCliente
};