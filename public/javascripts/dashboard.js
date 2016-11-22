/**
 * Created by Jørgen on 11/22/2016.
 */

$(document).ready(function() {

    new Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'chart1',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { day: 'Mon', value: 103294 },
            { day: 'Tue', value: 204391 },
            { day: 'Wed', value: 302025 },
            { day: 'Thu', value: 498563 },
            { day: 'Fri', value: 585641 },
            { day: 'Sat', value: 625356 },
            { day: 'Sun', value: 756325 }
        ],
        // The name of the data record attribute that contains x-values.
        xkey: 'day',
        parseTime: false,
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Weight Lifted'],
        xlabels: 'day'
    });

    Morris.Donut({
        element: 'chart2',
        data: [
            {label: "Back", value: 2},
            {label: "Chest", value: 3},
            {label: "Legs", value: 2},
            {label: "Arms", value: 4}
        ]
    });

    Morris.Area({
        element: 'chart3',
        data: [
            { y: '1', a: 50},
            { y: '2', a: 60},
            { y: '3', a: 65},
            { y: '4', a: 70},
            { y: '5', a: 75},
            { y: '6', a: 80},
            { y: '7', a: 85},
            { y: '8', a: 85},
            { y: '9', a: 90},
            { y: '10', a: 95},
            { y: '11', a: 100},
            { y: '12', a: 105}
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['2015', '2016']
    });

    Morris.Bar({
        element: 'chart4',
        data: [
            { y: 'Mon', a: 100},
            { y: 'Tue', a: 75},
            { y: 'Wed', a: 50},
            { y: 'Thu', a: 75},
            { y: 'Fri', a: 50},
            { y: 'Sat', a: 75},
            { y: 'Sun', a: 100}
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Weight lifted /kg']
    });
});