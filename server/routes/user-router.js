const Router = require('express');
const router = new Router();
const userController = require('../controllers/user-controller');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/', userController.getUsers);

module.exports = router;