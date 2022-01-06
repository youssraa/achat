
const {check , validationResult } = require('express-validator');
const User  = require('../modules/User.js') ;
exports.registerRules = () =>[
    check('name' , 'Name is required ! ').notEmpty() ,
    check('email' , 'Please include a valid email ').notEmpty().isEmail() ,
    check('password' , 'Please enter a password with 6 or more characters').isLength({min : 6})
    ];
    exports.profileRules = ()=>[
    check('role' , 'Selectionner type compte! ').notEmpty() ,
    ]

exports.validator = (req,res, next) => {
const erorrs = validationResult(req) ;
 erorrs.isEmpty() ? next() : res.status(400).json({erorr : erorrs})
}


// exports.Controleur = async function (req, res, next) { 
//     // 401 Unauthorized
//     const user = await User.findOne({ where: { id : req.user.id}})
//     if(user.poste !== 'controleur de gestion') return res.status(403).send({error: { status:403, message:'Access denied.'}});
//     next();
//   }
