
jQuery(document).ready(function () {

    $("#1").one('click', function () {
        $.ajax({
            url: "api/books.php",
            data: {all: "all"},
            datatye: 'json',
            type: "GET",
            success: function (data) {

                var jsonObj = $.parseJSON(data);

                var allBooks = "";

                $.each(jsonObj, function () {
                    allBooks += "<div>" + "ID: " + this['id'] + " "
                            + "<button type='submit' name=" + this['id'] + ">rozwiń / zwiń</button>" + "</div>" + "<div class='hide'></div>";
                });

                var newElem = $(allBooks);

                $('div#allBooks').next().after(newElem);

                var button = $("button");

                button.on("click", function () {
                    var div = $(this).parent().next("div").toggleClass('visible');
                    var id = $(this).attr('name');

                    $.ajax({
                        url: "api/books.php",
                        data: {id: id},
                        type: "GET",
                        dataType: "json",
                        success: function (json) {

                            var book = "ID: " + json['id'] + "</br>" + "Name: " + json['name'] + "</br>" + "Author: " + json['author'] + "</br>" + "Description: " + json['description'];
                            div.html(book);
                        },
                        error: function (xhr, status, errorThrown) {
                            alert(xhr.status);
                            alert(thrownError);
                        },
                        complete: function (xhr, status) {
//                            alert(xhr.status);
//                            alert(status);
                        }
                    });
                });

            },
            error: function (xhr, ajaxOptions, thrownError) {
//                alert(xhr.status);
//                alert(thrownError);
            },
            complete: function (xhr, status) {
//                alert(xhr.status);
//                alert(status);
            }
        });
    });

    $(":input[value='newBook']").on('click', function () {
        $.ajax({
            url: "api/books.php",
            data: {name: "12", author: "ok", description: "opis"},
            type: "POST",
            dataType: "json",
            success: function (json) {

            },
            error: function (xhr, status, errorThrown) {

                alert(xhr.status);
//                alert(thrownError);
            },
            complete: function (xhr, status) {
                alert(xhr.status);
                alert(status);
            }
        });
    });


});




