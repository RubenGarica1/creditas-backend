const server = require("../index")
const chai = require("chai")
const chaiHttp = require("chai-http")

chai.should()
chai.use(chaiHttp)

describe('cliente', () => {
    describe('Nomina', () => {
    it('createSolicitud', (done) => {
      chai.request(server)
      .post('/api/user/create')
      .send({
        "nombre": "Ruben Garcia",
        "celular": "6671918647",
        "email": "me@rubengarcia.me",
        "rfc": "12345678",
        "domicilio": "calle 1",
        "typeCredito": "nomina",
        "dataCredito": {
            "nombreEmpresa":"kia",
            "fechaIngreso":"02/07/2021"
        }
      })
      .end((err, response) => {
        response.should.have.status(200)
      })
      done()
    })
  })
  describe('Auto', () => {
    it('createSolicitud', (done) => {
      chai.request(server)
      .post('/api/user/create')
      .send({
        "nombre": "Ruben Garcia",
        "celular": "6671918647",
        "email": "me@rubengarcia.me",
        "rfc": "12345678",
        "domicilio": "calle 1",
        "typeCredito": "auto",
        "dataCredito": {
            "marca":"kia",
            "modelo":"rio",
            "precio":"200010"
        }
      })
      .end((err, response) => {
        response.should.have.status(200)
      })
      done()
    })
  })
  describe('Casa', () => {
    it('createSolicitud', (done) => {
      chai.request(server)
      .post('/api/user/create')
      .send({
        "nombre": "Ruben Garcia",
        "celular": "6671918647",
        "email": "me@rubengarcia.me",
        "rfc": "12345678",
        "domicilio": "calle 1",
        "typeCredito": "casa",
        "dataCredito": {
            "domicilioGarantia":"kia",
            "valorDomicilio":200000,
            "codigoPostal":"80549"
        }
      })
      .end((err, response) => {
        response.should.have.status(200)
      })
      done()
    })
  })
})
