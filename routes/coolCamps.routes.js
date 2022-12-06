const router = require("express").Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")
const Rent = require("./../models/Rent.model")

router.get("/getAllRents", (req, res) => {

    Rent
        .find()
        .select({ title: 1, description: 1, imageUrl: 1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/rent/:rent_id", (req, res, next) => {

    const { rent_id } = req.params

    Rent
        .findById(rent_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/saveRent", (req, res) => {

    Rent
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router


