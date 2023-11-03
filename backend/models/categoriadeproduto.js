'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoriaDeProduto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategoriaDeProduto.init({
    fk_Produto_ID: DataTypes.INTEGER,
    fk_Categoria_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoriaDeProduto',
  });
  return CategoriaDeProduto;
};