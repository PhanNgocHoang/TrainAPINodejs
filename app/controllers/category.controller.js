const Category = require('../models/category.model')
module.exports = {
    index: async(req, res, next)=>{
        var cat = await Category.find({})
            res.status(201).json(cat)
        .catch(err=>{
            next(err)
        })
    },
    newCategory: async(req, res, next)=>{
        const newCategory = await new Category(req.body)
            newCategory.save((err, cat)=>{
                if(err){ return next(err)}
                else{res.status(201).json(cat)}
            })
    },
    EditCategory: async(req, res, next)=>{
        await Category.findByIdAndUpdate(req.params.cat_id, req.body, (err, cat)=>{
            if(err){return next(err)}
            else{res.status(201).json(cat)}
        })
    },
    DeleteCategory: async(req, res, next)=>{
        await Category.findByIdAndDelete(req.params.cat_id, (err, cat)=>{
            if(err) return next(err)
            else {res.status(201).json(cat)}
        })
    }

}