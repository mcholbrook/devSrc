const Resource = require('../models/resource')

module.exports = {
    addNote
}

function addNote(req, res) {
    Resource.findById(req.params.id)
    .then((resource) => {
        console.log(resource)
        console.log(req.body)
        resource.notes.push(req.body)
        resource.save()
        console.log(resource)
    })
        .then(resource => {res.json(resource)})
        .catch(err => res.json(err))
}