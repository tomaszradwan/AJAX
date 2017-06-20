<?php

include "./src/Book.php";


switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        if (isset($_GET)) {
            Book::readAll();
        }
        break;

    case "POST":
         # code...
        break;

    case "PUT":
         # code...
        break;

    case "DELETE":
         # code...
        break;
    
    default:
        # code...
        break;
}
