/*
 * @作者: NingBY
 * @Date: 2024-11-19 03:08:33
 */
const ProductModel = require("../../models/ProductModel")

const ProductService = {

    getList:async ({ _id })=>{
        return _id ? ProductModel.find({ _id }): ProductModel.find()
    } 
   
}

module.exports = ProductService