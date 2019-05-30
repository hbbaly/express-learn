const express = require('express');
const app = express();
const path = require('path')
// 设置包含模板的文件夹（'views'）
app.set('views', path.join(__dirname, 'views'));
// 设置视图引擎，比如'jade'
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: '关于狗狗', message: '狗狗很牛！' });
});

app.listen(3000, (req, res, next) => {
  console.log('示例应用正在监听 3000 端口!')
})