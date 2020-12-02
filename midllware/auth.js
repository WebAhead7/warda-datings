const db = require("../database/db");
const { ObjectID } = require("mongodb");

const jwt = require("jsonwebtoken");
function verifyUser(req, res, next) {
  const SECRET = process.env.JWT_SECRET;

  const auth = req.headers.authorization;
  if (!auth) {
    const error = new Error("Authorization header required");
    error.status = 400;
    next(error);
  }
  const token = auth.replace("Bearer ", "");
  try {
    const data = jwt.verify(token, SECRET);
    db.getUser({ _id: new ObjectID(data.user) }, function (err, result) {
      if (err) {
        next(err);
      } else {
        if (result) {
          req.user = result;
          next();
        } else {
          next(err);
        }
      }
    });
  } catch (_error) {
    const error = new Error("Invalid token");
    error.status = 401;
    next(error);
  }
}
module.exports = { verifyUser };
