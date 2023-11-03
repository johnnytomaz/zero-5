'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrinho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carrinho.init({
    quantidade: DataTypes.INTEGER,
    valorTotal: DataTypes.FLOAT,
    fk_Cliente_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrinho',
  });
  return Carrinho;
};