var express = require('express');
var app = express();
var https = require('https');

app.use(express.static(__dirname));

app.get('/', function(request, response) {
    console.log('app.get slash');

    var file = fs.readFileSync('index.html',{encoding:'utf8'});
  rsponse.send(file)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
