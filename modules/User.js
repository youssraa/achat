const mongoose = require('mongoose') ;
const UserSchema = new mongoose.Schema({    
    name : {
        type : String ,
        required : true , 
        // max : 255 ,
        // min : 2 
    } ,
    email : {
        type : String ,
        required : true ,
        max : 255
    } ,
    password : {
        type : String , 
        required : true ,
        // min : 8 , 
        // max : 1024
    } ,
   poste: {
    type: String,
    enum : ['Gérant','Responsable CC','Service achat' ,'Controleur de gestion'],
    required : true ,
    
},
avatar:{
    type : String ,
  
},
genre : { 
    type :String ,  
    required : true ,
    
    },
status : {
    type : Boolean , 
    default : true ,   
}   

}, { timestamps: true })

module.exports = User = mongoose.model('user' ,UserSchema )