const userModels = require("../models/user.models")
const bcrypt = require('bcryptjs');
const saltRounds = 15;
const creditoNominaApplication = require("./creditosNomina.applications")
const creditoCasaApplication = require("./creditosCasa.applications")
const creditoAutoApplication = require("./creditosAutos.applications")

const createUser = async (nombre, celular, email, rfc, domicilio) => {
  const newUser = userModels()
  newUser.nombre = nombre
  newUser.celular = celular
  newUser.email = email
  newUser.rfc = rfc
  newUser.domicilio = domicilio
  try {
    await newUser.save()
    return {status: 200, data}
  } catch (error) {
    return {status: 500, error}
  }
}

const createCredito = async (nombre, celular, email, rfc, domicilio, typeCredito, dataCredito) => {
  try {
    
    const crearUserApplication = await createUser(nombre, celular, email, rfc, domicilio)
    let data = await userModels.findOne({email})
    if(typeCredito=="Casa"){
      let response = await creditoCasaApplication.createCreditoCasa(dataCredito, data._id)
      return {status: 200, message: response.message}
    } else if (typeCredito=="Auto"){
      let response = await creditoAutoApplication.createCreditoAuto(dataCredito, data._id)
      return {status: 200, message: response.message}
    } else if (typeCredito=="Nomina"){
      let response = await creditoNominaApplication.createCreditoNomina(dataCredito, data._id)
      return {status: 200, message: response.message}
    }
  } catch (error) {
    return {status: 500, error}
  }
}

module.exports = {createUser, createCredito}