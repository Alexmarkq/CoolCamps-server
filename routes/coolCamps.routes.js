const router = require("express").Router()
const Rent = require("./../models/Rent.model")
const User = require('./../models/User.model')

const { isAuthenticated } = require("../middleware/jwt.middleware")


router.get("/getAllRents", (req, res) => {

    Rent
        .find()
        .populate("owner")
        .select({ title: 1, description: 1, imageUrl: 1, owner: 1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/rent/:rent_id", (req, res, next) => {

    const { rent_id } = req.params

    Rent
        .findById(rent_id)
        .populate("owner")
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/saveRent", isAuthenticated, (req, res, next) => {

    const { _id: owner } = req.payload

    const { title, description, price, imageUrl, lat, lng } = req.body

    location = {
        type: 'Point',
        coordinates: [lat, lng]
    },

        Rent
            .create({ title, description, price, imageUrl, location, owner })
            .then(response => res.json(response))
            .catch(err => next(err))
})


router.get("/getOwnRents", isAuthenticated, (req, res, next) => {

    const { _id: owner } = req.payload

    Rent
        .find({ owner })
        .select({ title: 1, description: 1, imageUrl: 1, owner: 1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/likeRent/:rent_id", isAuthenticated, (req, res, next) => {

    const { rent_id } = req.params

    User
        .findByIdAndUpdate(req.payload._id, { $addToSet: { favRent: rent_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post("/unlikeRent/:rent_id", isAuthenticated, (req, res, next) => {

    const { rent_id } = req.params

    User
        .findByIdAndUpdate(req.payload._id, { $pull: { favRent: rent_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get("/getLikedRent", isAuthenticated, (req, res, next) => {


    User
        .findById(req.payload._id)
        .populate('favRent')
        .then(response => { res.json(response.favRent) })
        .catch(err => next(err))
})

router.put("/rent/edit/:rent_id", isAuthenticated, (req, res, next) => {

    const { rent_id } = req.params
    const { title, description, price, imageUrl, lat, lng } = req.body

    location = {
        type: 'Point',
        coordinates: [lat, lng]
    },

        Rent
            .findByIdAndUpdate(rent_id, { title, description, price, imageUrl, location })
            .then(response => res.json(response))
            .catch(err => next(err))
})

module.exports = router


