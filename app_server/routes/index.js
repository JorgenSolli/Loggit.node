var express = require('express');
var router = express.Router();
var ctrlUser = require('../controllers/user');
var ctrlHome = require('../controllers/home');

/* User pages */
router.get('/user', ctrlUser.user);
router.get('/user/routine', ctrlUser.routine);
router.get('/user/log', ctrlUser.addLog);

/* Home page */
router.get('/', ctrlHome.home);

module.exports = router;