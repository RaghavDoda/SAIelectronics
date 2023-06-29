require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const productRouts = require('./routes/products')
const userRouts = require('./routes/user')
const cartRoutes = require('./routes/cart')

//express app
const app = express();

//middleware
app.use(express.json())
app.use((req,res,next)=>{
        console.log(req.path,req.method)
        next()
})

//routes
app.use('/products',productRouts)
app.use('/user',userRouts)
app.use('/cart',cartRoutes)



//connect to db
// mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
        
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log(`connected to db & listening to the port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err);
})