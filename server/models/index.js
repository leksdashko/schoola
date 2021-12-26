const User = require('./user-model');
const Cart = require('./cart-model');
const Token = require('./token-model');

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasOne(Token)
Token.belongsTo(User)

module.exports = {
    User,
    Cart,
    Token
}