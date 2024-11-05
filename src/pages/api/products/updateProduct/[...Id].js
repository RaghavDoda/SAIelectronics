import Products from '../../../../../models/product'
import connectDb from '../../../../../middleware/mongoose'
const mongoose = require('mongoose')

// import {useRouter} from 'next/router'

const handler = async (req,res,context) => {
    const id = req.query.Id
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such product'})
    }
    const product = await Products.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!product){
        return res.status(404).json({error : 'No Such Product'})
    }
    res.status(200).json(product)
}

export default connectDb(handler)