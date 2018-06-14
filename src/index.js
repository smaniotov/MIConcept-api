const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const {
  TodoApi,
  UserApi
} = require("./api")
const {port, hostname} = require("./config")

app.use(cors({
  credentials: true,
  origin: true
}))
// app.use(bodyParser.json())
app.use('/todo', TodoApi)
app.use('/user', UserApi)

app.listen(port, hostname, 10, () => {
  console.log(`Server running on port: ${port}`)
})