'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstKey: { 
			type: DataTypes.STRING,
			unique: true,
		},
    secondKeyHash: DataTypes.STRING,
    nickName: { 
			type: DataTypes.STRING,
			unique: true,
		},
    company: DataTypes.STRING,
    memo: DataTypes.TEXT,
    email: DataTypes.STRING,
		githubUrl: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
