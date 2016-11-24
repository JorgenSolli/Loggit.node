/**
 * Created by Jørgen on 22.11.2016.
 */
var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/Loggit';
if (process.env.NODE_ENV === 'production') {
    dbURI = 'mondodb://heroku_d1qpsmf7:e3918dsqmfvol84iqq56mpffrh@ds163397.mlab.com:63397/heroku_d1qpsmf7';
}
mongoose.connect(dbURI);
require('./user');

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

process.once('SIGUSR2', function () {
    gracefulShutdown('Nodemon restart', function () {
        process.kill(proces.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        proces.exit(0);
    });
});

process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});

