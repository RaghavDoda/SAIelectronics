const mongoose = require('mongoose')

const Schema = mongoose.Schema

const servicesSchema = new Schema({
    modelNumber: {
        type:String,
        required:true
    },
    description : {
        type:String
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailAddress:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    }
})
mongoose.models = {}

module.exports = mongoose.model('Services',servicesSchema)