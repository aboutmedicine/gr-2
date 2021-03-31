var user = require("../controller/UserController");

module.exports = (app) => {
    app.post("/signin", user.signin);
    app.get("/signout", user.signout);
    app.post("/signup", user.signup);
};
