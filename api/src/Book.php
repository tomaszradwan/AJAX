
<?php

include "connection.php";

class Book
{
    private $id= -1;
    private $name = "";
    private $author = "";
    private $description = "";

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setAuthor($author)
    {
        $this->author = $author;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getAuthor()
    {
        return $this->author;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function create()
    {
        $conn = new Connection();

        $sql ="INSERT INTO `books`(`name`, `author`, `description`) VALUES (:name, :author, :description)";
    
        $stmt = $conn->getConnection()->prepare($sql);

        $stmt->execute([ 'name' => $this->name,
                         'author' => $this->author,
                         'description' => $this->description]);
        if ($stmt) {
            $this->id = $conn->getConnection()->lastInsertId();
            return true;
        }
        return false;
    }

    public static function readAll()
    {
        $conn = new Connection();

        $sql = "SELECT * FROM `books`";

        $result = $conn->querySql($sql)->fetchAll(PDO::FETCH_ASSOC);

        // return json_encode($result);
        echo json_encode($result);
    }



    public static function delete($id)
    {
        $conn = new Connection();

        $sql = "DELETE FROM `books` WHERE id=:id";

        $stmt = $conn->getConnection()->prepare($sql);
             
        $stmt->execute(['id'=>$id]);
    }


    public static function update($id, $author, $name, $description)
    {
        $conn = new Connection();

        $sql = "UPDATE `books` SET `name`= :name,`author`= :author,`description`= :description WHERE `id` = :id";
            
        $stmt = $conn->getConnection()->prepare($sql);

        $stmt->execute([ 'id' => $id,
                         'name' => $name,
                         'author' => $author,
                         'description' => $description]);
        if ($stmt) {
            return true;
        }
        return false;
    }
}
