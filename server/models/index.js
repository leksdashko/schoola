const UserModel = require('./user-model');
const CartModel = require('./cart-model');
const TokenModel = require('./token-model');

UserModel.hasOne(CartModel);
CartModel.belongsTo(UserModel);

UserModel.hasOne(TokenModel)
TokenModel.belongsTo(UserModel)

module.exports = {
    UserModel,
    CartModel,
    TokenModel
}