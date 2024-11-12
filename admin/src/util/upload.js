/*
 * @作者: NingBY
 * @Date: 2024-11-13 01:59:58
 */
import axios from 'axios'

function upload(path, userForm) {
    const params = new FormData()
    for (let i in userForm) {
        params.append(i, userForm[i])
    }
    // console.log(params)
    return axios.post(path, params, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(res => res.data)
}

export default upload