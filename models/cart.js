const mongoose = require('mongoose');
const products=require('./product');
const schema = mongoose.Schema; 
const user=require('./user');

const cart = new schema({
    
    user_id: { type: mongoose.Types.ObjectId, ref:`${user}` },
    orderlist: [
        {
            product_id: {
                type: mongoose.Types.ObjectId, ref: `${products}`,
            }
        }
    ]
})

mongoose.models = {}

module.exports = mongoose.model('Cart', cart);