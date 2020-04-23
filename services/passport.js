const passport = require('passport');
const GoogleStartegy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use( new GoogleStartegy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log( 'accessToken', accessToken );
        console.log( 'refreshToken', refreshToken);
        console.log( 'profile', profile);
    }
));