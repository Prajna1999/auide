'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Audioguide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Exhibit, { foreignKey: 'id' });
    }
  }
  Audioguide.init({
    exhbit_id: DataTypes.INTEGER,
    audioguide_name: DataTypes.STRING,
    audiofile: DataTypes.STRING,
    duration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Audioguide',
  });
  return Audioguide;
};