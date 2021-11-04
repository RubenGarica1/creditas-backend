const userControllers = require("../controllers/user.controllers")
const express = require('express');
const app = express();

app.post("/user/create", userControllers.createUserController)


module.exports = app