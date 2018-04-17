const express = require('express');
const router = express.Router();
const UserCtrl = require('./user/UserController')

router.route('/user').get(UserCtrl.getAllUsers)

module.exports = router;