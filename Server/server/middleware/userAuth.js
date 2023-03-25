import _ from "lodash";
import jwt_decode from "jwt-decode";
import Jwt from "jsonwebtoken";

export async function authenticateToken(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = Jwt.verify(token, process.env.SECRET_KEY);
    req.user = user;
    const data = jwt_decode(token);
    console.log(data, "sdfas");
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }
  next();
}
export async function generateToken(payload) {
  var token;
  if (!_.isNull(payload)) {
    token = Jwt.sign(payload, process.env.SECRET_KEY);
  }
  return token;
}

export async function bcryptEncrypt(password) {
  var salt = 10;
  var pass;
  if (!_.isNull(password)) {
    pass = bcrypt.hashSync(password, salt);
  }
  return pass;
}
