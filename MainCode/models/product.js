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
    image : [
        {
            type : String,
            required:true
        }
    ],
    company:{
        type:String,
        required:true
    },
    rating : {
        count : {
            type:Number,
            default:0
        },
        rate:{
            type:Number,
            default:0
        }
    },
    color:{
        type:String,
        default:"W"
    },
    highlights : [
        {
            type:String
        }
    ]
})
mongoose.models = {}

module.exports = mongoose.model('Product',productSchema)