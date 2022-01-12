const Router = require('express');
const router = new Router();
const userController = require('../controllers/user-controller');
const {body} = require('express-validator');
const authMiddleware = require('../middleware/auth-middleware');

router.post('/',
    body('email').isEmail(),
    body('password').isLength({min: 8, max: 32}),
    body('confirmPassword').custom((value, {req}) => {
        if (value !== req.body.password) {
          throw new Error('Паролі не співпадають');
        }

        return true;
    }),
    userController.registration
);
router.get('/activate/:link', userController.activate);
router.get('/', authMiddleware, userController.getUsers);

module.exports = router;