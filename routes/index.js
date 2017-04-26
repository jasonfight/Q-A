var express = require('express');
var router = express.Router();
var db = require('../database');

var session = require('express-session');
var bcrypt = require('bcrypt');

const salt = 10;
var app = express();

app.use(session({
  resave:true,
  saveUninitialized:false,
  secret:'secret',
  cookie:{
    maxAge:1000*60*30
  }
}));



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index')
});

//登录验证页面
router.post('/',function(req,res,next){

    var account = req.body.account;//前端传过来的用户名
    var password = req.body.password;//前端传过来的密码

    db.User.findOne({account:account},function(err,data){
      if (data){
        bcrypt.compare(password,data.password,function(err,hash){
            console.log(hash);
            if(hash){

              console.log(req.session,'=================');
              // req.session.user = account;
              req.session.user = account;
              res.redirect('/index');
            }else{
              // req.session.messages = '密码错误,请重新输入';
              res.redirect('/login');
            }
        })
      }else{
        req.session.messages = '账号不存在,请重新输入';
        res.redirect('/login');
      }

      // if (data != null && account == data.account && password == data.password) {
      //     res.render('index')
      // }else{
      //     res.render('login',{info:'账号密码错误,请重新输入'})
      // }

    });
})
router.post('/register',function(req,res){
  console.log('heheheeheh');
  var user = new db.User(req.body);  // NOTE: ???? req.body 有什么用
  console.log(user); //可能是数据库中的字段名

  bcrypt.hash(req.body.password,salt,function(err,hash){
    console.log(hash);
    user.password = hash;
    user.save(function(err){
      res.redirect('/login');
    })
  })
})

router.get('/register',function(req,res,next){
  res.render('register')
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


router.get('/login',function(req,res,next){
  res.render('login',{info:''})
})

router.get('/error',function(req,res,next){
  res.render('error');
})

module.exports = router;
