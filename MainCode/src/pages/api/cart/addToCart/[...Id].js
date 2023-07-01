import Cart from '../../../../../models/cart'
import connectDb from '../../../../../middleware/mongoose'

const handler = async (req,res) => {
    const id = req.query.Id
    const productid = req.body.productId
    try{
        if(id)
        {
            const cart = await Cart.findOne({user_id:id})
            if(cart)
            {
                var raghav = false
                for(var i=0;i<cart.orderlist.length;i++){
                    if(cart.orderlist[i].product_id==productid._id) raghav = true
                }
                if(!raghav){
                    cart.orderlist.push({product_id:productid})
                    await cart.save()
                }
                res.json(cart)
            }
            else
            {
                const order = new Cart({user_id:id , orderlist: [{product_id:productid}]})
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