const router = require('express').Router()
const { userDelete, getUser } = require('../controllers/user.controllers')

router.get('/:user_id', getUser)
router.delete('/delete/:user_id', userDelete)

module.exports = router
