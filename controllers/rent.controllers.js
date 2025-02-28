const router = require('express').Router()
const Rent = require('../models/Rent.model')
const User = require('../models/User.model')

const GetAllRents = (req, res) => {
  Rent.find()
    .populate('owner')
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err))
}

const RentDetails = (req, res, next) => {
  const { rent_id } = req.params
  Rent.findById(rent_id)
    .populate('owner')
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err))
}

const SaveRent = (req, res, next) => {
  const { _id: owner } = req.payload
  const { title, description, price, imageUrl, lat, lng, city } = req.body
  ;(location = {
    type: 'Point',
    coordinates: [lat, lng],
  }),
    Rent.create({ title, description, price, imageUrl, location, owner, city })
      .then((response) => res.json(response))
      .catch((err) => next(err))
}

const GetOwnRents = (req, res, next) => {
  const { _id: owner } = req.payload
  Rent.find({ owner })
    .populate('owner')
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err))
}

const GetUserRents = (req, res, next) => {
  const { user_id } = req.params
  Rent.find({ owner: user_id })
    .populate('owner')
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err))
}

const DeleteRent = (req, res, next) => {
  const { rent_id: rent } = req.params

  Rent.findByIdAndDelete(rent)
    .then((response) => res.json(response))
    .catch((err) => next(err))
}

const LikeRent = (req, res, next) => {
  const { rent_id } = req.params

  User.findByIdAndUpdate(req.payload._id, { $addToSet: { favRent: rent_id } })
    .then((response) => res.json(response))
    .catch((err) => next(err))
}

const UnlikedRent = (req, res, next) => {
  const { rent_id } = req.params

  User.findByIdAndUpdate(req.payload._id, { $pull: { favRent: rent_id } })
    .then((response) => res.json(response))
    .catch((err) => next(err))
}

const GetLikeRent = (req, res, next) => {
  User.findById(req.payload._id)
    .populate({
      path: 'favRent',
      populate: {
        path: 'owner',
      },
    })
    .then((response) => {
      res.json(response.favRent)
    })
    .catch((err) => next(err))
}

const RentEdit = (req, res, next) => {
  const { _id: owner } = req.payload
  const { rent_id } = req.params
  const { title, description, price, imageUrl, lat, lng, _id, city } = req.body

  ;(location = {
    type: 'Point',
    coordinates: [lat, lng],
  }),
    Rent.findByIdAndUpdate(rent_id, {
      title,
      description,
      price,
      imageUrl,
      location,
      owner,
      _id,
      city,
    })
      .then((response) => res.json(response))
      .catch((err) => next(err))
}

const Enable = (req, res, next) => {
  const { rent_id } = req.params

  Rent.findByIdAndUpdate(rent_id, { state: 'Enable' })
    .then((response) => res.json(response))
    .catch((err) => next(err))
}

const Disable = (req, res, next) => {
  const { rent_id } = req.params

  Rent.findByIdAndUpdate(rent_id, { state: 'Disable' })
    .then((response) => res.json(response))
    .catch((err) => next(err))
}

module.exports = {
  GetAllRents,
  RentDetails,
  SaveRent,
  GetOwnRents,
  GetUserRents,
  LikeRent,
  UnlikedRent,
  GetLikeRent,
  RentEdit,
  DeleteRent,
  Enable,
  Disable,
}
