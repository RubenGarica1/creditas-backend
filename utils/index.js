const jwt = require('jsonwebtoken')
const moment = require('moment')
const config = require("../config");
const SECRET_TOKEN = config.get().SECRET_TOKEN;

function createToken (email, _id) {
  const payload = {
    email: email,
    sub: _id,
    iat: moment().unix(),
    exp: moment().add(1, 'day').unix()
  }
  return jwt.sign(JSON.stringify(payload), SECRET_TOKEN)
}

function verifyToken (token) {
  return jwt.verify(token, SECRET_TOKEN, function(err, decoded) {
    if (err) {
      return {message: 'invalid token', status: false}
    } else{
      return  {decoded, status: true}
    }
  });
}

module.exports = {createToken, verifyToken}