const router = require('express').Router()
const { isAuthenticated } = require('./../middleware/jwt.middleware')
const { SignUp, Login, Verify } = require('../controllers/auth.controllers')


router.post('/signup', SignUp)

router.post('/login', Login)

router.get('/verify', isAuthenticated, Verify)


module.exports = router