module.exports = app => {
    const coolCampsRoutes = require("./coolCamps.routes")
    app.use("/api/coolCamps", coolCampsRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

    const uploadRoutes = require("./upload.routes")
    app.use("/api/upload", uploadRoutes)

    const userRoutes = require("./user.routes")
    app.use("/api/user", userRoutes)

    // const reviewRoutes = require("./review.routes")
    // app.use("/api/review", reviewRoutes)

}