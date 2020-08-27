const express = require('express');
const router = express.Router();
const { formatData} = require('../utils/tools');
const mongo = require('../utils/mongo');

// 登录
router.get('/', async (req, res) => {
    let { username, password} = req.query;
    console.log(req.query);
    let result = await mongo.find('manager', { username, password });
    console.log(result);
    if (result.length > 0) {      
        res.send(formatData({ data: result }));
    } else {
        res.send(formatData({ code: 0 }))
    }
})



module.exports = router;