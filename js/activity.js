

$(document).ready(function() {
    // Add click event handler to selectable cells
    $('.selectable').click(function() {
        var content = $(this).text();
        // Check if the cell is available (not 'Not Available') and not a heading cell
        if (content !== 'Not Available') {
            // Toggle the selected class

            $(this).toggleClass('selected');


            if ($(this).hasClass('selected')) {
                $('#displaySelected').css("visibility", "visible");
                $('#displaySelected').css("margin-top", "2em");
                $('#result').append("<p>" + content + "</p>" );

            } else {
                $('#result p:contains('+content+')' +')').remove();

                if ( $('#result').has('p').length == false) {
                    $('#displaySelected').css("visibility", "hidden");
                    $('#displaySelected').css("margin-top", "0");
                }
            }
        }
    });
});
