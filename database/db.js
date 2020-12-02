var MongoClient = require("mongodb").MongoClient;
ObjectId = require("mongodb").ObjectID;

const url = process.env.dataBaseMongoUrl;
const dbName = "webahead7";
const collectionPosts = "posts";
const collectionUsers = "users";

function insertUser(user, callback) {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db(dbName);

    if (err) callback(err);

    dbo.collection(collectionUsers).insertOne(user, function (err, res) {
      if (err) {
        callback(err);
      } else {
        db.close();
        callback(null);
      }
    });
  });
}
function getUsersWithCondition(condition, callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(err, null);
    } else {
      var dbo = db.db(dbName);
      dbo
        .collection(collectionUsers)
        .find(condition)
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
function getUser(condition, callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(err, null);
    } else {
      var dbo = db.db(dbName);
      dbo
        .collection(collectionUsers)
        .findOne(condition, function (err, result) {
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

function insertPost(post, callback) {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db(dbName);

    if (err) callback(err);

    dbo.collection(collectionPosts).insertOne(post, function (err, res) {
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

    dbo
      .collection(collectionPosts)
      .deleteOne({ _id: new ObjectId(id) }, function (err, obj) {
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
        .collection(collectionPosts)
        .find({ ownerId: userId })
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
        .collection(collectionPosts)
        .find({ _id: new ObjectId(id) })
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
        .collection(collectionPosts)
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
function getUsers(callback) {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db(dbName);

    if (err) {
      callback(err, null);
    } else {
      dbo
        .collection(collectionUsers)
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
      var myquery = { _id: new ObjectId(id) };
      var newvalues = { $set: newPost };
      dbo
        .collection(collectionPosts)
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
  insertUser,
  getUser,
  getUsers,
  getUsersWithCondition,
};
