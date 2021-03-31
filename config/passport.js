const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');


module.exports = () => {
    const User = mongoose.model('User');
    passport.use(new LocalStrategy({
        passwordField: 'hash'
    }, (username, password, done) => {
        User.findOne({ email: username }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            if (!user.ValidPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            return done(null, user);
        });
    })
    );
};


