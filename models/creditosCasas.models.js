'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const creditosCasasSchema = new Schema({
  domicilioGarantia: {type: String, require: true},
  valorDomicilio: { type: String, require: true },
  codigoPostal: { type: Number, require: true },
  message: { type: String, require: true },
  status: { type: Boolean, require: true },
  id_user: { type: String, require: true },
  created_at: {type: Date, default: Date.now()}
}, {
  versionKey: false
})

module.exports = mongoose.model('creditosCasas', creditosCasasSchema)