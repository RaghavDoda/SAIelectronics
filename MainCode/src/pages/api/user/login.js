import User from '../../../../models/user'
import connectDb from '../../../../middleware/mongoose'
const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
    return  jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'}) 
}

const handler = async (req,res) => {
    try{
        const user = await User.login(req.body)
        console.log(user)
 
        //create a token
        const token = createToken (user._id)
        user.token = token
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export default connectDb(handler)