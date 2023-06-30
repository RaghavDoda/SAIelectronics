import Services from '../../../../../models/services'
import connectDb from '../../../../../middleware/mongoose'
const mongoose = require('mongoose')

// import {useRouter} from 'next/router'

const handler = async (req,res,context) => {
    const id = req.query.Id
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such service'})
    }
    const services = await Services.findById(id)
    if(!services){
        return res.status(404).json({error : 'No Such service'})
    }
    res.status(200).json(services)
}

export default connectDb(handler)