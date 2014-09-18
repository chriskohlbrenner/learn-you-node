module.exports = 
  function (directory, filter, callback){
    var path = require('path');
    var fs = require('fs');
    fs.readdir(directory, function(err, data){
      if (err) return callback(err);
      else{ 
        var temp = new Array();;
        for (var i=0; i<data.length; i++) {
          if( path.extname( data[i] ) == ("." + filter) ){ 
            temp.push( data[i] );
          }
        }
        return callback(null,temp);
      }
    });
  }