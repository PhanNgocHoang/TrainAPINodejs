//define dependences
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
//connect db
mongoose.connect(
    'mongodb://localhost:27017/vietpro_mobile_shop',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
//content
const app = express()
//import file router
const product = require('./app/router/product.router')
//mid
//set morgan
app.use(logger('dev'))
//setup bodyparser
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//router
app.use('/product', product)
//catch 404
app.use((req, res, next)=>{
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})
//err handler function
app.use((req, res, next)=>{
    const error = app.get('env') === 'development' ? err:{}
    const status = err.status ||500
    res.status(status).json({
        error:{
            message: error.message
        }
    })
})
//module export
module.exports = app