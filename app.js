const express = require('express');
const app = express();
const logger = require('morgan')
app.use(logger('dev'))
// app.use(express.static('public'));
app.use('/static', express.static('public'));
// 示例中间件函数
const middleware = (req, res, next) => {
  // ... 进行一些操作
  console.log('in')
  next(); // 调用 next() ，Express 将调用处理链中下一个中间件函数。
  console.log('out')
};

// 用 use() 为所有的路由和动词添加该函数
// app.use(middleware);

// 用 use() 为一个特定的路由添加该函数
// app.use('/someroute', middleware);

// 为一个特定的 HTTP 动词和路由添加该函数
app.get('/', middleware);

const wiki = require('./routes/wiki.js');
app.use('/wiki', wiki);
app.listen(3000, (req, res, next) => {
  console.log('示例应用正在监听 3000 端口!')
})