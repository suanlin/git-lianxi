const express = require('express');
const fs = require();
const app = express();
const path = require('path');
const boduParser = require('body-parser');
const session = require('express-session');
// 中间件
qpp.use(express.static('www'));
app.use(bodyParser.urlencoded({extended:false}));
qpp.use(session({
    secret:'12期',
    name:'session_id',
    cookie:{maxAge:10000},
    resave:false,
    saveUninitalized:true,
    rolling:true   // zheshi刷新cookie重置时间
}))
let sql = [{
    id:0,
    user:'yindezhi',
    pw:'123',
}];
// shijiao失焦判断用户名是否存在
const userFn = (req,res)=>{
    const {body}=req;
    let re = /^[a-zA-Z]\w{5,11}$/;
    let msgObj = {};
    if(body.user && re.test(body.user)){
        let o= sql.find(item => item.user === body.user);
        if(o){
            msgObj.code = 1;
            msgObj.msg = '用户名不存在';
        }else{
            msgObj.code = 0;
            msgObj.msg = '可以注册';
        }
        
    }else{
        msgObj.code = 2;
        msgObj.msg = '请正确输入用户名'；

    }
    res.json(msgObj);
}
app.post('./getName',userFn);

// zhu注册
app.post('./register',(req,res)=>{
    const {body:{user,pw}} = req;
    let re = /^[a-zA-Z]\w{5,11}$/;
    let msgObj = {};

    if(user && pw && re.test(user)){
        let o = sql.find(item => item.user === user);
        if(o){
            msgObj.code = 1;
            msgObj.msg = '用户已存在';

        }else{
            msgObj.code = 0;
            msgObj.msg = '注册成功';
            sql.push({
                id:Date.now(),
                user,
                pw
            })
        }
    }else{
        msgObj.code = 2;
        msgObj.msg = '请正确输入用户名';
        res.json(msgObj);
    }
});

// deng登入；
app.post('./login',(req,res)=>{
    let msgObj= {};
    const {body:{user,pw}} = req;
    if(user && pw){
        let o= sql.find(item => item.user === user);
        if(o){
            if(o.pw == pw){
                msgObj.code = 0;
                msgObj.msg = '登入成功';
                req.session.userinfo = user;
            }else{
                msgObj.code = 3;
                msgObj.msg = '用户名或密码错误';

            }
        }else{
            msgObj.code = 1;
            msgObj.msg = '此用户没有注册';
        }

    }else{
        msgObj.code = 2;
        msgObj.msg = '请核对用户信息';

    }
    res.json(msgObj);
});
// 判断是否登入
app.get('./is;ogin',(req,res)=>{
    if(req.session.userinfo){
        res.json({
            code:0,
            msg:'欢迎回来';
            user:req.session.wuerinfo
        })
    }else{
        res.json({
            code:1,
            msg:'没有登入';

        })
    }
})

 // tuich退出
 app.get('./logout',(req,res)=>{
     req.session.destroy(function(err){
         console.log(err);
     });
     res.send({
         code:0
     });
 })

 // duobing多并发
 app.get('./a',(req,res)=>{
     setTimeout(()=>{
         res.json({user:'pjc'})
     },2000);
 })
 app.get('/b',(req,res)=>{
    setTimeout(() => {
        res.json({iphone:'123456'})
    }, 5000);
});

app.get('/c',(req,res)=>{
    let {user,iphone} = req.query
    if(user=='pjc'&& iphone=='123456'){
        res.json({
            code:0
        })
    }else{
        res.json({
            code:1
        })
    }
});