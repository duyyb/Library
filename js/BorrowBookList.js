$(document).ready(function () {
    $.getJSON('https://localhost:44373/api/BorrowAndReturn/GetAllBorrowBook', function (json) {
        var tr = [];
        for (var i = 0; i < json.length; i++) {
            tr.push('<tr>');
            tr.push('<td>' + json[i].Id + '</td>');
            tr.push('<td>' + json[i].BookCode + '</td>');
            tr.push('<td>' + json[i].Category + '</td>');
            tr.push('<td>' + getFormattedDate(new Date(json[i].BorrowDay)) + '</td>');
            tr.push('<td>' + getFormattedDate(new Date(json[i].ReturnDate)) + '</td>');
            tr.push('<td>' + json[i].UserName + '</td>');
           
            //console.log(json[i].BookCode);
           
            tr.push('<td><button type="button" class="btn btn-primary btn-detail" value=' + json[i].Id + ' data-toggle="modal" data-target="#Update"> Detail </button>&nbsp;&nbsp;');
            tr.push('</tr>');

        }
        $('table').append($(tr.join('')));

        function getFormattedDate(date) {
            var year = date.getFullYear();
        
            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;
        
            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;
        
            return day + '/' + month + '/' + year;
        }
    });
});
