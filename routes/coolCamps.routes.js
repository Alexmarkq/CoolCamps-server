const router = require("express").Router()
const Rent = require("./../models/Rent.model")

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

router.get("/getOwnRents", isAuthenticated, (req, res, next) => {

    const { _id: owner } = req.payload

    Rent
        .find({ owner })
        .select({ title: 1, description: 1, imageUrl: 1, owner: 1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// router.get("/rent/:rent_id/getFavorites", isAuthenticated, (req, res, next) => {

//     const { user_id } = req.params

//     User
//         .findById(user_id)
//         .populate('favPlaces')
//         .then(nomad => {
//             res.render('user/fav', nomad)
//         })

//         .catch(err => console.log(err))

// })

// router.post('/:user_id/fav-places/:place_id', (req, res, next) => {

//     const { user_id } = req.params
//     const { place_id } = req.params

//     User
//         .findByIdAndUpdate(user_id, { "$addToSet": { "favPlaces": place_id } })
//         .then(() => res.redirect('/explore/places'))
// })

module.exports = router


