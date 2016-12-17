/**
 * Created by Jørgen on 22.11.2016.
 */

var mongoose = require('mongoose');

var routineSchema = new mongoose.Schema({
    exerciseName:   {type: String, required: true},
    reps:           {type: String, required: true},
    sets:           {type: String, required: true},
    day:            {type: String, required: true},
    muscleGroup:    {type: String, required: true}
});

var logsSchema = new mongoose.Schema({
    exerciseName:   {type: String},
    reps:           {type: Number},
    sets:           {type: Number},
    load:           {type: Number},
    date:           {type: Date},
    day:            {type: String}
});

var userSchema = new mongoose.Schema({
    name:       {type: String, required: true},
    userName:   {type: String, required: true},
    password:   {type: String, required: true},
    logs:       [routineSchema],
    routine:    [logsSchema]
});

mongoose.model('Users', userSchema);