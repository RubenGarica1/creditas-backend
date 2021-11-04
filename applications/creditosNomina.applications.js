const creditosNominaModels = require("../models/creditosNomina.models")
const moment = require("moment")
const createCreditoNomina = async ({nombreEmpresa, fechaIngreso, message,status},_id) => {
  try {
    var inicio = moment().diff(moment(fechaIngreso).format("DD/MM/YYYY"),"months", true)
    const creditoNomina = creditosNominaModels()
      if(inicio>14) {
        creditoNomina.message = "La solicitud fue procesada excitosamente"
        creditoNomina.status = true
      } else {
        creditoNomina.message = "Por el momento la solicitud no puede se procesada por que no aplica en nuestros rangos de valuos"
        creditoNomina.status = false
      }
    creditoNomina.nombreEmpresa = nombreEmpresa
    creditoNomina.fechaIngreso = fechaIngreso
    await creditoNomina.save()
    return {status: 200, message: creditoNomina.message}
  } catch (error) {
    return {status: 500, error}
  }
}

module.exports = { createCreditoNomina }