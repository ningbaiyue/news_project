/*
 * @作者: NingBY
 * @Date: 2024-11-19 03:06:39
 */
const ProductService = require("../../services/web/ProductService")

const ProductController = {

    getList:async (req,res)=>{
        const result =await ProductService.getList({ _id:req.params.id })
        res.send({
            ActionType:"OK",
            data:result
        })
    }
}

module.exports = ProductController