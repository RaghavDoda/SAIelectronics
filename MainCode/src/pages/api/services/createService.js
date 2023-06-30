import Services from '../../../../models/services'
import connectDb from '../../../../middleware/mongoose'

const handler = async (req,res) => {
    // add doc to db
    try{
        const services = await Services.create(req.body)
        res.status(200).json(services)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

export default connectDb(handler)