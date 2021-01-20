const router = require("express").Router();
const userInfoCtrl = require("../controllers/userInfo");

// Protected Routes
router.post("/", userInfoCtrl.createProfile);
router.use(require("../config/auth"));
router.put('/:id', checkAuth, userInfoCtrl.updateProfile)


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;