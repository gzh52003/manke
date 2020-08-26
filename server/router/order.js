const express = require('express');
const router = express.Router();

const mongo = require('../utils/mongo');

// const {formatData} = require('../utils/tools')

// get /api/goods 查询所有商品
router.get('/', async (req, res) => {
    let {page=1,size=10} = req.query;
    const skip = (page-1)*size; //0
    const limit = size*1; //10

    
    // 处理排序参数
    // sort = sort.split(',');// ['price'],['price','-1']
    // 查询所有商品
    const result = await mongo.find('order',{},{skip,limit})

    res.send({data:result});
})
//删除数据
router.delete('/:id',async (req,res)=>{
    
    const {id} = req.params;
//    console.log(id)
    
    try{
   
        const result = await mongo.remove('order',{_id:id})
     
        res.send("success")

    }catch(err){
        res.send("fail")
    }

})
 //更新订单数据
router.put('/:id',async (req,res)=>{
    const id = req.params;
  
    
    // let _id = id;
    console.log(id)
    const cadd = req.body;
    console.log(cadd)

    // let cadd = {cadd}
    
    // console.log( cadd)
    // let newcadd = []
    // newcadd.push(cadd)
    // console.log(newcadd);
   
    try{
      await mongo.update('order',{_id:id},{$set:cadd});
        // console.log(data);
        res.send({id,cadd})
    }catch(err){
        console.log('err=',err);
        res.send("fail")
    }
    
    
})

//获取单个订单信息
// router.get('/:id',async(req,res)=>{
//     const  {id}= req.params;
//     console.log('id=',id)

//     const result = await mongo.find('order',{_id:id},{
//         // 过滤字段：password不返回前端
       
//     });
//     // console.log(result)
//     res.send(result);
// })
module.exports = router;