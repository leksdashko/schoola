const userService = require('../services/user-service');
const tokenService = require('../services/token-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Помилка валідації', errors.array()));
            }

            const {email, password, confirmPassword, role} = req.body;
            const userData = await userService.registration(email, password, confirmPassword, role);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: tokenService.REFRESH_TOKEN_MAX_AGE, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            
            await userService.activate(activationLink);

            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            return res.json(users);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();