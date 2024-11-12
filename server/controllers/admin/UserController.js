/*
 * @作者: NingBY
 * @Date: 2024-11-12 00:41:23
 */
const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")
require('../../util/JWT')

const UserController = {
    login: async (req, res) => {
        // console.log(req.body);
        var result = await UserService.login(req.body)

        if (result.length === 0) {
            res.send({
                code: '-1',
                error: '用户名密码不匹配'
            })
        } else {
            // 生成token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, '1d')
            
            res.header('Authorization', token)
            res.send({
                ActionType: 'OK',
                data: {
                    username: result[0].username,
                    gender: result[0].gender ? result[0].gender : 0,  // 性别 ,0,1,2
                    introduction: result[0].introduction, // 简介
                    avatar: result[0].avatar,
                    role: result[0].role  // 管理员1 ,编辑2
                }
            })
        }
    },
    upload: async (req, res) => {
        // console.log(req.body, req.file)
        const { username, introduction, gender } = req.body
        const avatar = `/avataruploads/${req.file.filename}`
        const token = req.headers["authorization"].split(" ")[1]
        var payload = JWT.verify(token)
        // console.log(payload._id)
        // 调用service 模块更新 数据

        await UserService.upload({
            _id: payload._id,
            username,
            introduction,
            gender: Number(gender),
            avatar
        })
        res.send({
            ActionType: 'OK'
        })
    }
}

module.exports = UserController