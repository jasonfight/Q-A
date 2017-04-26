var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.post('/',function(req,res,next){

    var account = req.body.account;//前端传过来的用户名
    var password = req.body.password;//前端传过来的密码
    console.log(account);
    console.log(password);
    db.User.findOne({account:account},function(err,data){

      if (data != null && account == data.account && password == data.password) {
          res.render('index')
      }else{
          res.render('login',{info:'账号密码错误,请重新输入'})
      }

    });

})
router.get('/tag',function(req,res,next){
  res.render('tag')
})

router.get('/Classification',function(req,res,next){
  res.render('Classification')
})

router.get('/personal',function(req,res,next){
  res.render('personal')
})

router.get('/answer',function(req,res,next){
  res.render('answer')
})

router.get('/problem',function(req,res,next){
  res.render('problem')
})

router.get('/register',function(req,res,next){
  res.render('register')
})

router.get('/login',function(req,res,next){
  res.render('login',{info:''})
})

router.get('/error',function(req,res,next){
  res.render('error');
})

module.exports = router;
