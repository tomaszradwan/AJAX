
jQuery(document).ready(function () {

    $("#first").on('click', function () {
        $.ajax({
            url: "api/books.php",
            data: {},
            datatye: 'json',
            type: "GET",
            success: function (data) {

                var jsonObj = $.parseJSON(data);

                var allBooks = '';

                $.each(jsonObj, function () {
                    allBooks += "<div>" + this['id'] + " ";
                    allBooks += " " + this['name'] + " ";
                    allBooks += " " + this['author'] + " ";
                    allBooks += " " + this['description'] + "</div>" + "<div></div>";
                });

                var newElem = $(allBooks);

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
