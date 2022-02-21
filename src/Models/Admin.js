var User = require('./User');

var user = {
    email: "admin@gmail.com",
    password:"admin@567",
    userType: "2"
}

User.create(user, function(e) {
    if (e) {
        throw e;
    }
});