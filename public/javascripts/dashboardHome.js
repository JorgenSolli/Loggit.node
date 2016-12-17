/**
 * Created by Jørgen on 11/22/2016.
 */

$(document).ready(function () {
    new Morris.Line({
        element: 'weightLifted',
        data: exercisesData.weightLifted,
        xkey: 'day',
        parseTime: false,
        ykeys: ['value'],
        labels: ['Weight Lifted'],
        xlabels: 'day'
    });

    Morris.Donut({
        element: 'distSession',
        data: exercisesData.distSession
    });

    Morris.Area({
        element: 'weeklyActivity',
        data: [
            {y: '1', a: 50},
            {y: '2', a: 60},
            {y: '3', a: 65},
            {y: '4', a: 70},
            {y: '5', a: 75},
            {y: '6', a: 80},
            {y: '7', a: 85},
            {y: '8', a: 85},
            {y: '9', a: 90},
            {y: '10', a: 95},
            {y: '11', a: 100},
            {y: '12', a: 105}
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['2015', '2016']
    });

    Morris.Bar({
        element: 'weightLiftedDay',
        data: [
            {y: 'Mon', a: 100},
            {y: 'Tue', a: 75},
            {y: 'Wed', a: 50},
            {y: 'Thu', a: 75},
            {y: 'Fri', a: 50},
            {y: 'Sat', a: 75},
            {y: 'Sun', a: 100}
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Weight lifted /kg']
    });

});