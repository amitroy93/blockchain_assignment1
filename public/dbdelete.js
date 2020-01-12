var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/maticdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("maticdb");
  dbo.collection("bl0cks").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
}); 