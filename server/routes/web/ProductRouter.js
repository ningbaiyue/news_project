/*
 * @作者: NingBY
 * @Date: 2024-11-19 03:05:54
 */
var express = require('express');
const ProductController = require('../../controllers/web/ProductController');
var ProductRouter = express.Router();

ProductRouter.get("/webapi/product/list",ProductController.getList)

module.exports = ProductRouter