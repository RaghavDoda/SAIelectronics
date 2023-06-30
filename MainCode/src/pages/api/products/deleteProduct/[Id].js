import Products from '../../../../../models/product'
import connectDb from '../../../../../middleware/mongoose'
const mongoose = require('mongoose')

const handler = async (req,res) => {
    const id = req.query.Id
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such product'})
    }
    const product = await Products.findOneAndDelete({_id:id})
    if(!product){
        return res.status(404).json({error : 'No Such Product'})
    }
    res.status(200).json({mssg:"Product deleted successfully"})
}

export default connectDb(handler)