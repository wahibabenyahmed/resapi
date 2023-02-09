const { AddProduct, GetProduct, deleteProduct, updateProduct } = require("../controllers/controllers");

const express = require('express');
const { GetById } = require("../controllers/controllers");
const ProductRouter=express.Router();
ProductRouter.post('/add',AddProduct);
ProductRouter.get('/list',GetProduct);
ProductRouter.delete('/remove/:id',deleteProduct);
ProductRouter.put('/update/:id',updateProduct);
ProductRouter.get('/product/:id',GetById);

module.exports = ProductRouter