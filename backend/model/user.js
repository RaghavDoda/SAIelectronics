const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema


const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    token:{
        type:String,
        default:""
    }
})

// static signup method
userSchema.statics.signup = async function (prop){

    //validation
    if(!prop.email || !prop.password){
        throw Error('All feilds must be filled')
    }
    if(!validator.isEmail(prop.email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(prop.password)){
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({email:prop.email})
    if(exists){
        throw Error('Email already exists')
    }
        const  salt = await bcrypt.genSalt(10)
        prop.password = await bcrypt.hash(prop.password,salt)
       
        const user = await this.create(prop)
        return user
}   

//static login method
userSchema.statics.login = async function (prop) {
    //validation
    if(!prop.email || !prop.password){
        throw Error('All feilds must be filled')
    }
    const user = await this.findOne({email:prop.email})
    
    if(!user){
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(prop.password,user.password)

    if(!match){
        throw Error('Incorrect Password')
    }

    return user
}

module.exports = mongoose.model('User',userSchema)