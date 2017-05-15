var pg = require('pg');
pg.defaults.ssl = true;

exports.example = function(resp) {
  console.log(resp.params);
}

exports.show_candidates = function(res, req, callback) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM candidate', function(err, result) {
      done();
      callback(result);
    });
  });
}
exports.save_candidate = function(req, res) {
  pg.connect(process.env.DATABASE_URL, function(err, client) {
    client.query("INSERT INTO candidate(name,cpf,function) VALUES($1::varchar,$2::varchar,$3::varchar)", [req.body.nome, req.body.cpf, req.body.function]);
  });
}

exports.delete_candidate = function(req, res) {
  try {
    pg.connect(process.env.DATABASE_URL, function(err, client) {
      client.query("DELETE FROM candidate WHERE id= $1::int", [req.body.id]);
      if (err) {
        console.log(err);
      }
    });
  } catch(err){
    console.log(err);
  }

}
