const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number ,
        required : true
    },
    rating : {
        type : Number,
        default:0
    },
    details: {
        type : String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        default:1
    },
    key : {
        type : Number ,
        required : true,
        default:0
    }
})

module.exports = mongoose.model('Product',productSchema)