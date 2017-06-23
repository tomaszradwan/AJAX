<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>

        <form method="POST">
            Name:<br/>
            <input type="text" name="name" required><br/>
            Author:<br/>
            <input type="text" name="author" required><br/>
            Description:<br/>
            <input type="text" name="description" required><br/>

            <input type="submit" value="newBook">
        </form>

        <hr width="45%" align="left">

        <div id="allBooks">
            <button type="submit" id="1">All books</button>      
        </div>

        <hr width="45%" align="left">

    </body> 
    <script src="api/js/ajax.js"></script>
</html>
