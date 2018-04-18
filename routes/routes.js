const express = require('express');
const router = express.Router();
const UserCtrl = require('./user/UserController')
const userSchema = require('../models/user')
const bodyParser = require('body-parser')
const {validateBody} = require('../middlewares/validation')

//Routes
//User routes
router.route('/user').get(UserCtrl.getAllUsers)
router.route('/user/:id').get(UserCtrl.getUser)
router.route('/user/:id').delete(UserCtrl.deleteUser)
router.route('/user').post(UserCtrl.createUser)

//Recruiter routes
module.exports = router;

//validateBody(userSchema),