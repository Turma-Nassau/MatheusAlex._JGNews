'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  }
  Usuario.init({
    nome: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;