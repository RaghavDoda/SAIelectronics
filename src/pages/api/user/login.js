import User from '../../../../models/user'
import connectDb from '../../../../middleware/mongoose'

const handler = async (req,res) => {
    try{
        const user = await User.login(req.body)
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export default connectDb(handler)