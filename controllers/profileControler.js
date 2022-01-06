const User  = require('../modules/User.js') ;
const Profile = require('../modules/Profile.js')
exports.profileGet = async(req,res) => {
    try {
       const profile = await Profile.findOne({user : req.user._id}).populate('user',['name','poste']) 
    if(!profile){
        res.status(404).json({msg :'there is no profile for this user !!'})
    }
    res.json(profile)
    
    
    } catch (error) {
        console.log(error)
        res.status(500).send({ error :error})
        
    }
    
}    



exports.profileRegister = async(req,res)=> { 
  

try {

    let profile = await Profile.findOne({ user: req.user._id });
    if (profile) {
        console.log("profile existe")
        //update User
         profile = await Profile.findOneAndUpdate(
            { user: req.user._id} ,
            {$set : {
             role : req.body.role
            }
            
            } , {upsert:true, useFindAndModify:false} );
            return res.status(201).json({profile})
      }
    if(!profile){
     console.log("not existe")
    const newProfile =  new Profile({
        user: req.user._id ,
        role : req.body.role
    });

    await newProfile.save();
    res.status(201).json({newProfile})
}
} catch (error) {
    console.log(error)
    res.status(400).json({error : error })
}} 