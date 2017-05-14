var express              = require('express');
var path                 = require('path');
var candidate_controller = require('./router/Candidate');
var app                  = express();


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/candidate', candidate_controller);


app.get('/', function(req, res) {
  res.render('index', {
    title: 'Menu Principal'
  });
});

app.get('/teste',function(req,res) {
  res.send("teste");
})
var server = app.listen(5000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("http://localhost:"+port)
})
