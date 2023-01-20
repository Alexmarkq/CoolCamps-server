const router = require("express").Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")
const { GetAllRents, RentDetails, SaveRent, GetOwnRents, LikeRent,
    UnlikedRent, GetLikeRent, RentEdit, DeleteRent, Enable, Disable } = require("../controllers/rent.controllers")

router.get("/getAllRents", GetAllRents)

router.get("/rent/:rent_id", RentDetails)

router.post("/saveRent", isAuthenticated, SaveRent)

router.get("/getOwnRents", isAuthenticated, GetOwnRents)

router.delete("/deleteRent/:rent_id", isAuthenticated, DeleteRent)

router.post("/likeRent/:rent_id", isAuthenticated, LikeRent)

router.post("/unlikeRent/:rent_id", isAuthenticated, UnlikedRent)

router.get("/getLikedRent", isAuthenticated, GetLikeRent)

router.put("/rent/edit/:rent_id", isAuthenticated, RentEdit)

router.post("/enable/:rent_id", isAuthenticated, Enable)

router.post("/disable/:rent_id", isAuthenticated, Disable)



module.exports = router


