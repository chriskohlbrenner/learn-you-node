http = require('http');
http.createServer(function(request, response){
  response.writeHead(200);
  response.end("What's up?");
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/')
