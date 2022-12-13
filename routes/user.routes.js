const router = require("express").Router()
const { userDelete } = require('../controllers/user.controllers')

router.delete("/delete/:user_id", userDelete)

module.exports = router