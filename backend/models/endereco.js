'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Endereco.init({
    cep: DataTypes.INTEGER,
    ruaOuAvenida: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Endereco',
  });
  return Endereco;
};