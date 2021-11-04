const axios = require("axios")
const config = require('../config');

const TOKEN_COPOMEX = config.get().TOKEN_COPOMEX;

const codigoPostal = async (CP) => {
  let response = await axios.get(`https://api.copomex.com/query/info_cp/${CP}?token=${TOKEN_COPOMEX}`)
  return response
}

module.exports = {codigoPostal}