const mongoose = require('mongoose')
const Schema = mongoose.Schema
 const CategorySchema = new Schema({
     _id: {type:mongoose.Schema.ObjectId, auto: true},
     cat_name: String
 })
 const Category = mongoose.Schema('category', CategorySchema)
 module.exports = Category