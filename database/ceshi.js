var db = require('./index')

// var jason = new db.User({
//   account:'user',
//   nickname:'jason',
//   password:'123',
//   Q_list:{title:'question.title',content:'q.content'},
//   like_num:3
// });

// jason.save(function(err){
//   if (err) console.log(err);
//   console.log('保存成功');
// });
var  user2 = new db.User({
  account:'user2',
  nickname:'guohao',
  password:'123',
  Q_list:{q_id:1111111111,content:'q.content'},
  A_list:{title:'Answer.title',content:'Answer.content'},
  like_num:3
});
user2.save(function(err){
  if (err) console.log(err);
  console.log('保存成功');
})
