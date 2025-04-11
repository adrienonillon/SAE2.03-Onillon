<?php

define("HOST", "localhost");
define("DBNAME", "onillon4");
define("DBLOGIN", "onillon4");
define("DBPWD", "onillon4");


function getAllMovies(){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    
    $sql = "SELECT Movie.id, Movie.name, Movie.image, Category.name AS category_name 
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id";
    
    $stmt = $cnx->prepare($sql);
    $stmt->execute();

    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
}


function addMovie($name, $year, $length, $description, $director, $id_category, $image, $trailer, $min_age) {
    
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "INSERT INTO Movie (name, year, length, description, director, id_category, image, trailer, min_age) 
            VALUES (:name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age)";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':year', $year);
    $stmt->bindParam(':length', $length);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':director', $director);
    $stmt->bindParam(':id_category', $id_category);
    $stmt->bindParam(':image', $image);
    $stmt->bindParam(':trailer', $trailer);
    $stmt->bindParam(':min_age', $min_age);
    
    $stmt->execute();
    
    return $stmt->rowCount(); // Retourne le nombre de lignes affectées
    
}


function readMovieDetail($id){

    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);

    $sql = "SELECT Movie.id, Movie.name, image, description, director, year, length, Category.name AS category_name, min_age, trailer FROM Movie
    INNER JOIN Category ON Movie.id_category = Category.id WHERE Movie.id = :id";


    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_STR);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getMoviesByCategory($age) {
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    // Requête SQL pour récupérer les films groupés par catégorie
    $sql = "SELECT Category.id AS category_id, Category.name AS category_name, 
                   Movie.id AS movie_id, Movie.name AS movie_name, Movie.image AS movie_image
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id
            WHERE Movie.min_age <= :age";

    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':age', $age, PDO::PARAM_INT);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_OBJ);


    $categories = [];
    foreach ($rows as $row) {
        if (!isset($categories[$row->category_id])) {
            $categories[$row->category_id] = [
                "name" => $row->category_name,
                "movies" => []
            ];
        }
        $categories[$row->category_id]["movies"][] = [
            "id" => $row->movie_id,
            "name" => $row->movie_name,
            "image" => $row->movie_image
        ];
    }

    return array_values($categories);
}

function addProfile($id, $name, $image, $age) {
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);

    $sql = "INSERT INTO Profil (id, name, image, age) 
            VALUES (:id, :name, :image, :age)";

    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt->bindParam(':image', $image, PDO::PARAM_STR);
    $stmt->bindParam(':age', $age, PDO::PARAM_STR);

    $stmt->execute();
    $res = $stmt->rowCount();
    return $res; 
}

function readProfile() {
  
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);

    $sql = "select id, name, image, age from Profil";

    $stmt = $cnx->prepare($sql);
   
    $stmt->execute();

    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; 
}

function readOneProfile($id) {

    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
 
    $sql = "select * from Profil where id = :id";

    $stmt = $cnx->prepare($sql);
    
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    $stmt->execute();

    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; 
}

function updateProfile($name, $image, $age, $id) {
 
    
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    
    $sql = "UPDATE Profil 
            SET name = :name, image = :image, age = :age 
            WHERE id = :id";
    
    $stmt = $cnx->prepare($sql);
   
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':image', $image);
    $stmt->bindParam(':age', $age);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    
    $res = $stmt->rowCount(); 
    return $res; 
}