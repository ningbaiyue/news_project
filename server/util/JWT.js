/*
 * @作者: NingBY
 * @Date: 2024-11-12 17:43:54
 */
const jsonwebtoken = require('jsonwebtoken')
const secret = 'nby'
const JWT = {
    generate(value, exprires) {
        return jsonwebtoken.sign(value, secret, {
            expiresIn: exprires
        })
    },
    verify(token) {
        try {
            return jsonwebtoken.verify(token, secret)
        } catch (e) {
            return false
        }
    }
}

module.exports = JWT