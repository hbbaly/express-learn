const express = require('express');
const app = express();
const wiki = require('./routes/wiki.js');
app.use('/wiki', wiki);
app.listen(3000, (req, res, next) => {
  console.log('示例应用正在监听 3000 端口!')
})