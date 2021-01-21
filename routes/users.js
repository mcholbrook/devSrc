const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/", checkAuth, usersCtrl.index);
router.put("/update", checkAuth, usersCtrl.update)
router.get("/profile", checkAuth, usersCtrl.showMyProfile)
// router.put("/profile", checkAuth, usersCtrl.update)
router.get("/profile/:id", checkAuth, usersCtrl.show)
router.get("/updatedUser/:id", checkAuth, usersCtrl.getUpdatedUser)


/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;