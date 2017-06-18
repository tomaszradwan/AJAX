
jQuery(document).ready(function () {

    $("#1").click(function () {
        $.ajax({
            url: "api/books.php",
            data: { id: 0 },
            datatye: 'json',
            type: "GET",
            success: function (data) {
                alert(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            },
            complete: function () {
                alert("complete jest ok!")
            }
        });
    });
});
