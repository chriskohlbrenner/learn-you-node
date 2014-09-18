var fs = require('fs');
fs.readdir(process.argv[2], function(err,data){
  if (err) throw err;
  for (var i = 0; i < data.length; i++) {
    split = data[i].split('.')
    if (split.length > 1 && split[split.length - 1] == process.argv[3]) {
      console.log(data[i])
    }
  };
})