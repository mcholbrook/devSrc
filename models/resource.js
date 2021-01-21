const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const noteSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref:'User'},
  userName: String,
  content: String
}, {timestamps:true})

const resourceSchema = new Schema({
  title: {type: String},
  description: {type: String},
  url: {type: String},
  tag: String,
  creatorName: String,
  creator: {type: Schema.Types.ObjectId, ref:'User'},
  upvotes: {type: String, default: 0},
  notes: [noteSchema]
}, {timestamps:true})

resourceSchema.index({
  title: "text",
  description: "text",
  tag: "text",
});

module.exports = mongoose.model('Resource', resourceSchema)