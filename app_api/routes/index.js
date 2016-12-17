/**
 * Created by Jørgen on 24.11.2016.
 */

var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');

// Users
router.get('/users', ctrlUsers.usersShow);
router.post('/users', ctrlUsers.usersCreate);
router.get('/users/:userid', ctrlUsers.usersReadOne);
router.put('/users/:userid', ctrlUsers.usersUpdateOne);
router.delete('/users/:userid', ctrlUsers.usersDeleteOne);

// Routine
router.get('/users/:userid/routine/:routineid', ctrlUsers.usersGetRoutine);
router.post('/users/:userid/routine', ctrlUsers.usersCreateRoutine);
router.put('/users/:userid/routine/:routineid', ctrlUsers.usersUpdateRoutine);

// Logs
// router.get('/users/:userid/routine/:logid', ctrlUsers.usersGetLog);
// router.post('/users/:userid/routine', ctrlUsers.usersCreateLog);

module.exports = router;
