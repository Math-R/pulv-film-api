const express = require('express');
const router = express.Router();
const UserCtrl = require('./user/UserController');
const LoginCtrl = require('./login/LoginController');
const bodyParser = require('body-parser');
const knex = require('../query.js');

//Routes
//Login
// router.route('/login').post(LoginCtrl.login);
//User routes
router.route('/movies').get(UserCtrl.getAllUsers);




//Export router to access it in app
module.exports = router;
