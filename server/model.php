<?php

define("HOST", "localhost");
define("DBNAME", "onillon4");
define("DBLOGIN", "onillon4");
define("DBPWD", "onillon4");


function getAllMovies(){
  
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    
    $sql = "select id, name, image from Movie";
    
    $stmt = $cnx->prepare($sql);;
  
    $stmt->execute();

    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function MovieDetails($id){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer les informations du film en fonction du nom
    $sql = "SELECT Movie.id, Movie.name, image, description, director, year, length, Category.name AS category_name, min_age, trailer 
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id 
            WHERE Movie.id = :id
";

    // Préparation de la requête SQL
    $stmt = $cnx->prepare($sql);
    // Liaison du paramètre :id avec la variable $id
    $stmt->bindParam(':id', $id, PDO::PARAM_STR);
    // Exécution de la requête
    $stmt->execute(); 
    // Conversion des lignes récupérées en tableau d'objets (chaque ligne devient un objet)
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
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

