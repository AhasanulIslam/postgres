const {DataTypes} = require('sequelize');
const sequelize = require('../config/db')

const User = sequelize.define('habbit', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  schema : "ahasan"
});


 module.exports = User;