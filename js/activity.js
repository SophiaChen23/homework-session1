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

    // Function to retrieve and display selected cells in an alert
    function updateSelectedCells(columnIndex, rows) {
        var selectedCells = $('.selectable.selected');
        var selectedActivities = '';

        if (selectedCells.length > 0) {
            selectedCells.each(function() {
                var content = $(this).text();
                var columnIndex = $(this).index();
                var columnHeader = $('table thead th').eq(columnIndex).text();
                selectedActivities += content + ' at ' + columnHeader + '\n';
            });

            alert('My selected activities to inquire:\n\n' + selectedActivities);
        }
    }
});
