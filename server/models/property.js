'use strict';

module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
  	id: {
  		type: DataTypes.STRING,
    	allowNull: false,
    	primaryKey: true
  	},
    street: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    rent: DataTypes.DECIMAL,
    userId: DataTypes.STRING
  });

  Property.associate = (models) => {
  	Property.belongsTo(models.User, {
  		foreignKey: 'userId',
  		onDelete: 'CASCADE'
  	});
  };
  
  return Property;
};