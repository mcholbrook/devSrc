const UserInfo = require('../models/userInfo')

module.exports = {
    createProfile,
    updateProfile,
}

function createProfile (req, res) {
    UserInfo.create(req.body)
    .then((UserInfo) => res.json(UserInfo) )
}

function updateProfile (req, res) {
    UserInfo.findByIdAndUpdate(req.params.id, req.body, {next: true})
    .then((profile) => {
        res.json(profile)
    })
    .catch((err) => {
        res.json(err);
      });
}