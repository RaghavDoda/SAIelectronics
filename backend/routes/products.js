const express = require('express')
const router = express.Router()
const {
    createProduct,
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')
// const {requireAuth} = require('../middleware/requireAuth')

//require auth for all workouts routes
// router.use(requireAuth)

//Get all products
router.get('/',getProducts)
 
//GET a single product 
router.get('/:id',getProduct)

//POST a new product
router.post('/',createProduct)

//DELETE a product
router.delete('/:id',deleteProduct)

//Update a product
router.patch('/:id',updateProduct)

module.exports = router