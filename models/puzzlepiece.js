'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PuzzlePiece extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PuzzlePiece.init({
    value: DataTypes.INTEGER,
    collected: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PuzzlePiece',
  });
  return PuzzlePiece;
};