const Resource = require('../models/resource')

module.exports = {
    addNote
}

function addNote(req, res) {
    Resource.findById(req.params.id)
    .then((resource) => {
        req.body.user = req.user._id
        resource.notes.push(req.body)
        resource.save()
        res.json(resource)
    })
    .catch(err => res.json(err))
}