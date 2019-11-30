const mongoose = require('mongoose');
const userSchema = mongoose.Schema;
// =================================================================
const user = new userSchema({
    user_name: {type: String, required: true },
    password: { type: String, required: true }
});
module.exports = mongoose.model('user', user);
// =================================================================