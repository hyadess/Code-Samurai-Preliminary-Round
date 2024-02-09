const router = require('express').Router();
const UserController = require('../controllers/userController');
const userController = new UserController();

router.post('/', userController.addUser);

module.exports = router;