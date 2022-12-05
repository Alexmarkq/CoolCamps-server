module.exports = app => {
    const coolCampsRoutes = require("./coolCamps.routes")
    app.use("/api/coolCamps", coolCampsRoutes)
}