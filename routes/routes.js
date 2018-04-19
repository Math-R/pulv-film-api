const express = require('express');
const router = express.Router();
const UserCtrl = require('./user/UserController')
const BusinessCtrl = require('./business/BusinessController')
const userSchema = require('../models/user')
const bodyParser = require('body-parser')
const {validateBody} = require('../middlewares/validation')

//Routes
//User routes
router.route('/user').get(UserCtrl.getAllUsers)
router.route('/user/:id').get(UserCtrl.getUser)
router.route('/user/:id').delete(UserCtrl.deleteUser)
router.route('/user').post(UserCtrl.createUser)

//Choice routes
router.route('/choice/:id').post(UserCtrl.ChoiceUserCandidate)
router.route('/choose-recruiter/:id').post(UserCtrl.ChoiceUserRecruiter)

//Recruiter routes

//Business routes
router.route('/business').get(BusinessCtrl.getAllBusiness)
router.route('/business/:id').get(BusinessCtrl.getBusiness)
router.route('/business/:id').delete(BusinessCtrl.deleteBusiness)
router.route('/business').post(BusinessCtrl.createBusiness)

//Export router to access it in app
module.exports = router;