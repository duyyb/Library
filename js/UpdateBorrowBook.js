$("body").on("click", "#btnUBrrBook", function (data) {
    var BookCode = $("#BookCode");
    var IdTypeOfBook = $("#Type");
    var UpdateBook = {};

    UpdateBook.Id = id;
    UpdateBook.BookCode = BookCode.val();
    UpdateBook.IdTypeOfBook = IdTypeOfBook.val();
    /*Update.Id = id;*/
    //console.log(id);


    $.ajax({
        type: "POST",
        url: '/api/Book/UpdateBook',
        data: JSON.stringify(UpdateBook),
        contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (response) {

            console.log('kdslfk', response);

            alert("Updated: " + response.BookCode);
            //location.reload();

        },
        error: function (error) {
            alert("This BookCode Already Exist !");
            console.log("error", error);
            console.log();
            alert(error);
        }

    });
});