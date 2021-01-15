const router = require('express').Router();
const notesCtrl = require('../controllers/notes');

// Protected Routes
router.use(require('../config/auth'));
router.post('/search/:id/notes', checkAuth, notesCtrl.createNote)


function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;