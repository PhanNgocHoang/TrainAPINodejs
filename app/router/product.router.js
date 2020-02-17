// import dependences
const express = require('express')
const router = express.Router()
//content
const productcontroller = require('../controllers/product.controller')
router.route('/')// localhost:8888/product
    .get(productcontroller.index)
    .post(productcontroller.newProduct)
    // .put()
    // .patch()
router.route('/:prd_id')
    .get(productcontroller.Get_editProduct)
    .delete(productcontroller.DeleteProduct)
    .put(productcontroller.Update_product)
module.exports = router
