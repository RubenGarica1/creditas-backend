const express = require('express')
const cors = require('cors');
const app = express()
const api = require('./routes')
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');

const DB_MONGO = config.get().DB_MONGO;
const API_PORT = config.get().API_PORT;
const URL_MONGO = config.get().URL_MONGO;

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(morgan('dev'))
app.use("/api", api)
app.get('/', function(req, res) {
  res.send('not found!');
});
app.listen(API_PORT, () => {
  mongoose.connect(URL_MONGO + DB_MONGO, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
      console.log(err)
      console.log(config.port)
      return console.log(`${config.port} error al conoctar a la base de datos: ${err}`);
    }
    console.log('conexion a la base de datos ')
  })
  console.log('listening on '+ API_PORT)
})

module.exports = app