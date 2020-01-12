var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("maticdb");
  var query = { address: "Park Lane 38" };
  dbo.collection("blocks").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 