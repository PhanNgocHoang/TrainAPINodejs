const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/category.controller')

router.route('/')
    .get(CategoryController.index)
    .post(CategoryController.newCategory)
router.route('/:cat_id')
    .put(CategoryController.EditCategory)
    .delete(CategoryController.DeleteCategory)

module.exports = router