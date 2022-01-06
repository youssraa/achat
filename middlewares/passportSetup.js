const passport = require('passport');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy ;
const FacebookStrategy = require('passport-facebook').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt ;

const config = require('config') ;


const opts = {} ;
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('Bearer');
opts.secretOrKey = config.get('secretLive');
passport.initialize()
passport.use(new  JwtStrategy(opts ,async(jwt_payload , done )=> {
    const {id}= jwt_payload ;
    console.log(id)
    try {
        const searchedUser = await User.findById(id).select('-password');
        searchedUser ? done(null, searchedUser) : done(null , false)

    } catch (error) {
        console.log(error)
        
    }

} ) ) ;
module.exports = isAuth = () => passport.authenticate('jwt', { session: false})
// passport.use(new FacebookStrategy(

//   {
//       clientID        : '...',
//       clientSecret    : '...',
//       callbackURL     : 'http://localhost:3000/auth/facebook/secrets',
//       profileFields   : ['id', 'emails', 'name']
//   },

//   function(accessToken, refreshToken, profile, done) {

//       process.nextTick(function() {

//           User.findOne({ 'facebookId' : profile.id }, function(err, user) {

//               if (err)
//                   return done(err);

//               if (user) {
//                   var token = jwt.sign(user, config.get('secretLive'));
//                   console.log('JWT ' + token); //I'm doing this in orer to copy the token and paste it on Postman
//                   return done(null, ({success: true, token: 'JWT ' + token}));
//               } else {

//                   var newUser = new User();

                  
//                   newUser.fbId = profile.id;
//                   newUser.facebookToken = accessToken;
//                   newUser.name = profile.name.givenName + " " + profile.name.familyName;
//                   newUser.email = profile.emails[0].value;

//                   newUser.save(function(err) {
//                       if (err)
//                           throw err;

//                       var token = jwt.sign(newUser, config.get('secretLive'));
//                       return done(null, {success: true, token: 'JWT ' + token});
//                   });
//               }
//           });
//       });
//   }
// ));

// module.exports = isAuthFB = () =>passport.authenticate('facebook', {scope:['email']})
// module.exports = isAuthSecret = ()=> passport.authenticate('facebook', {session: false, failureRedirect: '/login', successRedirect: '/'})
  