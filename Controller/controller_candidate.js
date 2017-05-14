var model_candidate      = require('../model/model_candidate');
var express              = require('express');
var path                 = require('path');
var controller_candidate = express.Router();

controller_candidate.use(express.static(path.join(__dirname, '../public')))

exports.form_candidate = function(req, res) {
  // model_candidate.example(req);
  res.render('add_candidate');
  res.end();
}
var lista = {};
lista['nome'] = ["pedro","claudio"];
exports.list_candidate = function (req, res) {
  model_candidate.show_candidates(req,res,function(result) {
    console.log(result);
    res.render('list_candidate',{'lista':lista});
    res.end();
  });

}

exports.add_candidate = function (req, res) {
  console.log("bin",req.body);
  res.render('index');
}
