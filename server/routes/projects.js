const express = require('express');
const router = express.Router();

const projectsCtrl = require('../controllers/projects');
const authService = require('../services/auth');

router.get('', projectsCtrl.getProject);
router.post('', authService.checkJWT, authService.checkRole('siteOwner'), projectsCtrl.saveProject);
router.patch('/:id', authService.checkJWT, authService.checkRole('siteOwner'), projectsCtrl.updateProjtect);
router.delete('/:id', authService.checkJWT, authService.checkRole('siteOwner'), projectsCtrl.deleteProject);

module.exports = router;