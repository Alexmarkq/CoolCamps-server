module.exports = app => {
    const coolCampsRoutes = require("./coolCamps.routes")
    app.use("/api/coolCamps", coolCampsRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

    // const postRoutes = require("./post.routes")
    // app.use("/api/post", postRoutes) 

    const uploadRoutes = require("./upload.routes")
    app.use("/api/upload", uploadRoutes)

}