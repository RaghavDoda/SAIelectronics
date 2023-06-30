import Services from '../../../../../models/services'
import connectDb from '../../../../../middleware/mongoose'
const mongoose = require('mongoose')

const handler = async (req,res) => {
    const id = req.query.Id
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such Service'})
    }
    const services = await Services.findOneAndDelete({_id:id})
    if(!services){
        return res.status(404).json({error : 'No Such Service'})
    }
    res.status(200).json({mssg:"Service deleted successfully"})
}

export default connectDb(handler)