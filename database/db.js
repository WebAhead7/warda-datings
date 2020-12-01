var MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const url = process.env.dataBaseMongoUrl;
const dbName = "webahead7";
const collectionName = "posts";
function insertPost(post, callback) {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db(dbName);

    if (err) callback(err);

    dbo.collection(collectionName).insertOne(post, function (err, res) {
      if (err) {
        callback(err);
      } else {
        db.close();
        callback(null);
      }
    });
  });
}
function deletetPost(id, callback) {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db(dbName);

    dbo.collection(collectionName).deleteOne({ _d: id }, function (err, obj) {
      if (err) {
        callback(err);
      } else {
        db.close();
        callback(null);
      }
    });
  });
}
function getUserPosts(userId, callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(err, null);
    } else {
      var dbo = db.db(dbName);
      dbo
        .collection(collectionName)
        .find({}, { projection: { ownerId: userId } })
        .toArray(function (err, result) {
          if (err) {
            callback(err, null);
          } else {
            db.close();
            callback(null, result);
          }
        });
    }
  });
}
function getPost(id, callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(err, null);
    } else {
      var dbo = db.db(dbName);
      dbo
        .collection(collectionName)
        .find({}, { projection: { _id: id } })
        .toArray(function (err, result) {
          if (err) {
            callback(err, null);
          } else {
            db.close();
            callback(null, result);
          }
        });
    }
  });
}
function getPosts(callback) {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db(dbName);

    if (err) {
      callback(err, null);
    } else {
      dbo
        .collection(collectionName)
        .find({})
        .toArray(function (err, result) {
          if (err) {
            callback(err, null);
          } else {
            db.close();
            callback(null, result);
          }
        });
    }
  });
}

function updatePost(id, newPost, callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(err, null);
    } else {
      var dbo = db.db(dbName);
      var myquery = { _id: id };
      var newvalues = { $set: newPost };
      dbo
        .collection(collectionName)
        .updateOne(myquery, newvalues, function (err, res) {
          if (err) {
            callback(err);
          } else {
            db.close();
            callback(null);
          }
        });
    }
  });
}

module.exports = {
  insertPost,
  deletetPost,
  getPosts,
  getPost,
  updatePost,
  getUserPosts,
};
