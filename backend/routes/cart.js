const express = require('express')
const router = express.Router()
const {
    getProducts,
    addProduct,
    removeProduct
} = require('../controllers/cartController')

const {requireAuth} = require('../middleware/requireAuth')

//get all product
router.get('/', requireAuth,getProducts)

//add a new product
router.post('/:id', requireAuth,addProduct)

//remove a product
router.delete('/:id', requireAuth,removeProduct)

module.exports = router