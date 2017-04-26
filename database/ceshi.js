var db = require('./index')


//用户集合存储测试.
// var  user1 = new db.User({
//   account:'jason',
//   nickname:'guohao',
//   password:'123',
//   Q_list:[{q_id:1111111111,title:'提问1'},{q_id:222222222,title:'提问2'}],
//   A_list:{q_id:222222,title:'问题2'},
//   F_list:{u_id:111111111,nickname:'kobe'},
//   like_num:3,
//   be_liked_num:4,
//   col_list:[{q_id:11111111,title:'收藏1'},{q_id:22222,title:'收藏2'}],
//   report_or_be_reported:{report:1,be_reported:2},
//   acticity:100,
//   information:{ age:20,
//                 tel:0100000000,
//                 email:'user1@126.com',
//                 gender:'male'
//               }
// });
// user1.save(function(err){
//   if (err) console.log(err);
//   console.log('保存成功');
// });


db.User.find({password:123},function(err,data){
  console.log(data);
});



//问题集合存储测试
// var que = new db.Question({
//   title:'问题1的标题',
//   content:'问题1的内容',
//   author:{u_id:1111111,nickname:'jason'},
//   P_date:'2017-02-21',
//   tag:['python','html'],
//   reading_num:100,
//   adopted:true,
//   final_reply_or_modify_time:'2017-02-21',
//   A_list:[{A_id:11111},{A_id:12121212}],
//   be_liked_num:200
// });
//
// que.save(function(err){
//   if (err) console.log(err);
//   console.log('问题列表保存成功');
// })
