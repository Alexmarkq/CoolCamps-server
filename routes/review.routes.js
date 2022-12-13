const express = require('express')

const { isAuthenticated } = require('../middleware/jwt.middleware')

const router = express.Router()

const { createReview, showReview } = require('../controllers/review.controllers')


router.post("/crear/:rent_id", isAuthenticated, createReview)

router.get("/showreviews/:rent_id", isAuthenticated, showReview)

module.exports = router
