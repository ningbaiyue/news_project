/*
 * @作者: NingBY
 * @Date: 2024-11-16 00:51:17
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Product模型===>Products集合

const ProductType = {
    title: String,
    introduction: String,
    detail: String,
    cover: String, // 封面
    editTime: Date
}
const ProductModel = mongoose.model('product', new Schema(ProductType))

module.exports = ProductModel