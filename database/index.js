var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/Q_A';
mongoose.connect(url);
var db = mongoose.connection;
db.once('open',function(){
  console.log('数据库连接成功');
});

var Schema = mongoose.Schema;

var userSchema = new Schema({
  account:String,
  nickname:String,
  password:String,
  Q_list:Object,
  A_list:Object,
  F_list:Object,
  like_num:Number,
  be_liked_num:Number,
  col_list:Object,
  cmt_list:Object,
  report_or_be_reported:Object,
  acticity:Number
});

module.exports.User = mongoose.model('User',userSchema);

var Q_Schema = new Schema({
  title:String,
  content:String,
  author:String,
  P_date:{type:Date,default:Date.now},
  tag:Array,
  reading_num:Number,
  reply_num:Number,
  vote_num:Number,
  Solved:Boolean,
  final_reply_or_modify_time:Date,
  respondent:Array
});
module.exports.Question = mongoose.model('Question',Q_Schema);

var A_Schema = new Schema({
  content:String,
  reply_date:Date,
  respondent:Object,
  adopt:Boolean,
  be_liked_num:Number,
  Q_id:Schema.Types.ObjectId,
});

module.exports.Answer = mongoose.model('Answer',A_Schema);
