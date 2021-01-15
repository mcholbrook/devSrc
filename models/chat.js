const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
  title: {type: String, required: true},
  cardImage: {type: String, required: true},
  owner: {type: String, required: true}
}, {timestamps:true})

module.exports = mongoose.model('Chat', chatSchema)