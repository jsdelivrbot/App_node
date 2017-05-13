var express      = require('express');
var path         = require('path');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.get('/', function(req, res) {
  res.render('index', {
    title: 'Menu Principal'
  });
});

app.get('/formulario_candidato', function(req, res) {
  res.render('add_candidate');
  // res.sendStatus(200);
  // res.end();
});
var lista= {lista:{'nome':["pedro","carlo","Joana"]}}
app.get('/lista_candidato',function (req, res) {
  console.log("fill");
  res.render('list_candidate',lista)
});

app.route('/candidate')
      .get(function() {
        console.log("ok");
      })
      .post(function () {
        console.log("err");
      })
      .delete(function() {
        console.log("del");
      })
var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("http://localhost:"+port)
})
