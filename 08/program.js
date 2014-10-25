var http = require('http');

http.get(process.argv[2], function(response){
  response.setEncoding('utf8')
  allContent = ''
  response.on('data', function(data){
    allContent += data
  })
  response.on('error', console.log)
  response.on('end', function(){
    console.log(allContent.length + '\n' + allContent)
  })
})