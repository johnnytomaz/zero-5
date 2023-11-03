'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnderecoCliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnderecoCliente.init({
    fk_Cliente_ID: DataTypes.INTEGER,
    fk_Endereco_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EnderecoCliente',
  });
  return EnderecoCliente;
};