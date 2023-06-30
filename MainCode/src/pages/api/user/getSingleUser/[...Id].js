import User from '../../../../../models/user'
import connectDb from '../../../../../middleware/mongoose'
const mongoose = require('mongoose')

// import {useRouter} from 'next/router'

const handler = async (req,res,context) => {
    const id = req.query.Id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'No such user'})
    }
    const user=await User.findOne({_id:id});
    console.log(user)

    if(!user){
        res.status(201).json({error:"NO SUCH USER"});
      }
     res.json(user)
}

export default connectDb(handler)