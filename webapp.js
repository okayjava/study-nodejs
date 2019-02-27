require('date-utils');

const http = require('http');
const o = require('os');
const hostname = '127.0.0.1';
const port = 3001;
var dt = new Date();
var cors = require('cors');
var express = require('express');
var app = express();

var allowCORS = function(req, res, next) {
  console.log(req.headers.host);
  console.log(req.url);
  console.log(req.method);
 
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    (req.method === 'OPTIONS') ?
      res.send(200) :
      next();
 
};

app.use(allowCORS);

app.get('/', function (req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    var data = "";
    data = o.platform();
    data += "\r\n";
    data += 'hello world\n';
    data += "\r\n";
    data += dt.toFormat('YYYY-MM-DD HH24:MI:SS');
    console.log(data);

    var out1 = Object();
    out1.job = 'code1'
    out1.date = dt.toFormat('YYYY-MM-DD HH24:MI:SS');

    var output = new Object();
    output.head = out1;


    out1 = {};
    out1.data1 = '111111';
    out1.data2 = '222222';
    out1.data3 = '33333';
    out1.data4 = 444444;
    output.body = out1;
    data = JSON.stringify(output);
    console.log(data);

    res.end(data);
});

app.listen(port, function()  {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('CORS-enabled web server listening on port 80')

});