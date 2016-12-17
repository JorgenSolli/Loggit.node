var request = require('request');

var apiOptions = {
    server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://whispering-tundra-41184.herokuapp.com";
}

/* Get User page */
var renderUserpage = function (req, res, responseBody, exerciseData) {
    res.render('user', {
        title: 'Loggit - Dashboard',
        pageHeader: {
            title: 'Loggit',
            strapline: 'Dashboard'
        },
        user: responseBody,
        exerciseData: exerciseData
    });
};
module.exports.user = function (req, res) {
    var requestOptions, path;
    path = '/api/users/583afb88fd7b142a885c6555';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {}
    };
    request(
        requestOptions,
        function(err, response, body) {
            var count;
            var data = body;
            var muscleGroup = [];
            var exerciseData = {
                weightLifted:   [],
                distSession:    [],
                activity:       [],
                liftedPerDay:   []
            };

            /* Adding weeklyLifted to exerciseData */
            for (var y = 0; y < data.routine.length; y++) {
                /* Adds data to array */
                exerciseData.weightLifted.push({
                    "day": "Monday",
                    "value": "1000"
                });
            }

            /* Adding workoutDistribution to exerciseData */
            for (var i = 0; i < data.routine.length; i++) {
                var muscleGroupName = data.routine[i].muscleGroup;

                if (muscleGroupName.indexOf(muscleGroup) != -1) {
                    // muscleGroup[i].count += 1;
                } else {
                    muscleGroup.push([
                        {id: i},
                        {name: muscleGroupName},
                        {count: 1}
                    ]);
                }

                /* Adds data to array */
                exerciseData.distSession.push({
                    "label": muscleGroupName,
                    "value": count
                });
            }

            renderUserpage(req, res, data, exerciseData);
        }
    );
};

/* Get Add workout page */
module.exports.routine = function (req, res) {
    res.render('user', { title: 'Add workout' });
};

/* Get Fill workout page */
module.exports.addLog = function (req, res) {
    res.render('user-add-log', { title: 'Add log!' });
};