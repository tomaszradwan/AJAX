
jQuery(document).ready(function () {

    $("#1").click(function () {
        $.ajax({
            url: "api/books.php",
            data: { id: 0 },
            datatye: 'json',
            type: "GET",
            success: function (data) {

                var jsonObj = $.parseJSON(data);

                var allBooks = '';

                $.each(jsonObj, function () {
                    allBooks += "id: " + this['id'] + "<br/>";
                    allBooks += "name: " + this['name'] + "<br/>";
                    allBooks += "author: " + this['author'] + "<br/>";
                    allBooks += "description: " + this['description'] + "<br/>";
                    allBooks += "----------<br/>";
                });

                var newElem = $("<div>" + allBooks + "</div>");

                $('div#first').after(newElem);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            },
            complete: function () {
                alert("OK!")
            }
        });
    });
});
