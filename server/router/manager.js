const express = require('express');
const router = express.Router();
//const query = require('../utils/mysql');
const mongo = require('../utils/mongo');
const {formatData,md5} = require('../utils/tools')

router.get('/',async (req,res)=>{
    const {page,size} = req.query;
    const limit = size*1;
    const skip = (page-1)*size;
    const result = await mongo.find('manager',{},{limit,skip,field:{password:false}})
    res.send(formatData({data:result}));
})

router.get('/age',async(req,res)=>{
    const {miage,maage} = req.query;
    const result=await mongo.findByage('manager',miage,maage)
    res.send(formatData({data:result}))
})

router.delete('/:id',async (req,res)=>{
    const {id} = req.params;

    try{
        await mongo.remove('manager',{_id:id});
        res.send(formatData())
    }catch(err){
        res.send(formatData({code:0}))
    }
    
    
})

// 获取单个用户信息、
router.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const result = await mongo.find('manager',{_id:id},{
        // 过滤字段：password不返回前端
        field:{password:false}
    });
    res.send(formatData({data:result[0]}));
})

router.put('/:id',async (req,res)=>{
    const {id} = req.params;
    let {password,age,gender} = req.body;


    let newData = {age,gender}
    if(password){
        password = md5(password);
        newData.password = password
    }

    try{
        await mongo.update('manager',{_id:id},{$set:newData});
        res.send(formatData({data:{_id:id,...newData}}))
    }catch(err){
        // console.log('err=',err);
        res.send(formatData({code:0}))
    }
    
    
})
module.exports = router;




