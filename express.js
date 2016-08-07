var express = require('express'),
    app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(3000);
