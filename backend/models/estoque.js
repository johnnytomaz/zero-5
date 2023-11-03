'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estoque extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Estoque.init({
    quantidade: DataTypes.INTEGER,
    fk_Produto_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Estoque',
  });
  return Estoque;
};