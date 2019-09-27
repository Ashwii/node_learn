const mongoose = require('mongoose');
const userSchema = mongoose.Schema;
// =================================================================
const user = new userSchema({
    first_name : { type: String , required: true },
    last_name: { type: String, required: true },
    age: { type: String, required: true },
    user_name: {type: String, required: true },
    password: { type: String, required: true }
});
module.exports = mongoose.model('user', user);
// =================================================================