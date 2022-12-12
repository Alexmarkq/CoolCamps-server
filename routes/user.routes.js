const router = require("express").Router()
const User = require("./../models/User.model")
const { Delete } = require('../controllers/user.controllers')

router.delete("/deleteUser/:user_id", Delete)

module.exports = router