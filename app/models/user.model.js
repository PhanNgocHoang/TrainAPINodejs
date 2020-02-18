const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema =  new Schema({
    _id: {type:mongoose.Schema.ObjectId, auto: true},
    user_full: String,
    user_mailmo: String,
    user_pass: String,
    user_level: Number,
})
const User = mongoose.model('user', userSchema)
module.exports = User