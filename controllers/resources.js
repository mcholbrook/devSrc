const Resource = require('../models/resource')

module.exports = {
    create,
    search,
    updateResource,
    deleteResource,
    deleteFromSaved,
    randomResources,

}

// Create a resource from user profile
function create(req, res) {
    req.body.creator = req.user._id
    Resource.create(req.body)
    .then(resource => {res.json(resource)})
    .catch(err => {res.json(err)})

}

// Search a resource by text in the search bar
function search(req, res) {
    Resource.createIndexes({
        title: 'text',
        description: 'text',
        tag: 'text'
    }) 
    Resource.find({
        $text: {
            $search: `${req.body}`
        }
    })
    .then(resource => {res.json(resource)})
    .catch(err => {res.json(err)})
}

// Return random resources on landing page, and on load for the search page
function randomResources(req, res) {
    Resource.aggregate([
        {$sample: { size: 6 }}
    ])
    .then(resources => {res.json(resources)})
    .catch(err => {res.json(err)})
}

// Updateing resource for admins
function updateResource(req, res) {
    Resource.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(resource => {res.json(resource)})
    .catch(err => {res.json(err)})
}

// Delete resource for admins
function deleteResource(req, res) {
    Resource.findByIdAndDelete(req.params.id)
    .then(resource => {res.json(resource)})
    .catch(err => {res.json(err)})

}

// User can delete from collection
function deleteFromSaved(req, res) {
    let idx = req.user.savedItems.findIndex((r) => r._id === req.params.id)
    req.user.savedItems.splice(idx, 1)
    req.user.save()
    .then(() => {res.json()})
    .catch(err => {res.json(err)})
}





