const Product = require("../models/product.model")

module.exports.getAllProducts=(req,res)=>{
    Product.find()
    .then(allProducts=>{
        res.json({results:allProducts})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.createNewProduct=(req,res)=>{
    Product.create(req.body)
    .then(newProduct=>{
        res.json({result:newProduct})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.deleteProduct=(req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then(result=>{
        res.json({result:result})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.getById=(req,res)=>{
    Product.find({_id:req.params.id})
    .then(singleProduct=>{
        res.json({result:singleProduct})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.updateProduct= (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}