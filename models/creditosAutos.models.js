'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const creditosAutosSchema = new Schema({
  marca: {type: String, require: true},
  modelo: { type: String, require: true },
  precio: { type: Number, require: true },
  message: { type: String, require: true },
  status: { type: Boolean, require: true },
  id_user: { type: String, require: true },
  created_at: {type: Date, default: Date.now()}
}, {
  versionKey: false
})

module.exports = mongoose.model('creditosAutos', creditosAutosSchema)