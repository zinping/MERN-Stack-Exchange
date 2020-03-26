const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'yt-ideas';

let db = null;

exports.getClient = async () => {
  return new Promise((resolve, reject) => {
    if (!db) {
      // Use connect method to connect to the server
      MongoClient.connect(
        url,
        { useUnifiedTopology: true, useNewUrlParser: true },
        function(err, client) {
          assert.equal(null, err);
          console.log("Connected successfully to server");
          db = client.db(dbName);
          resolve(db);
        }
      );
    } else {
      resolve(db);
    }
  });
};

exports.close = () => {
  client.close();
}