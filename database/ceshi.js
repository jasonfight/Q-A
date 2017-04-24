var db = require('./index')

var jason = new db.User({
  account:'123',
  nickname:'guooa'
});

jason.save(function(err){
  if (err) console.log(err);
  console.log('保存成功');
});
