<?php


class Connection
{
    public $conn;

    public function __construct()
    {
        require "parameters.php";

        try {
            $this->conn= new PDO("mysql:host=$host;dbname=$db", $user, $pass,
               [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ]);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function getConnection()
    {
        return $this->conn;
    }

    public function querySql($sql)
    {
        return $this->conn->query($sql);
    }

    public function __destruct()
    {
        $this->conn = null;
    }
}
