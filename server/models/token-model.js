const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Token = sequelize.define('token', {
    refreshToken: {type: DataTypes.STRING, required: true}
});

module.exports = Token;