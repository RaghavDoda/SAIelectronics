import User from '../../../../models/user'
import connectDb from '../../../../middleware/mongoose'

const handler = async (req,res) => {
    const users = await User.find();
    res.status(200).json(users);
}

export default connectDb(handler)