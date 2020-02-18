const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')

router.route('/')
    .get(userController.index)
    .post(userController.newUser)
router.route('/:user_id')
    .put(userController.EditUser)
    .delete(userController.DeleteUser)
module.exports = router
