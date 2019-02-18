require('date-utils');

const http = require('http');
const o = require('os');
const hostname = '127.0.0.1';
const port = 3001;
var dt = new Date();


const server = http.createServer((req, res) => {

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

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});