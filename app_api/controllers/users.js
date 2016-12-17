/**
 * Created by Jørgen on 24.11.2016.
 */

var mongoose = require('mongoose');
var Usr = mongoose.model('Users');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.usersShow = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.usersCreate = function (req, res) {

};

module.exports.usersReadOne = function (req, res) {
    if (req.params && req.params.userid) {
        Usr
            .findById(req.params.userid)
            .exec(function (err, user) {
                if (!user) {
                    sendJsonResponse(res, 400, {
                        "Message": "UserId not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, user);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No userId in request!"
        });
    }
};

module.exports.usersUpdateOne = function (req, res) {

};

module.exports.usersDeleteOne = function (req, res) {

};

// Routines
module.exports.usersGetRoutine = function (req, res) {
    if (req.params && req.params.userid) {
        Usr
            .findById(req.params.userid)
            .select('name routine')
            .exec(function (err, user) {
                var response, routine;
                if (!user) {
                    sendJsonResponse(res, 400, {
                        "Message": "UserId not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                if (user.routine && user.routine.length > 0) {
                    routine = user.routine.id(req.params.routineid);
                    if (!routine) {
                        sendJsonResponse(res, 404, {
                            "message": "RoutineId not found"
                        });
                    } else {
                        response = {
                            user: {
                                name : user.name,
                                id : req.params.userid
                            },
                            routine : routine
                        };
                        sendJsonResponse(res, 200, response);
                    }
                } else {
                    sendJsonResponse(res, 404, {
                        "message": "No routine found"
                    });
                }
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found. userID and routineID are both required"
        });
    }
};

module.exports.usersCreateRoutine = function (req, res) {
    if (req.params.userid) {
        Usr
            .findById(req.params.userid)
            .select('name routine')
            .exec(
                function (err, user) {
                    if(err) {
                        sendJsonResponse(res, 400, err);
                    } else {
                        doAddRoutine(req, res, user);
                    }
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found. userid required"
        });
    }
};

var doAddRoutine = function (req, res, user) {
    if (!user) {
        sendJsonResponse(res, 404, {"message": "userid not found"});
    } else {
        user.routine.push({
            exerciseName:   req.body.exerciseName,
            reps:           req.body.reps,
            sets:           req.body.sets,
            day:            req.body.day,
            muscleGroup:    req.body.muscleGroup
        });
        user.save(function (err, user) {
            if (err) {
                sendJsonResponse(res, 400, err);
            } else {
                sendJsonResponse(res, 200, user);
            }
        });
    }
};

module.exports.usersUpdateRoutine = function (req, res) {
    if (!req.params.userid || !req.params.routineid) {
        sendJsonResponse(res, 404, {"message": "Not found. userid and routineid are both required"});
        return;
    }
    Usr
        .findById(req.params.userid)
        .select('routine')
        .exec(
            function (err, user) {
                var thisRoutine;
                if (!user) {
                    sendJsonResponse(res, 400, {"message": "userid not found"});
                    return;
                }
                else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                if (user.routine && user.routine.length > 0) {
                    thisRoutine = user.routine.id(req.params.routineid);
                    if (!thisRoutine) {
                        sendJsonResponse(res, 404, {"message": "routineid not found"});
                    } else {
                        user.exerciseName  = req.body.exerciseName;
                        user.reps          = req.body.reps;
                        user.sets          = req.body.sets;
                        user.day           = req.body.day;
                        user.muscleGroup   = req.body.muscleGroup;
                        user.save(function (err, user) {
                            if (err) {
                                sendJsonResponse(res, 404, err);
                            } else {
                                sendJsonResponse(res, 200, thisRoutine)
                            }
                        });
                    }
                } else {
                    sendJsonResponse(res, 404, {"Message": "No routine to update"});
                }
            }
        );
};





