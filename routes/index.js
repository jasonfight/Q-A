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

  res.render('register')
})


router.get('/about',function(err,res,next){
  res.render('about');
})

module.exports = router;
