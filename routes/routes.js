const express = require('express');
const router = express.Router();
const UserCtrl = require('./user/UserController');
const LoginCtrl = require('./login/LoginController');
const bodyParser = require('body-parser');
const knex = require('../query.js');

const getMovies = (req, res, next) => {
    knex.select().from('movies').then(result => res.send(result))
        .catch(next)
}
//Routes
//Login
// router.route('/login').post(LoginCtrl.login);
//User routes
router.route('/movies').get(getMovies);




//Export router to access it in app
module.exports = router;
