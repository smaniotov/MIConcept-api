const express = require("express")
const app = express()
const {todo} = require("./api")
const hostname = 'local.miconcept.com'
const port = '9000'

console.log(`Server running on port: ${port}`)

app.use('/todo', todo)

app.listen(port, hostname)