import Cart from '../../../../../models/cart'
import connectDb from '../../../../../middleware/mongoose'

const handler = async (req,res) => {
    const id = req.query.Id
    try{
        if(req.user)
        {
            const cart = await Cart.findOne({user_id:req.user._id})
            if(cart)
            {
                cart.orderlist.push({product_id:id})
                await cart.save()
                res.json(cart)
            }
            else
            {
                const order = new Cart({user_id:req.user._id , orderlist: [{product_id:id}]})
                order.save()
                res.json(order)
            }
        }
        else
        {
            res.json({err:"User not correct"})
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

export default connectDb(handler)