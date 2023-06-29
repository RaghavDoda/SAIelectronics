const express = require('express')
const router = express.Router()
const {
    getProducts,
    addProduct,
    removeProduct
} = require('../controllers/cartController')

// const {requireAuth} = require('../middleware/requireAuth')

//get all product
router.get('/' ,getProducts)

//add a new product
router.post('/:id' ,addProduct)

//remove a product
router.delete('/:id' ,removeProduct)

module.exports = router