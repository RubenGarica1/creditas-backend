const creditosCasasModels = require("../models/creditosCasas.models")
const copomex = require("../utils/copomex")

const createCreditoCasa = async ({domicilioGarantia, valorDomicilio, codigoPostal}, _id) => {
  try {
    const res = await copomex.codigoPostal(codigoPostal)
    let ciudades = await res.data
    let estadovalidation = false
    for(let i=0; i<ciudades.length;i++){
      let ciudad = ciudades[i].response.ciudad
      let estado = ciudades[i].response.estado
      if(ciudad=="Ciudad de México"|| estado=="Ciudad de México") {
        estadovalidation=true
      }
    }
    const creditoCasa = creditosCasasModels()
      if(estadovalidation){
        creditoCasa.message = "La solicitud fue procesada excitosamente"
        creditoCasa.status = true
      } else {
        creditoCasa.message = "Por el momento la solicitud no puede se procesada por que no aplica en nuestros rangos de valuos"
        creditoCasa.status = false
      }
    creditoCasa.domicilioGarantia = domicilioGarantia
    creditoCasa.valorDomicilio = valorDomicilio
    creditoCasa.codigoPostal = codigoPostal
    creditoCasa.id_user = _id
    await creditoCasa.save()
    return {status: 200, message: creditoCasa.message}
  } catch (error) {
    return {status: 500, error}
  }
}

module.exports = { createCreditoCasa }