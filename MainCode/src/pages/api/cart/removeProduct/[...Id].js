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
                console.log(cart.orderlist.length)
                if(cart.orderlist.length === 1)
                {
                    Cart.deleteOne({user_id:req.user._id})
                    Cart.deleteOne({user_id:req.user._id}).then(
                        () => {
                            res.json({mssg:"cart deleted"})
                        }
                    )
                }
                else
                {
                    console.log(cart)
                    cart.orderlist.splice(id,1);
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