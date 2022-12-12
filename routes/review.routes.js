const express = require('express')

const { isAuthenticated } = require('../middleware/jwt.middleware')

const router = express.Router()

const { createReview } = require('../controllers/review.controllers')

router.post("/crear/:rent_id", isAuthenticated, createReview)

