'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vendido.init({
    formaDePagamento: DataTypes.STRING,
    fk_Pedido_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vendido',
  });
  return Vendido;
};