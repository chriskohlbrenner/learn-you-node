var fs = require('fs');
var contents = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
console.log(contents);




// var fs = require('fs')

// var fileContents = fs.readFileSync(process.argv[2]).toString()
// console.log(fileContents.split("\n").length - 1);