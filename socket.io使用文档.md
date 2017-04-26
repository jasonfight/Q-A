## Node.js中使用socket.io方法

## 后端文件配置

### 删除www文件,使用app.js文件作为主文件.

### 在app.js 中监听3000端口:
引入http:

``` js
var http = reqquire('http').Server(app)
```
监听端口:

```js

http.listen(3000,function(){
	console.log('监听3000端口中');
});
```
### 引入 socket.io

```js
var io = require('socket.io')(http);
```

## 前端页面配置

引入socket.io

```html
<script src="https://cdn.bootcss.com/socket.io/1.7.3/socket.io.min.js"></script>

```
前段交互script代码:

```js
var socket = io();

socket.on('事件A',function(data){
	console.log(data.hello);
   })
socket.emit('事件B',{a:100});

```

### 后端交互代码

```js
io.on('connection',function(socket){
  socket.emit('事件A',{hello:'nihao'});
  socket.on('事件B',function(data){
    console.log(data);
  });
```
> 注意事项:所有的事件都要写在connection事件中,并且事件名不能重复,
