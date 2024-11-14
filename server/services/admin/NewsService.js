/*
 * @作者: NingBY
 * @Date: 2024-11-15 00:24:56
 */
const NewsModel = require('../../models/NewsModel')

const NewsService = {
    add: async ({ title, content, category, cover, isPublish, editTime }) => {
        return NewsModel.create({
            title, content, category, cover, isPublish, editTime
        })
    }
}

module.exports = NewsService