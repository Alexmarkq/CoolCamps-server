module.exports = (app) => {
  app.use((req, res, next) => {
    res.status(404).json({ message: 'No encontrado' })
  })

  app.use((err, req, res, next) => {
    if (err.code && err.code === 11000) {
      res
        .status(409)
        .json({
          errorMessages: ['El registro ya se encuentra presente en la BD'],
        })
    }

    if (err.name === 'ValidationError') {
      let errorMessages = Object.values(err.errors).map((el) => el.message)
      res.status(409).json({ errorMessages })
    }

    console.error('ERROR', req.method, req.path, err)

    if (!res.headersSent) {
      res
        .status(500)
        .json({ message: 'Internal server error. Check the server console' })
    }
  })
}
