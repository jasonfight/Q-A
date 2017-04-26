var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/Q_A';
mongoose.connect(url);
var db = mongoose.connection;
db.once('open',function(){
  console.log('数据库连接成功');
});

var Schema = mongoose.Schema;

var userSchema = new Schema({
  account:String,//账号
  nickname:String,//昵称
  password:String,//密码
  Q_list:[{q_id:String,title:String}],//问题列表
  A_list:[{q_id:String,title:String}],//回答列表
  F_list:[{u_id:String,nickname:String}],//关注列表
  like_num:Number,//点赞数
  be_liked_num:Number,//被点赞数
  col_list:[{q_id:String,title:String}],//收藏列表
  report_or_be_reported:{report:Number,be_reported:Number},//举报或被举报次数
  acticity:Number,//活跃度
  information:{age:Number,//个人信息
              tel:String,
              email:String,
              gender:String,
             }
});

module.exports.User = mongoose.model('User',userSchema);


var Q_Schema = new Schema({
  title:String,//标题
  content:String,//内容
  author:{u_id:String,nickname:String},//作者
  P_date:{type:Date,default:Date.now},//发表时间
  tag:Array,//标签
  reading_num:Number,//浏览数量
  adopted:Boolean,//是否被采纳
  final_reply_or_modify_time:Date,//最后修改或回答时间
  A_list:[{A_id:String}],//回答列表
  be_liked_num:Number//被点赞数量
});

module.exports.Question = mongoose.model('Question',Q_Schema);



var A_Schema = new Schema({
  content:String,//回答内容
  date:Date,//回答日期
  respondent:[{u_id:String,nickname:String}],//回答人
  adopted:Boolean,//是否被采纳
  be_liked_num:Number,//被点赞数
  que:[{q_id:String,title:String}],//问题列表
});

module.exports.Answer = mongoose.model('Answer',A_Schema);

var Tag_Schema = new Schema({
  title:String,//标签所在分类
  tag:String,//标签名
  information:String,//标签简介
});

module.exports.Tag = mongoose.model('Tag',Tag_Schema);
