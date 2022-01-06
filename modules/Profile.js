const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'user'
    },
   role : {
       type :String ,
       enum : ['admin','other'],
       required : true ,
       
   }

})
module.exports = Profile = mongoose.model('profile' ,ProfileSchema )