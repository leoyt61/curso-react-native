const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

consign()
    .then('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend executando na porta ${PORT}`)
})