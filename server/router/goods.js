const express = require('express');
const router = express.Router();

const mongo = require('../utils/mongo');
const {formatData} = require('../utils/tools')



// get /api/goods 查询所有商品
router.get('/', async (req, res) => {
    let {page,size,sort="add_time"} = req.query;
    const skip = (page-1)*size; //0
    const limit = size*1; //10

    
    // 处理排序参数
    sort = sort.split(',');// ['price'],['price','-1']
    // 查询所有商品
    const result = await mongo.find('goods',{},{skip,limit,sort})

    res.send(result);
})

router.delete('/:id',async (req,res)=>{
    const {id} = req.params;

    try{
        const result = await mongo.remove('goods',{_id:id})
        res.send('success')

    }catch(err){
        res.send('fail');
    }
})

router.post('/',async (req,res)=>{
    let {name,price,weight,counts,time,src} = req.body;
    console.log(req.body)
    let result;
    try{
        result = await mongo.insert('goods',{name,price,weight,counts,time,src});
        res.send(formatData());
    }catch(err){
        res.send(forMatData({code:0}))
    }
    // console.log(result);
    res.send(result);
})

// 获取商品信息
router.get('/:id',async(req,res)=>{
    const {id} = req.params;
    // console.log('id=',id)
    const result = await mongo.find('goods',{_id:id},{
    });
    res.send(formatData({data:result[0]}));
}),

router.put('/:id',async (req,res)=>{
    const {id} = req.params;
    // console.log(id)
    let {name,price,weight,counts,time,src} = req.body;


    let newData = {name,price,weight,counts,time,src}
    console.log(newData)
    try{
        await mongo.update('goods',{_id:id},{$set:newData});
        res.send(formatData({data:{_id:id,...newData}}))
    }catch(err){
        // console.log('err=',err);
        res.send(formatData({code:0}))
    }  
})

module.exports = router;