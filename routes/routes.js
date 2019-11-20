const express = require('express');
const router = express.Router();
const MoviesCtrl = require('./movie/MovieController');
const SeriesCtrl = require('./serie/SerieController');
const FilterCtrl = require('./filter/FilterController');

//Routes
//Login
// router.route('/login').post(LoginCtrl.login);
//User routes
router.route('/movies').get(MoviesCtrl.getAllMovies);
router.route('/series').get(SeriesCtrl.getAllSeries);
router.route('/series/:id').get(SeriesCtrl.getSerie);
router.route('/order/:table/:col?/:order?').get(FilterCtrl.getInfoByNames);




//Export router to access it in app
module.exports = router;
