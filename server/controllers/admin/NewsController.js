/*
 * @作者: NingBY
 * @Date: 2024-11-15 00:23:48
 */
const NewsService = require("../../services/admin/NewsService")

const NewsController = {
    add: async (req, res) => {
        // console.log(req.file,req.body)
        const cover = req.file ? `/newsuploads/${req.file.filename}` : ''
        const { title, content, category, isPublish } = req.body
        // 调用 service进行添加
        await NewsService.add({
            title,
            content,
            category: Number(category),
            isPublish: Number(isPublish),
            cover,
            editTime: new Date()
        })
        res.send({
            ActionType: 'OK'
        })
    }
}

module.exports = NewsController