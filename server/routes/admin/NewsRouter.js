/*
 * @作者: NingBY
 * @Date: 2024-11-15 00:22:54
 */
var express = require('express')
const NewsController = require('../../controllers/admin/NewsController')
var NewsRouter = express.Router()
// 图片上传
const multer  = require('multer')
const upload = multer({ dest: 'public/newsuploads/' })

// 涉及文件上传, 普通post不行, 需要加上 multer中间件
NewsRouter.post('/adminapi/news/add', upload.single('file'), NewsController.add)
NewsRouter.get('/adminapi/news/list', NewsController.getList)

module.exports = NewsRouter