const userApplications = require("../applications/user.applications")

const createUserController = async (req, res) => {
  let response = await userApplications.createCredito(
    req.body.nombre,
    req.body.celular,
    req.body.email,
    req.body.rfc,
    req.body.domicilio,
    req.body.typeCredito,
    req.body.dataCredito)
    if(response.status==200) {
      res.status(200).send({  status: 'ok', message: response.message })
    } else {
      res.status(404).send(`error inesperado`)
    }
}

module.exports = {createUserController}