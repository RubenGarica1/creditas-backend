'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  nombre: {type: String, require: true, unique: true},
  celular: { type: String, require: true },
  email: { type: String, require: true, unique: true},
  rfc: {type: String, require: true},
  domicilio: {type: String, require: true},
  created_at: {type: Date, default: Date.now()}
}, {
  versionKey: false
})

module.exports = mongoose.model('user', UserSchema)