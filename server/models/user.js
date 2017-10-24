'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
  	id: {
  		type: DataTypes.STRING,
    	allowNull: false,
    	primaryKey: true
  	},
    firstName: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    lastName: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    email: {
    	type: DataTypes.STRING,
    	allowNull: false
    }
  });

  User.associate = (models) => {
  	User.hasMany(models.Property, {
  		foreignKey: 'userId',
  		as: 'userProperties'
  	});
  };

  return User;
};