const router = require('express').Router();
const resourcesCtrl = require('../controllers/resources');

// Protected Routes
router.get('/', resourcesCtrl.index)
router.get('/:id/myResources', resourcesCtrl.myResources)
router.use(require('../config/auth'));
router.post('/', checkAuth, resourcesCtrl.create);
router.get('/random', checkAuth, resourcesCtrl.randomResources)
router.post('/search', checkAuth, resourcesCtrl.search);
router.put('/:id', checkAuth, resourcesCtrl.deleteFromSaved);

 // Admin Routes
router.put('/:id', checkAuth, resourcesCtrl.updateResource);
router.delete('/:id', checkAuth, resourcesCtrl.deleteResource);

function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;