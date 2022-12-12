const express = require('express')

const Review = require('../models/Review.model')

const router = express.Router()

const createReview = (req, res, next) => {
    const { rent_id: rentReview } = req.params
    const { description, title } = req.body
    const { _id: owner } = req.payload
    Review
        .create({ description, title, rentReview, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    createReview
}