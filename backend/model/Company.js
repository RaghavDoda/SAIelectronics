const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        default:0
    },
    products : [{
        product_id:{
            type : mongoose.Types.ObjectId,
            required:true
        }
    }]
})

module.exports = mongoose.model('products',productSchema)