const jwt = require('jsonwebtoken')
const User = require('../models/user')

const requireAuth = handler => async (req,res)=>{
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    } 

    const token = authorization.split(' ')[1]

    try {
        const { _id } = jwt.verify(token, process.env.SECRET)

        const user = await User.findOne({ _id })
        req.user = user
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }
}

export default requireAuth