const express = require("express")
const router = express.Router()
const {UserSchema} = require("../schemas")
const DB = require("../db")
const bodyParser = require("body-parser")
const cors = require("cors")
const database = new DB('mongodb://localhost/teste')

router.use(bodyParser.json())
router.use(cors({
  credentials: true,
  origin: true
}))
router.post('/', async (req, res) => {
  console.log('Post request on ' + req.url)
  console.log(req.body)
  try {
    database.connect()
    await UserSchema.create(req.body)
    res.status(200)
    res.json(req.body)
  } catch(e) {
    res.status(400)
    res.send("Error: " + e.message)
    console.log
  }
})

router.get('/', (req, res) => {
  console.log('gegeeet')
  console.log(req.body)
  res.json({"agora": "sim"})
})

module.exports = router