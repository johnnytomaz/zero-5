//pegamos a entidade em si dessa forma usando .Autor
const Endereco = require('../models').Endereco;
// const Cliente = require('../models').Cliente;
const EnderecoCliente = require('../models').EnderecoCliente;


//Cadastra endereço (POST)
const add = async (req, res) => {
    try {
        const { id } = req.params; // Este é o id do Usuário
        const { cep, ruaOuAvenida, numero, complemento } = req.body;
        const end = await Endereco.create({ cep, ruaOuAvenida, numero, complemento });
        const idEndereco = end.id;
        const enderecoCliente = await EnderecoCliente.create({ fk_Cliente_ID: id, fk_Endereco_ID: idEndereco });
        res.status(200).json({ message: 'Cadastrado com sucesso', enderecoCliente });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};
//buscar todos os endereços
const all = async (req, res) => {
    try {
        const enderecos = await Endereco.findAll();
        res.status(200).json(enderecos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};
//Altera os enderecos (PUT)
const update = async (req, res) => {
    try {
        const { cep, ruaOuAvenida, numero, complemento } = req.body;
        await Endereco.update(
            { cep, ruaOuAvenida, numero, complemento },
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
        await Endereco.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};

//endereço do cliente (entidade)(POST)

//buscar todos os endereços
const enderecoByCliente = async (req, res) => {
    try {
        const { id } = req.params; // Este é o id do Usuário
        const enderecoCliente = await EnderecoCliente.sequelize.query(
            `SELECT * FROM endereco_cliente WHERE fk_Cliente_ID = :id`,
            {
                type: EnderecoCliente.sequelize.QueryTypes.SELECT,
                replacements: { id },
            });
        res.status(200).json(enderecoCliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
};

module.exports = {
    all,
    add,
    update,
    del,
    enderecoByCliente
};

