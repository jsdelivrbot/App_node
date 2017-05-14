var pg = require('pg');
pg.defaults.ssl = true;

exports.example = function(resp) {
  console.log(resp.params);
}

exports.show_candidates = function(res, req, callback) {
  var return_result;
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM candidate', function(err, result) {
      return_result = result
      callback(result);
    });
  });
  // return return_result;
}
exports.example_fill = function() {
  console.log("fill");
}
