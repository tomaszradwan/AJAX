<?php

include "./src/Book.php";


switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        if (isset($_GET['all'])) {
            Book::readAll();
        } elseif (isset($_GET['id'])) {
            $id = $_GET['id'];
            Book::getById($id);
        }
        break;

    case "POST":
        if (isset($_POST['name']) && isset($_POST['author']) && isset($_POST['description'])) {

            $author = $_POST['author'];
            $name = $_POST['name'];
            $description = $_POST['description'];

            $newBook = new Book();
            $newBook->setAuthor($author);
            $newBook->setName($name);
            $newBook->setDescription($description);
           
        }

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
