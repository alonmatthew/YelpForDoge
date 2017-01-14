var passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require('../models/user.js');

passport.serializeUser((user,done) => {
  done(null, user.id)
})

passport.desirializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({'local.email': email}, (err, user) => {
    if(err) return done(err)
    if(user) return done(null, false, req.flash('signupMessage', 'That email is taken.'))
    var newUser = new User()
    newUser.local.email = email
    newUser.local.password = newUser.generateHash(password)
    newUser.save((err) => {
      return done(null, newUser, null)
    })
  })
}))

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({'local.email': email}, (err, user) => {
    if(err) return done(err)
    if(!user) return done(null, false, req.flash('loginMessage', 'No user found...'))
    if(!user.validPassword(password)) return done(null, false, req.flash('loginMessage', 'Wrong Password'))
    return done(null, user)
  })
}))

module.exports = passport
