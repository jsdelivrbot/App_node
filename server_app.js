var express = require('express');
var app     = express();
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "sensor.htm" );
})
app.get('/sensor', function (req, res) {
  //  res.send('Hello World');
   console.log('Hello World');
});
app.post('/sensor',function (req, res) {
  // res.send('Ok');
  console.log('add');
});

app.delete('/sensor',function (req, res) {
  // res.send("BBB");
  console.log('delete');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("teste", host, port)
})
