const router = require('express').Router();
const flashcardCtrl = require('../controllers/flashcards');


router.use(require('../config/auth'));
router.get('/', checkAuth, flashcardCtrl.index)
router.post('/', checkAuth, flashcardCtrl.create)
router.put('/:id', checkAuth, flashcardCtrl.deleteCard)
router.put('/:id', checkAuth, flashcardCtrl.update)



function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;