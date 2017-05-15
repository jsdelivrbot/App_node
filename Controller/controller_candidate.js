var model_candidate      = require('../model/model_candidate');
var express              = require('express');
var path                 = require('path');
var controller_candidate = express.Router();

controller_candidate.use(express.static(path.join(__dirname, '../public')))

exports.form_candidate = function(req, res) {
  res.render('add_candidate');
  res.end();
}

exports.list_candidate = function (req, res) {
  model_candidate.show_candidates(req,res,function(result) {
    res.render('list_candidate',{'lista':result.rows});
    res.end();

  });
}

exports.add_candidate = function (req, res, next) {
  console.log(req.body);
  model_candidate.save_candidate(req, res);
  next();
}

exports.remove_candidate = function(req, res, next){
  model_candidate.delete_candidate(req, res);
  next();
}
