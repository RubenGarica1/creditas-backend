'use strict'

const services = require('../utils')

async function isAuth (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'No tienes autorización' })
  }
  const token = req.headers.authorization
  try {
    let res= await services.verifyToken(token)
    next()
  } catch (error) {
    res.status(400).send({ message: 'expiro el token' })
    
  }
}

module.exports = isAuth