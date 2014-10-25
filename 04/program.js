var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, data){
  if (err) throw err;
  console.log(data.split('\n').length-1)
})

// var fs = require('fs')

// var fileContents = fs.readFile(process.argv[2], 'utf8', function(err, data){
//   if (err) throw err
//   else if (data) 
//     console.log(data.split("\n").length - 1);
// })