import User from '../../../../models/user'
import connectDb from '../../../../middleware/mongoose'

const handler = async (req,res) => {
    const user = await User.signup(req.body)
    try{
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export default connectDb(handler)