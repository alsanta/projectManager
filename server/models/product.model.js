const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    // fields that a table would have
    title:{
        type: String,
        required:[true, "A name is required!"],
        minlength: [3, "The name must be longer than 3 characters"]
    },
    price:{
        type:Number,
        required:[true, "Price is required."],
        min: [1, "Price must be higher than 0 "]
    },
    description:{
        type:String,
        required:[true, "Please give a short description"],
        minlength:[5, "The description must be at least 5 characters long"]
    }
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;