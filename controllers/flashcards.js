// bring in dependencies 

// define exports

// define functions for add, index, edit and delete

const User = require("../models/user");

module.exports = {
  index,
  create,
  update,
  deleteCard
}

function index(req, res){
  User.findById(req.user._id)
  .populate('flashCards')
  .then((flashCards) => {res.json(flashCards)})
  .catch((err) => {res.json(err)})
}

function create(req, res){
  const flashCard = req.body
  User.findById(req.user._id)
  .then(user => {
    user.flashCards.push(flashCard)
    user.save()
  })
  .then((user) => res.json(user))


}

function update(req, res){

}

function deleteCard(req, res){

}