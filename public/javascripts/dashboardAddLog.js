/**
 * Created by Jørgen on 26.11.2016.
 */

$(document).ready(function() {
    $(".datepicker").pickadate({
        selectMonths: true,
        min: [1940, 1, 1],
        max: true,
        selectYears: 100
    });
});
