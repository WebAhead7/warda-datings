const { ObjectID } = require("mongodb");
const db = require("../database/db");
function getUsers(req, res, next) {
  db.getUsers(function (err, result) {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
}
function addUser(req, res, next) {
  db.insertUser(req.body, function (err) {
    if (err) {
      next(err);
    } else {
      res.status(201).send(req.body);
    }
  });
}
function getUser(req, res, next) {
  const id = req.params.id;
  db.getUser({ _id: new ObjectID(id) }, function (err, result) {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
}
function getUserByEmail(req, res, next) {
  const email = req.params.email;
  db.getUser({ email: email }, function (err, result) {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
}
function getUsersByGender(req, res, next) {
  const gender = req.params.gender;
  db.getUsersWithCondition({ gender: gender }, function (err, result) {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
}
module.exports = {
  getUser,
  addUser,
  getUsers,
  getUsersByGender,
  getUserByEmail,
};
