'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PuzzleState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PuzzleState.init({
    currentAmount: DataTypes.INTEGER,
    goalAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PuzzleState',
  });
  return PuzzleState;
};