const express = require('express');
const Router = express.Router();
const {profileRules , validator} = require('../middlewares/validator')
const  isAuth  = require('../middlewares/passportSetup');
const { profileGet ,profileRegister} = require('../controllers/profileControler');

//profile page
Router.get('/me', isAuth() , profileGet)
//set profile 
//profile page
Router.post('/form', isAuth()  ,profileRules(),validator,profileRegister)
module.exports = Router ;