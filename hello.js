// console.log("Hello World")
// console.log("Selamat datang di Node.js")

var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello <b>World</b>!</br></h1>');
    res.write('<h2><b><b/><u>Selamat datang di node js menggunakan server dengan alamat 3000 </u></h2>');
    res.write('<h3>Ini adalah halaman web pertama saya menggunakan node js</h3>');
    res.end();
}).listen(3000);
console.log('Server running at http://localhost:3000/');