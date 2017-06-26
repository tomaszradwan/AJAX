
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
                    allBooks += "<div class ='eachBook'>"
                            + "ID: " + this['id'] + " "
                            + "<button type='submit' name=" + this['id'] + ">rozwiń / zwiń</button>"
                            + "<div class='hide'></div>"
                            + "</div>";
                });

                var newElem = $(allBooks);

                $('div#allBooks').next().after(newElem);

                var button = $("button:not(#1)");

                button.on("click", function () {

                    var div = $(this).next().toggleClass('visible');
                    var id = $(this).attr('name');

                    $.ajax({
                        url: "api/books.php",
                        data: {id: id},
                        type: "GET",
                        dataType: "json",
                        success: function (json) {

                            var book =
//                                    "ID: " + json['id'] +
                                    "</br>" + "Name: " + "<input type='text' name='inputName' value='" + json['name'] + "'>"
                                    + "</br>" + "Author: " + "<input type='text' name='inputAuthor' value='" + json['author'] + "'>"
                                    + "</br>" + "Description: " + "<input type='text' name='inputDescription' value='" + json['description'] + "'>"
                                    + "</br><input type='button' id='deleteBook' name='" + json['id'] + "' value='DELETE'/>"
                                    + "<input type='button' id='updateBook' name='" + json['id'] + "' value='UPDATE'/>";

                            div.html(book);

                            $("input[id='deleteBook']").click(function () {
                                var id = $(this).attr('name');

                                $.ajax({
                                    url: "api/books.php",
                                    data: {id: id},
                                    type: "DELETE",
                                    dataType: "text",
                                    success: function () {
                                        alert("DELETE SUCCESS !");
                                    },
                                    error: function (xhr, status, errorThrown) {
                                        alert(status);
                                        alert(xhr);
                                        alert(errorThrown);
                                    },
                                    complete: function (xhr, status) {
                                        console.log("OK");
                                    }
                                }).done($(this).parent().parent().remove());
                            });


                            $("input[id='updateBook']").click(function () {
                                var id = $(this).attr('name');
                                var name = $(this).parent().find("[name='inputName']").val();
                                var author = $(this).parent().find("[name='inputAuthor']").val();
                                var description = $(this).parent().find("[name='inputDescription']").val();

                                $.ajax({
                                    url: "api/books.php",
                                    data: {
                                        id: id,
                                        author: author,
                                        name: name,
                                        description: description,
                                    },
                                    type: "PUT",
                                    dataType: "text",
                                    success: function () {
                                        alert("UPDATE SUCCESS !");
                                    },
                                    error: function (xhr, status, errorThrown) {
                                        alert(status);
                                        alert(xhr);
                                        alert(errorThrown);
                                    },
                                    complete: function (xhr, status) {
                                        console.log("OK");
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
            dataType: "data",

            success: function (data) {
                alert("SAVE SUCCESS!");
                alert(data);
            },
            error: function () {
                alert("ERROR - CANNOT SAVE !");
            }
        });
    });
});




