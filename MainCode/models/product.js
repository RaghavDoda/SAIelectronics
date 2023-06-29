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
    details: {
        type : String,
        required:true
    },
    image : {
        type : String,
        required:true
    },
    company:{
        type:String,
        required:true
    }
})
mongoose.models = {}

module.exports = mongoose.model('Product',productSchema)