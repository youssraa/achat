const express = require('express');
const Router = express.Router();

const {register , getListUsers , getOneUser , login } = require('../controllers/userControler.js')
const {registerRules , validator , Controleur} = require('../middlewares/validator')
const  isAuth  = require('../middlewares/passportSetup')

//login page
Router.post('/login',login) 

//Register page
// Router.post('/register', registerRules(),validator ,  register)

//logout page 
// Router.get('/logout', isAuth() ,  async(req,res) =>{

// })
//get
Router.get('/list-users' ,getListUsers)
//get by id
Router.get('/:userId' ,getOneUser)

module.exports = Router ;