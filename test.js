var http = require('http');

http.get(process.argv[2], function (response, reject) {
  response.setEncoding('utf8')
  response.on('data', function(data){
    console.log(data);
  });
});