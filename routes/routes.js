const express = require('express');
const router = express.Router();
const MoviesCtrl = require('./movie/MovieController');
const SeriesCtrl = require('./serie/SerieController');
const EpisodesCtrl = require('./episode/EpisodeController');
const GenresCtrl = require('./genre/GenreController');
const FilterCtrl = require('./filter/FilterController');

//Routes
//Movie routes
router.route('/movies').get(MoviesCtrl.getAllMovies);
router.route('/movies/:id').get(MoviesCtrl.getMovie);
//Serie routes
router.route('/series').get(SeriesCtrl.getAllSeries);
router.route('/series/:id').get(SeriesCtrl.getSerie);
//Episode routes
router.route('/episodes').get(EpisodesCtrl.getAllEpisodes);
router.route('/episodes/:id').get(EpisodesCtrl.getEpisode);
router.route('/episodes/fromSerie/:id').get(EpisodesCtrl.getAllEpisodesFormSerie);
//Genre routes
router.route('/genres').get(GenresCtrl.getAllGenre);
router.route('/genres/series/:id').get(GenresCtrl.getSerieGenre);
router.route('/genres/movies/:id').get(GenresCtrl.getMovieGenre);
router.route('/genres/:id/:table?').get(GenresCtrl.getGenre);
//Filter routes
router.route('/order/:table/:col?/:order?').get(FilterCtrl.getOrder);
router.route('/search/:table/:search?/:col?').get(FilterCtrl.getInfoWithSearch);




//Export router to access it in app
module.exports = router;
