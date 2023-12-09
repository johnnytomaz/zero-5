'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FragranciaDoPerfume extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FragranciaDoPerfume.init({
    fk_Produto_ID: DataTypes.INTEGER,
    fk_NotasDeFragrancia_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FragranciaDoPerfume',
  });
  return FragranciaDoPerfume;
};