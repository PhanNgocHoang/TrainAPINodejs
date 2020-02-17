const Product = require('../models/product.model')
module.exports = {
    index: (req, res, next)=>{
        Product.find({})
        .then(product=>{
            console.log(product)
            res.status(200).json(product)
        })
        .catch(err=>{
            next(err)
        })
    },
    newProduct: (req, res, next)=>{
        const newProduct = new Product(req.body)
        newProduct.save()
            .then(product=>{
                res.status(201).json(product)
                console.log(product)
            })
            .catch(err =>{
                next(err)
            })
    },
    Get_editProduct: async (req, res)=>{
       var product = await Product.findById(req.params.prd_id)
       console.log(product)
    
    },
    DeleteProduct: async(req, res)=>{
        var result = await Product.deleteOne({_id: req.params.prd_id}).exec()
        console.log(result)
    },
    Update_product: async (req, res)=>{
        var product = await Product.findById(req.params.prd_id)
        product.set(req.body)
        update = await product.save()
        console.log(update)
    }
    
}