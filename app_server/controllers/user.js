/* Get User page */
module.exports.user = function (req, res) {
    res.render('user', {
        title: 'Loggit - Dashboard',
        pageHeader: {
            title: 'Loggit',
            strapline: 'Dashboard'
        },
        user: [{

        }]
    });
};

/* Get Add workout page */
module.exports.addWorkout = function (req, res) {
    res.render('user', { title: 'Add workout' });
};

/* Get Fill workout page */
module.exports.FillWorkout = function (req, res) {
    res.render('user', { title: 'Fill Workour' });
};