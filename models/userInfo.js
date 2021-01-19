const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userInfo = new Schema({
    github: String,
    linkedIn: String,
    website: String
  })

  module.exports = mongoose.model('UserProfile', userInfo)