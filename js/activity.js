

$(document).ready(function() {
    // Add click event handler to selectable cells
    $('.selectable').click(function() {
        // Check if the cell is available (not 'Not Available') and not a heading cell
        if (!$(this).hasClass('heading') && $(this).text() !== 'Not Available') {
            // Toggle the selected class
            $(this).toggleClass('selected');
        }
    });
});
