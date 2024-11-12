/*
 * @作者: NingBY
 * @Date: 2024-11-12 00:41:23
 */
const UserService = require("../../services/admin/UserService")

const UserController = {
    login: async (req, res) => {
        console.log(req.body);
        var result = await UserService.login(req.body)

        if (result.length === 0) {
            res.send({
                code: '-1',
                error: '用户名密码不匹配'
            })
        } else {
            res.send({
                ActionType: 'OK'
            })
        }
    }
}

module.exports = UserController