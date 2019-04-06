const mongoose = require('mongoose');

const UserSchema= mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    latime: Date
});

module.exports = User = mongoose.model("users", UserSchema);
