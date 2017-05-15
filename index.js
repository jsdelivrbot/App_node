var express              = require('express');
var path                 = require('path');
var candidate_controller = require('./router/Candidate');
var app                  = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/candidate', candidate_controller);


app.get('/', function(req, res) {
  res.render('index', {
    title: 'Menu Principal'
  });
});

exports.return =function (req, res) {
  res.render('index',{
    title: 'Menu Principal'
  });
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
