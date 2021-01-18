const Resource = require('../models/resource')

module.exports = {
    addNote
}


function addNote(req, res) {
    Resource.findById(req.params.id, (resource) => {
        resource.notes.push(req.body)
        resource.save()
        .then(resource => {res.json(resource)})
        .catch(err => res.json(err))
    })
}