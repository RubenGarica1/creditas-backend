const creditosAutosModels = require("../models/creditosAutos.models")

const createCreditoAuto = async ({marca, modelo, precio}, _id) => {
  try {
    let status=false
    let message=""
    if(precio>=200000 && precio<=500000) {
      message="La solicitud fue procesada exitosamente"
      status= true
    } else {
      message="Por el momento la solicitud no puede se procesada por que no aplica en nuestros rangos de valuos"
      status=false
    }
    const creditoAuto = creditosAutosModels()
    creditoAuto.marca = marca
    creditoAuto.modelo = modelo
    creditoAuto.precio = precio
    creditoAuto.message = message
    creditoAuto.status = status
    creditoAuto.id_user = _id
    await creditoAuto.save()
    return {status: 200, message: creditoAuto.message}
  } catch (error) {
    return {status: 500, error}
  }
}

module.exports = { createCreditoAuto }