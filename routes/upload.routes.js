const router = require("express").Router()

const uploader = require('./../config/cloudinary.config')

const { Image } = require('../controllers/upload.controllers')

router.post('/image', uploader.single('imageData'), Image)

module.exports = router