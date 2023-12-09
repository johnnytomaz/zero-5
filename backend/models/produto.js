'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produto.init({
    nomeProduto: DataTypes.STRING,
    descricaoProduto: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    tamanhoProduto: DataTypes.INTEGER,
    imagensProduto: DataTypes.STRING,
    origem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};