'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IngredienteDoProduto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IngredienteDoProduto.init({
    fk_Produto_ID: DataTypes.INTEGER,
    fk_Ingredientes_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IngredienteDoProduto',
  });
  return IngredienteDoProduto;
};