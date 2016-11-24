/**
 * Created by Jørgen on 22.11.2016.
 */

var mongoose = require('mongoose');

var routineSchema = new mongoose.Schema({
    exerciseName:   String,
    reps:           String,
    sets:           String,
    day:            String,
    muscleGroup:    String
});

var logsSchema = new mongoose.Schema({
    exerciseName:   String,
    reps:           Number,
    sets:           Number,
    load:           Number,
    date:           Date,
    day:            String
});

var userSchema = new mongoose.Schema({
    name:       {type: String, required: true},
    userName:   {type: String, required: true},
    password:   {type: String, required: true},
    logs:       [routineSchema],
    routine:    [logsSchema]
});

mongoose.model('User', userSchema);