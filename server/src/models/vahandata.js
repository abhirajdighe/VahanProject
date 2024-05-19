'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vahanData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vahanData.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    dob: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vahanData',
  });
  return vahanData;
};