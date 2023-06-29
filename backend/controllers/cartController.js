const Cart = require('../model/Cart')
const jwt = require('jsonwebtoken')
const Product = require('../model/Product')

// Get all products  
const getProducts = async (req,res) =>{
     
    const { authorization } = req.headers
    const token = authorization.split(' ')[1]
    const { _id } = jwt.verify(token, process.env.SECRET)
    const cart = await Cart.findOne({user_id:_id})
    // const cart = true
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
        // console.log(ans)
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
            // console.log(ans)
            
            var result = []
            for(let i=0; i<l; i++)
            {
                if(ans[i]!==temp)
                {
                    result.push(ans[i])
                }
            }
            // console.log(result)

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

 
// add a new product
const addProduct = async (req,res) => {
    
    const id = req.params.id;
    console.log(id)
    // add doc to db
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


// remove a product 
const removeProduct = async (req,res) => {
    
    const id = req.params.id;

    // add doc to db
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

module.exports = {
    addProduct,
    removeProduct,
    getProducts
}   