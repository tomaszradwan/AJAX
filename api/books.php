<?php

include "./src/Book.php";


switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        if (isset($_GET['id'])) {
            Book::readAll();
        }
        break;

    case "POST":
        
        
        break;

    case "PUT":
        
        break;

    case "DELETE":
        
        break;
    
    default:
        # code...
        break;
}
