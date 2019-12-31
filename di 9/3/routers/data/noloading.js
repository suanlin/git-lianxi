const express = require('express');
const router = express.Router();
/* 
    router的根本不是localhost是noliading
*/ 
router.get('/',(req,res)=>{
    setTimeout(()=>{
        res.json({code:1})
    },3000);
});
module.exports = rputer;
// 导出路由