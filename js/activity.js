$(document).ready(function() {
    // Add click event handler to selectable cells
    $('.selectable').click(function() {
        var columnIndex = $(this).index();
        var rows = $('table tbody tr');

        // Check if the cell is available (not 'Not Available') and not a heading cell
        if ($(this).text() !== 'Not Available') {
            // Toggle the selected class
            $(this).toggleClass('selected');
            updateSelectedCells(columnIndex, rows);
            // updateSendInfoBox(columnIndex);
        }
    });

    // Function to retrieve and display selected cells
    function updateSelectedCells(columnIndex, rows) {
        var selectedCells = $('.selectable.selected');
        var resultDiv = $('#result');
        resultDiv.empty();

        if (selectedCells.length > 0) {
            var heading = $('<h4>My selected activities to inquire:</h4>');
            resultDiv.append(heading);

            selectedCells.each(function() {
                var content = $(this).text();
                var columnIndex = $(this).index();
                var columnHeader = $('table thead th').eq(columnIndex).text();
                var paragraph = $('<p>').text(content + ' at ' + columnHeader);
                resultDiv.append(paragraph);
            });

            $('#displaySelected').css("visibility", "visible");
            $('#displaySelected').css("margin-top", "2em");
        } else {
            $('#displaySelected').css("visibility", "hidden");
            $('#displaySelected').css("margin-top", "0");
        }
    }



    // Function to retrieve and display selected cell and corresponding column name from thead in sendinfo box
    // Function to retrieve and display selected cell and corresponding column name from thead in sendinfo box
    // Function to retrieve and display selected cell and corresponding column name from thead in sendinfo box
    // Function to retrieve and display selected cell and corresponding column name from thead in sendinfo box







});
