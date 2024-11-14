/*
 * @作者: NingBY
 * @Date: 2024-11-15 01:25:24
 */
import moment from "moment"
moment.locale('zh-cn')
const formatTime = {
    getTime: (date) => {
        return moment(date).format('YYYY/MM/DD')
    }
}

export default formatTime