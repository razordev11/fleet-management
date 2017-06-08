function editDriver(rowId, _id) {
    rowId--;
    var $row = $("#driversTable tbody")[0].rows[rowId];

    $('#editDriverFirstName :input').attr('value', $row.cells[0].innerHTML);
    $('#editDriverLastName :input').attr('value', $row.cells[1].innerHTML);
    $('#editDriverNationalId :input').attr('value', $row.cells[2].innerHTML);
    $('#editDriverAddress :input').attr('value', $row.cells[3].innerHTML);
    $('#editDriverEmail :input').attr('value', $row.cells[4].innerHTML);
    $('#editDriverPhoneNumber :input').attr('value', $row.cells[5].innerHTML);
    $('#editDriverDistanceTraveled :input').attr('value', $row.cells[6].innerHTML);

    $('#editDriverForm').attr('action', "/drivers/update/" + _id);
}

function deleteDriver(rowId, _id) {
    rowId--;
    var $row = $("#driversTable tbody")[0].rows[rowId];

    $('#deleteDriverFullName').text($row.cells[0].innerHTML + " " + $row.cells[1].innerHTML);

    $('#deleteDriverHref').attr('href', "/drivers/delete/" + _id);
}