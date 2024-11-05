import Cart from '../../../../../models/cart'
import Product from '../../../../../models/product'
import connectDb from '../../../../../middleware/mongoose'

const handler = async (req,res) => {
    const id = req.query.Id
    const cart = await Cart.findOne({user_id:id})
    if(cart)
    {
        const mp = {}
        cart.orderlist.forEach(item=>{
            if(mp[item.product_id]) mp[item.product_id]++;
            else mp[item.product_id] = 1;
        })
        var ans1 = []
        var ans2 = []
        for(var m in mp)
        {
            const product = await Product.findOne({_id:m})
            ans1.push(product);
            ans2.push(mp[m])
        }
        var ans = {ans1,ans2}
        // console.log(ans)
        res.status(200).json(ans)
    }
    else 
    {
        res.status(200).json([])
    }
}

export default connectDb(handler)