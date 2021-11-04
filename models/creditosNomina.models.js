'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const creditosNominaSchema = new Schema({
  nombreEmpresa: {type: String, require: true},
  fechaIngreso: { type: Date, require: true },
  message: { type: String, require: true },
  status: { type: Boolean, require: true },
  id_user: { type: String, require: true },
  created_at: {type: Date, default: Date.now()}
}, {
  versionKey: false
})

module.exports = mongoose.model('creditosNomina', creditosNominaSchema)