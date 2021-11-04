const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;
const app = require('../../index');

describe('test', () => {
  it('createSolicitud', (done) => {
    request(app)
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
      .end((err, res) => {
        expect(res.status).to.eq("ok");
        if (err) done(err);
        else done();
      })
  })
})
