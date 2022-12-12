const router = require("express").Router()


const Image = (req, res) => {
    console.log(req.file)

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error cargando el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
}

module.exports = { Image }