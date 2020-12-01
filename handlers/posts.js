const db = require("../database/db");

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
      res.status(204).send(req.body);
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
  // const gender = req.params.gender;
  // db.getPosts(function (err, result) {
  //   if (err) {
  //     next(err);
  //   } else {
  //      result.map(function (post) {
  //     });
  //   }
  // });
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
