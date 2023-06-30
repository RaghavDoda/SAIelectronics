import Cart from '../../../../../models/cart'
import connectDb from '../../../../../middleware/mongoose'

const handler = async (req,res) => {
    const cart = await Cart.findOne({user_id:_id})
    if(cart)
    {
        var ans = []
        var i=0;
        while( i<cart.orderlist.length)
        {
            var obj = {_id:cart.orderlist[i].product_id};
            if(req.query.id) obj.company = req.query.id
            if(req.query.product) obj.title = req.query.product 
            if(req.query.price) obj.price = { $lte: req.query.price }
            const product = await Product.findOne(obj)
            ans.push(product);
            i++;
        }
        const set = async (ans) =>{
            const l = ans.length;
            const temp = {}
            for(let i = 0 ; i< l ; i++){
                if(ans[i]===null)
                {
                    ans[i]=temp;
                }
                for(let j = i+1 ; j < l  ; j++){
                    if(ans[j]===null)
                    {
                        ans[j]=temp;
                    }
                    if(ans[i].key === ans[j].key && i!==j && ans[i]!=temp){
                        ans[i].quantity++;
                        ans[j]=temp;
                    }
                }
            }
            var result = []
            for(let i=0; i<l; i++)
            {
                if(ans[i]!==temp)
                {
                    result.push(ans[i])
                }
            }
            return (result)
        }
        const result = await set(ans)
        res.status(200).json(result)
    }
    else 
    {
        res.status(200).json([])
    }
}

export default connectDb(handler)