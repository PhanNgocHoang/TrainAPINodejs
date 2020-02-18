const  User = require('../models/user.model')
module.exports = {
    index: async(req, res,next)=>{
        var user = await User.find({})
            res.status(200).json(user)
        .catch(err=>{
            next(err)
        })
    },
    newUser: (req, res, next)=>{
        const newUser = new User(req.body)
        
        newUser.save((err, user)=>{
            if(err){ return next(err)}
            else{res.status(201).json(user)}
        })

    },
    EditUser: (req, res, next)=>{
        User.findByIdAndUpdate(req.params.user_id, req.body, (err, user)=>{
            if(err)return next(err)
            else{res.status(201).json(user)}
        })
    },
    DeleteUser:  (req, res, next)=>{
        User.findByIdAndDelete(req.params.user_id, (err, user)=>{
            if(err)return next(err)
            else{res.status(201).json(user)}
        })
    }

}