import Products from '../../../../models/product'
import connectDb from '../../../../middleware/mongoose'

const handler = async (req,res) => {
    if(req.body.length > 0){
        return res.status(400).json({error: ' Please Fill in all the Fields',emptyFields})
    }
    // add doc to db
    try{
        const products = await Products.create(req.body)
        res.status(200).json(products)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

export default connectDb(handler)