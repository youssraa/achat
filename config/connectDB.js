
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');



// connecting to data base mongo Atlas
 const connectD = async() => {
    try {
        mongoose.connect(db ,{
            useNewUrlParser : true ,
            useCreateIndex : true , 
            useUnifiedTopology : true 
        })
        console.log('mongo db connected ...')
    }
    catch(err) {
        console.log(err.message)
        //exit process with fallure
        process.exit(1)

    };
}
    module.exports = connectD ;


