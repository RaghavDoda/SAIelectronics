const Products = require('../model/Product')
const mongoose = require('mongoose')

// Get all products 
const getProducts = async (req,res) =>{
    // const user_id = req.user._id

    const products = await Products.find()
    res.status(200).json(products)
}
 
// Get a single product
const getProduct = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such product'})
    }
    const product = await Products.findById(id)
    if(!product){
        return res.status(404).json({error : 'No Such Product'})
    }
    res.status(200).json(product)
}

// Create new product
const createProduct = async (req,res) => {
    // const {title,price,details} =req.body

    // let emptyFields = []
    // if(!title){
    //     emptyFields.push('title')
    // }
    // if(!price){
    //     emptyFields.push('price')
    // }
    // if(!details){
    //     emptyFields.push('details')
    // }
    
    if(req.body.length > 0){
        return res.status(400).json({error: ' Please Fill in all the Fields',emptyFields})
    }
    // add doc to db
    try{
        const products = await Products.create(req.body)
        res.status(200).json(products)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// delete a product 
const deleteProduct = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such product'})
    }
    const product = await Products.findOneAndDelete({_id:id})
    if(!product){
        return res.status(404).json({error : 'No Such Product'})
    }
    res.status(200).json({mssg:"Product deleted successfully"})
}

// update a product
const updateProduct = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such product'})
    }
    const product = await Products.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!product){
        return res.status(404).json({error : 'No Such Product'})
    }
    res.status(200).json(product)
}


module.exports = {
    getProduct,
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
}