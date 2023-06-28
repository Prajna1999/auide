'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exhibit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Museum, { foreignKey: 'id' });
      this.hasMany(models.AudioGuide, { foreignKey: 'id' });
    }
  }
  Exhibit.init({
    museum_id: DataTypes.INTEGER,
    exhibition_name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exhibit',
  });
  return Exhibit;
};