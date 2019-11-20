const express = require('express');
const router = express.Router();
const UserCtrl = require('./user/UserController');
const LoginCtrl = require('./login/LoginController');
const bodyParser = require('body-parser');

//Routes
//Login
router.route('/login').post(LoginCtrl.login);
//User routes
router.route('/user').get(UserCtrl.getAllUsers);
router.route('/user/:id').get(UserCtrl.getUser);
router.route('/user/:id').delete(UserCtrl.deleteUser);
router.route('/user').post(UserCtrl.createUser);


//Export router to access it in app
module.exports = router;
