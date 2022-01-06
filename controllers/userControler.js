const User  = require('../modules/User.js') ;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken') ;
const config = require('config')
const secret = config.get('secretLive');
//get all users list
exports.getListUsers = async(req,res)=> {
        try{
          const users = await User.find();
          res.json(users)
        } catch(error){
            res.status(400).json({error : error })  
}
}
//register
exports.register = async(req,res)=> { 
    const {name , email,password,poste ,  avatar , genre , status } = req.body 
try {
    let user = await User.findOne({ email });
    if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      // get user gravatar
    const newUser =  new User({
        name ,
        email, 
        password ,
        avatar ,
        poste , 
        genre ,
        status ,
    });
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password , salt );
newUser.password = hash ;
    await newUser.save();
    res.status(201).json({newUser})
} catch (error) {
    console.log(error)
    res.status(400).json({error : error })
}} 
//get user by id
exports.getOneUser = async (req ,res)=>{
    try{
  const user =await User.findById(req.params.userId);
   res.json(user);
    }
    catch(error){
        console.log(error)
        res.status(400).json({error : error })
  
    }
}

//confirmation email 
// module.exports.sendConfirmationEmail = (name, email, token) => {
//     console.log("Check");
//     transport.sendMail({
//       from: user,
//       to: email,
//       subject: "Please confirm your account",
//       html: `<h1>Email Confirmation</h1>
//           <h2>Hello ${name}</h2>
//           <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
//           <a href=http://localhost:8081/confirm/${confirmationCode}> Click here</a>
//           </div>`,
//     }).catch(err => console.log(err));
//   };

//log in 
exports.login = async(req,res)=>{
    const {email,password} = req.body 
    try{
        const user = await User.findOne({ email });
        if(!user) {
            res.status(404).json({msg :'bad credantials !!'})
        }
        const isMatch = await bcrypt.compare(password , user.password);
        if (!isMatch) {
            res.status(404).json({msg :'bad credantials !!'})
        }
        const payload = {
          id :  user._id ,
          email : user.email
        }
        // if (user.status != "Active") {
        //     return res.status(401).send({
        //       message: "Pending Account. Please Verify Your Email!",
        //     });
        //   }  

        const token =await  jwt.sign(payload , secret);
       
        res.status(200).json({token : `bearer ${token}`})


    }
    catch(error){
        console.log(error);
        res.status(505).json({error : error})
    }
}
