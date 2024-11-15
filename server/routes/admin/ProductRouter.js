/*
 * @作者: NingBY
 * @Date: 2024-11-16 00:42:43
 */
var express = require('express')
const ProductController = require('../../controllers/admin/ProductController')
var ProductRouter = express.Router()
// 图片上传
const multer  = require('multer')
const upload = multer({ dest: 'public/productuploads/' })

// 涉及文件上传, 普通post不行, 需要加上 multer中间件
ProductRouter.post('/adminapi/product/add', upload.single('file'), ProductController.add)
ProductRouter.get('/adminapi/product/list', ProductController.getList)
ProductRouter.post('/adminapi/product/list', upload.single('file'),  ProductController.updateList)
ProductRouter.get('/adminapi/product/list/:id', ProductController.getList)
ProductRouter.delete('/adminapi/product/list/:id', ProductController.delList)

module.exports = ProductRouter