var mongoose = require('mongoose'),
    passport = require('passport');
const User = mongoose.model('User');

exports.signin = (req, res) => {
    if (!req.body.username || !req.body.hash) {
        return res.status(400).json(req.body.username);
    }

    passport.authenticate("local", (err, user, info) => {
        let token;
        if (err) {
            return res.status(500).json(err);
        }
        if (user) {
            token = user.generateJwt();
            return res.status(200).json({ success: true, token: token, user: user });
        } else {
            return res.status(200).json(info);
        }
    })(req, res);
};

exports.signout = (req, res) => {
    req.logout();
    return res.status(200).json({ success: true });
};
exports.signup = async (req, res) =>  {  

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.json({ email: "user already exists" });
        } else {
            const user = new User(req.body);
            user.setPassword(req.body.password);
            user.save((err) => {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json({result:"success"});
                }
            }); 
        }
    });   

};