const userService = require('../services/user-service');
const authService = require('../services/auth-service');
const tokenService = require('../services/token-service');

class AuthController {
    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await authService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: tokenService.REFRESH_TOKEN_MAX_AGE, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await authService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;

            const userData = await authService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: tokenService.REFRESH_TOKEN_MAX_AGE, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new AuthController();