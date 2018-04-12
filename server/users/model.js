const Sequelize = require('sequelize')
const sequelize = require('../db')

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,

  },
  preferences: {
    type: Sequelize.INTEGER,

  }},
  {tableName: 'users',
  timestamps: false}
)

module.exports = Users
