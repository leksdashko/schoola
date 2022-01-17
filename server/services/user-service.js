const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
    SELLER_ROLE = 1;
    CLIENT_ROLE = 2;

    async registration(email, password, confirmPassword, role) {
        const candidate = await UserModel.findOne({where: {email}});
        if(candidate){
            throw ApiError.BadRequest(`Користувач з такою email адресою вже існує`);
        }
        
        if(password !== confirmPassword) {
            throw ApiError.BadRequest('Паролі не співпадають');
        }

        console.log(role);

        if(role != this.SELLER_ROLE && role != this.CLIENT_ROLE){
            throw ApiError.BadRequest('Напишіть нам, якщо є пропозиція');
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await UserModel.create({email, password: hashPassword, role, activationLink});
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/users/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({where: {activationLink}});
        if(!user){
            throw ApiError.BadRequest('Некоректне посилання активації');
        }
        user.isActivated = true;
        await user.save();
    }
    
    async getAllUsers() {
        const users = await UserModel.findAll();
        return users;
    }
}

module.exports = new UserService();