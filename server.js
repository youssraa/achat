const express = require('express') ;
const cors = require('cors');
const connectD = require('./config/connectDB');
const routerUser = require('./routes/user.js');
const routerAdmin = require('./routes/admin.js');
const routerProfile = require('./routes/profile.js');
const app = express() ;
const config = require('config')
// connect with data base 
connectD();
//midleware 
app.use(cors())
app.use(express.json())
//Routes 
app.use('/user', routerUser);
app.use('/admin', routerAdmin);
app.use('/profile', routerProfile);
// START with Port 5000 

const PORT = process.env.PORT || 5000 ;
app.listen(PORT , ()=>console.log(`Server started on port ${PORT}`)) 