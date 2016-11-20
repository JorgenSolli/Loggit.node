/**
 * Created by Jørgen on 20.11.2016.
 */
/* Get Home page */
module.exports.home = function (req, res) {
    res.render('login', { title: 'Loggit' });
};