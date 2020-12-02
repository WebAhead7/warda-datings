const { ObjectID } = require("mongodb");
const db = require("../database/db");
const users = require("./users");

function getPosts(req, res, next) {
  db.getPosts(function (err, result) {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
}

function getUserPosts(req, res, next) {
  db.getUserPosts(req.params.userId, function (err, result) {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
}
function deletePost(req, res, next) {
  db.deletetPost(req.params.id, function (err) {
    if (err) {
      next(err);
    } else {
      res.status(204).send();
    }
  });
}
function updatePost(req, res, next) {
  db.updatePost(req.params.id, req.body, function (err) {
    if (err) {
      next(err);
    } else {
      res.status(204).send(req.body);
    }
  });
}

function getPost(req, res, next) {
  db.getPost(req.params.id, function (err, result) {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
}

function addPost(req, res, next) {
  db.insertPost(req.body, function (err) {
    if (err) {
      next(err);
    } else {
      res.status(201).send(req.body);
    }
  });
}

function getPostsGender(req, res, next) {
  const gender = req.params.gender;
  db.getPosts(function (err, result) {
    if (err) {
      next(err);
    } else {
      let arr = [];
      if (result.length > 0) {
        result.map(function (el, index) {
          db.getUser(
            { gender: gender, _id: new ObjectID(el.ownerId) },
            function (err, r) {
              if (err) {
                next(err);
              } else {
                if (r.length > 0) {
                  arr.push(el);
                }
                if (index === result.length - 1) {
                  res.send(arr);
                }
              }
            }
          );
        });
      } else {
        res.send(arr);
      }
    }
  });
}

module.exports = {
  getPosts,
  getPost,
  getUserPosts,
  deletePost,
  updatePost,
  addPost,
  getPostsGender,
  getUserPosts,
};
