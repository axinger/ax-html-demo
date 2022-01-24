const http = require('http')

http.createServer(function(req,resp){


    resp.writeHead(200,{'Content-Type':'text/html'})

    resp.end('<h1>nodejs hhh </h1>')

}).listen(8888)

console.log('http://127.0.0.1:8888');