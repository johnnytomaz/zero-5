//pegamos a entidade em si dessa forma usando .Autor
const Endereco = require('../models').Endereco;
//Cadastra endereço (POST)
const add = async (req, res) => {
    try {
    const { cep, ruaOuAvenida, numero, complemento } = req.body;
    const newEdit = await Endereco.create({ cep, ruaOuAvenida, numero, complemento });
    res.status(200).json({ message: 'Cadastrado com sucesso' });
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }

};
//buscar todos os endereços
const all = async (req, res) => {
    try{
    const enderecos = await Endereco.findAll();
    res.status(200).json(enderecos);
    }catch(error){
        res.status(500).json({ message: 'Erro ao cadastrar', error });
    }
    };
    //Altera os enderecos (PUT)
const update = async (req, res) => {
    try{
    const { cep, ruaOuAvenida, numero, complemento } = req.body;
    await Endereco.update(
        { cep, ruaOuAvenida, numero, complemento },
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
    await Endereco.destroy({
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