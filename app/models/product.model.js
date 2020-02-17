const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    _id: {type:mongoose.Schema.ObjectId, auto: true},
    cat_id: mongoose.Schema.ObjectId,
    prd_name: String,
    prd_image: String,
    prd_price: Number,
    prd_warranty: String,
    prd_accessories: String,
    prd_new: String,
    prd_promotion: String,
    prd_status: Number,
    prd_featured: Number,
    prd_details: String,
})
const Product =  mongoose.model('product', productSchema);
module.exports = Product