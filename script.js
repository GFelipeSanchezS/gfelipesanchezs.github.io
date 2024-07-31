// script.js

$(document).ready(function() {
    $('.center-button').on('mousedown', function() { // Use mousedown instead of click
        $(this).addClass('pressed'); // Add pressed class on mousedown
    }).on('mouseup mouseleave', function() { // Remove pressed class on mouseup or leaving the button
        $(this).removeClass('pressed');
    });
});
