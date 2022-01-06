const express = require('express');
const Router = express.Router();
const {register , login } = require('../controllers/userControler.js')
const {registerRules , validator , Controleur} = require('../middlewares/validator')
const  isAuth  = require('../middlewares/passportSetup')
//Register page
Router.post('/register', registerRules(),validator ,  register)

//logout page 
// Router.get('/logout', isAuth() ,  async(req,res) =>{

// })


module.exports = Router ;