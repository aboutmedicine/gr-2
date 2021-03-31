const express = require("express");
const bodyParser = require("body-parser");
const staticserver = require('serve-static');
const passport = require("passport");
const path = require("path");
const fileUpload = require('express-fileupload');
const Mongoose = require('./config/mongoose');
const Passport = require('./config/passport');
const MongoDB = require('./config/mongodb');
const cors = require('cors');

const app = express();

// enable files upload
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    // app.use(express.static("/dist"));
    app.use('/', staticserver(path.join(__dirname, '/dist')))

    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, '/dist/index.html'));
    });
}
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
//Connect to mongodb
var mongo = MongoDB();
var mongoose = Mongoose();
var passports = Passport();

//Routes
require('./routes/UserRoute')(app);
require('./routes/LessonRoute')(app);

const port = process.env.PORT || 8080;  //process.env.port is Heroku's port if you choose to deplay the app there
app.listen(port, () => console.log("Server up and running on port " + port));