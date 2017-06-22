
jQuery(document).ready(function () {

    $("#1").on('click', function () {
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
                            + "<button type='submit' name="
                            + this['id'] + ">rozwiń / zwiń</button>"
                            + "</div>" + "<div class='hide'></div>";
                });

                var newElem = $(allBooks);

                $('div#allBooks').next().after(newElem);

                var button = $("button:not(#1)");

                button.on("click", function () {

                    var div = $(this).parent().next("div").toggleClass('visible');
                    var id = $(this).attr('name');

                    $.ajax({
                        url: "api/books.php",
                        data: {id: id},
                        type: "GET",
                        dataType: "json",
                        success: function (json) {

                            var book = "ID: " + json['id']
                                    + "</br>" + "Name: " + json['name']
                                    + "</br>" + "Author: " + json['author']
                                    + "</br>" + "Description: " + json['description']
                                    + "</br><input type='button' id='deleteBook' name=" + json['id'] + " value='DELETE'/>";

                            div.html(book);

                            $("input[id='deleteBook']").click(function () {
                                var id = $(this).attr('name');

                                $.ajax({
                                    url: "api/books.php",
                                    data: {id: id},
                                    type: "DELETE",
                                    dataType: "text",
                                    success: function (text) {
                                        alert("DELETE SUCCESS !");
                                        alert(text);
                                    },
                                    error: function (xhr, status, errorThrown) {
                                        alert(status);
                                        alert(xhr);
                                        alert(errorThrown);
                                    },
                                    complete: function (xhr, status) {

                                    }
                                });
                            });
                        },
                        error: function () {
                            alert("ON CLICK BUTTON(fade in/out) ERROR!");
                        },
                    });
                });
            },
            error: function () {
                alert("ERROR ALL BOOKS!");
            },
        });
    });


    $(":input[value='newBook']").on('click', function () {
        $.ajax({
            url: "api/books.php",
            data: {
                name: $(":input[name='name']").val(),
                author: $(":input[name='author']").val(),
                description: $(":input[name='description']").val()
            },
            type: "POST",
            dataType: "text",

            success: function (text) {
                alert("SAVE SUCCESS!");
                alert(text);
            },
            error: function () {
                alert("ERROR - CANNOT SAVE !");
            },
        });
    });
});




