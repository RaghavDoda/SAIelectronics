import Products from '../../../../models/product'
import connectDb from '../../../../middleware/mongoose'

const handler = async (req,res) => {
    const products = await Products.find()
    res.status(200).json(products)
}

export default connectDb(handler)