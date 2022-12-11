const router = require("express").Router()
const User = require("./../models/User.model")

router.delete("/deleteUser/:user_id", (req, res, next) => {
    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))

})

module.exports = router