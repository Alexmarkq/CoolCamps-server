const express = require('express')

const Review = require('../models/Review.model')

const router = express.Router()

const createReview = (req, res, next) => {
    const { rent_id: rentReview } = req.params
    const { description, title } = req.body
    const owner = req.payload._id


    Review
        .create({ description, title, rentReview, owner })
        .then(reviews => {
            res.json(reviews)
        })
        .catch(err => next(err))
}

const showReview = (req, res, next) => {
    const { rent_id: rentReview } = req.params

    Review
        .find({ rentReview })
        .then(reviews => {
            res.json(reviews)
        })
        .catch(err => next(err))
}

const deleteReview = (req, res, next) => {

    const { rent_id: rentReview } = req.params

    Review
        .findByIdAndDelete(rentReview)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    createReview, showReview, deleteReview
}