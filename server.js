require('date-utils');
var express = require('express');
var app = express();
var bodyParse = require('body-parser');
var session = require('express-session');
var fs = require("fs");
global.GlobalValue = 'globalglobalglobal value';

// 라우터 파일 지정.
var router = require('./router/main')(app);

// View 템플릿 위치 지정
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 웹에 공개될 폴더 설정(like.. public_html)
app.use(express.static('public'));

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});