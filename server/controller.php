<?php


require("model.php");

function readMoviesController(){
    $movies = getAllMovies(); 
    return $movies; 
}


function addController(){


    // header('Content-Type: application/json');
    // echo json_encode($_REQUEST);
    // exit();

    $name = $_REQUEST['name'];
    $year = $_REQUEST['year'];
    $length = $_REQUEST['length'];
    $description = $_REQUEST['description'];
    $director = $_REQUEST['director'];
    $id_category = $_REQUEST['id_category'];
    $image = $_REQUEST['image'];
    $trailer = $_REQUEST['trailer'];
    $min_age = $_REQUEST['min_age'];


  
    if (empty($name) || empty($year) || empty($length) || empty($description) || empty($director) || empty($id_category) || empty($image) || empty($trailer) || empty($min_age)) {
        return "Erreur : tous les champs sont obligatoires !";
    }
 
    $ok = addMovie($name, $year, $length, $description, $director, $id_category, $image, $trailer, $min_age); 

    if ($ok!=0){
      return "Le film $name est à été ajouté avec succès";
    }
    else{
      return "Erreur lors de l'ajout du film $name !";
    }
  }

