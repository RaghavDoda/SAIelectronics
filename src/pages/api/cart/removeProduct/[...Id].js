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
                console.log(cart.orderlist.length)
                if(cart.orderlist.length === 1)
                {
                    Cart.deleteOne({user_id:id})
                    Cart.deleteOne({user_id:id}).then(
                        () => {
                            res.json({mssg:"cart deleted"})
                        }
                    )
                }
                else
                {
                    console.log(cart)
                    cart.orderlist.splice(productid,1);
                    cart.save()
                    res.json(cart)
                }
            }
            else
            {
                res.json({Mssg:"Cart doesn't exist"})
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