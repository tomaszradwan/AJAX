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

            $author = trim($_POST['author']);
            $name = trim($_POST['name']);
            $description = trim($_POST['description']);

            if (strlen($author) > 0 && strlen($name) > 0 && strlen($description) > 0) {

                $newBook = new Book();
                $newBook->setAuthor($author);
                $newBook->setName($name);
                $newBook->setDescription($description);

                if ($newBook->create()) {
                    echo "SAVE SUCCESS!";
                }
                return;
            }
        }

        break;

    case "DELETE":
        parse_str(file_get_contents("php://input"), $deleteVars);

        if (Book::delete($deleteVars['id'])) {
            echo "DELETE SUCCESS !";
        }

        break;

    case "PUT":
        parse_str(file_get_contents("php://input"), $put_vars);

        $id = trim($put_vars['id']);
        $author = trim($put_vars['author']);
        $name = trim($put_vars['name']);
        $description = trim($put_vars['description']);

        if (Book::update($id, $author, $name, $description)) {
            echo "UPDATE SUCCESS !";
        }

        break;

    default:
        echo "ERROR !";
        break;
}
