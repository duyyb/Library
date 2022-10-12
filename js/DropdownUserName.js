$(document).ready(function () {
    $.ajax({
        url: 'https://localhost:44373/api/User/GetAllUser',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            $.each(data, function (i, value) {


                $('#Type').append($('<option>', {
                    value: value.Id,
                    text: value.UserName
                    
                }));
                
            });
        }
    });
});