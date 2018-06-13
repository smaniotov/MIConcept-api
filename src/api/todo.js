const express = require("express")
const router = express.Router()
const cors = require("cors")

router.use(cors({
	origin: true,
	credentials: true
}))

router.get('/', (req, res) => {
	res.status(200)
	res.json({test: true})
})

router.post('/', (req, res) => {

})

router.get('/:id', (req, res) => {

})

module.exports = router