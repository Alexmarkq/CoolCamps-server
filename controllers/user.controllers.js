const router = require('express').Router()
const User = require('./../models/User.model')
const Rent = require('./../models/Rent.model')

const userDelete = (req, res, next) => {
  const { user_id } = req.params
  User.findByIdAndDelete(user_id)
    .then((response) => res.json(response))
    .catch((err) => next(err))
}

const getUser = (req, res, next) => {
  const { user_id } = req.params
  User.findById(user_id)
    .populate('rents')
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' })
      }
      Rent.find({ owner: user_id })
        .then((rents) => {
          user.rents = rents
          res.json(user)
        })
        .catch((err) => next(err))
    })
    .catch((err) => next(err))
}

module.exports = { userDelete, getUser }
