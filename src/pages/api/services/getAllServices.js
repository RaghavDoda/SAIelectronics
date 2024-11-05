import Services from '../../../../models/services'
import connectDb from '../../../../middleware/mongoose'

const handler = async (req,res) => {
    const services = await Services.find()
    res.status(200).json(services)
}

export default connectDb(handler)