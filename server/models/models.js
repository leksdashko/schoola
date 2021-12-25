const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING, unique: true}
});

const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

User.hasOne(Cart)
Cart.belongsTo(User)

module.exports = {
    User,
    Cart
}