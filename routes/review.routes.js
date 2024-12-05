const express = require('express')

const { isAuthenticated } = require('../middleware/jwt.middleware')

const router = express.Router()

const { createReview, showReview, deleteReview } = require('../controllers/review.controllers')


router.post("/create/:rent_id", isAuthenticated, createReview)

router.get("/showreviews/:rent_id", isAuthenticated, showReview)

router.delete("/deleteReview/:rent_id", isAuthenticated, deleteReview)

module.exports = router
