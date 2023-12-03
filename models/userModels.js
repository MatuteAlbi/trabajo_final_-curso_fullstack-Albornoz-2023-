const mongoose = require('mongoose')




const userSchema = new mongoose.Schema({ 
    name: String, 
    email: String,
    password: String,
    URLphoto: String,
    salt: String,
    IsAdmin: Boolean,
});

const User = mongoose.model('User', userSchema);


module.exports = User
