var express   = require('express');
var candidate = express.Router();

// middleware that is specific to this router
candidate.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

var lista= {lista:{'nome':["pedro","carlo","Joana"]}}
candidate.get('/lista_candidato',function (req, res) {
  console.log("fill");
  res.render('list_candidate',lista);
});
// define the home page route
candidate.get('/formulario_candidato', function(req, res) {
  res.render('add_candidate');
  res.end();
});
candidate.route('/')
      .get(function() {
        console.log("ok");
      })
      .post(function () {
        console.log("err");
      })
      .delete(function() {
        console.log("del");
      })

module.exports = candidate;
