const router = require('express').Router();
const flashcardCtrl = require('../controllers/flashcards');


router.get('/:id', flashcardCtrl.index)
router.use(require('../config/auth'));
router.post('/', checkAuth, flashcardCtrl.create)
router.delete('/:id', checkAuth, flashcardCtrl.deleteCard)
router.put('/:id', checkAuth, flashcardCtrl.updateCard)



function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;