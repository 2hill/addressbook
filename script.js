let data = jQuery.map(localJson.Address, function (e, i) {
    return [[e.name, e.email, e.phone]];
});
$(document).ready(function () {
    $('#table').DataTable({
        data: data,
        columns: [{
                title: "Name"
            },
            {
                title: "Email"
            },
            {
                title: "Phone"
            }
        ]
    });
});