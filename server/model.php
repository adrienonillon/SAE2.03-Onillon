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


function addMovie($n, $y, $l, $de, $di, $id, $img, $t, $m){
   
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD); 
   
    $sql = "INSERT INTO Movie (name, year, length, description, director, id_category, image, trailer, min_age) 
            VALUES (:name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age)";
  
    $stmt = $cnx->prepare($sql);
  
    $stmt->bindParam(':name', $n);
    $stmt->bindParam(':year', $y);
    $stmt->bindParam(':length', $l);
    $stmt->bindParam(':description', $de);
    $stmt->bindParam(':director', $di);
    $stmt->bindParam(':id_category', $id);
    $stmt->bindParam(':image', $img);
    $stmt->bindParam(':trailer', $t);
    $stmt->bindParam(':min_age', $m);

    $stmt->execute();

    $res = $stmt->rowCount(); 
    return $res; 
}

