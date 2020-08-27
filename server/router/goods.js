const express = require('express');
const router = express.Router();

const mongo = require('../utils/mongo');



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
    let {name,price,weight,counts,time} = req.body;
    console.log(req.body)
    let result;
    try{
        result = await mongo.insert('goods',{name,price,weight,counts,time});
        res.send(formatData());
    }catch(err){
        // res.send(forMatData({code:0}))
    }
    res.send(result);
})

module.exports = router;