const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const TokenModel = sequelize.define('token', {
    refreshToken: {type: DataTypes.STRING, required: true}
});

module.exports = TokenModel;