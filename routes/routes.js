const express = require('express');
const router = express.Router();
const UserCtrl = require('./user/UserController')

router.route('/user').get(UserCtrl.getAllUsers)
router.route('/user/:id').get(UserCtrl.getUser)

module.exports = router;