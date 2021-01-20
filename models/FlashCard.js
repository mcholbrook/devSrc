const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flashCardSchema = new Schema({
    frontSide: String,
    backSide: String,
    tag: String,
    creator: {type: Schema.Types.ObjectId, ref: "User"}
  }, {timestamps:true})


module.exports = mongoose.model("FlashCard", flashCardSchema)