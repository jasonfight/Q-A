var express = require('express');
var router = express.Router();

// var io = require('socket.io');

var db = require('../database');
/* GET home page. */
router.get('/', function(req, res, next) {

  //socket.io怎样在框架中引用.
  // io.on('connection',function(socket){
  //   socket.on('qutstion',function(){
  //     socket.emit('q_res','hello')
  //   });
  //
  // });
  res.render('index', { title: 'Express' });
});


router.get('/register',function(req,res,next){
    var account = req.query.content
    if (account == 'jason') {
    }
    res.render('register',{title:'hello',message:'hello'})
})

router.get('/login',function(req,res,next){
  res.render('login')
})

router.get('/about',function(err,res,next){
  res.render('about');
})

module.exports = router;
