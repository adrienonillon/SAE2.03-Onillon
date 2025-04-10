<?php


require("model.php");

function readMoviesController(){
    $movies = getAllMovies(); 
    return $movies; 
}

function readMovieDetailController(){
    $id = $_REQUEST['id'] ?? null;
  
    if (empty($id)) {
        return "Erreur : Tous les champs doivent être remplis.";
    }
  
    return readMovieDetail($id);
  }

function addController() {
  header('Content-Type: application/json');


      $name = $_REQUEST['name'];
      $year = $_REQUEST['year'];
      $length = $_REQUEST['length'];
      $description = $_REQUEST['description'];
      $director = $_REQUEST['director'];
      $id_category = $_REQUEST['id_category'];
      $image = $_REQUEST['image'];
      $trailer = $_REQUEST['trailer'];
      $min_age = $_REQUEST['min_age'];

      $ok = addMovie($name, $year, $length, $description, $director, $id_category, $image, $trailer, $min_age);

      if ($ok != 0) {
          echo json_encode(["success" => true, "message" => "Film ajouté à la base de donnée"]);
      } else {
          echo json_encode(["success" => false, "message" => "Erreur lors de l'ajout du film"]);
      }
  
  exit();
}



function addProfileController(){
  $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : null;
  $name = $_REQUEST['name'] ?? null;
  $image = $_REQUEST['image'] ?? null;
  $age = $_REQUEST['age'] ?? null;
  
  
  if (empty($name) || empty($age)) {
    return "Erreur : Tous les champs doivent être remplis.";
  }
  
  $ok = addProfile($id, $name, $image, $age);
  
  if ($ok!=0){
    return "L'utilisateur $name a été ajouté avec succès !";
  } 
  else{
    return "Erreur lors de l'ajout de $name !";
  }
}

function readProfileController() {
  if (!isset($_REQUEST['id'])) {
    $profiles = readProfile(); 
  }
  else{
    $id = $_REQUEST['id'];
    $profiles = readOneProfile($id); 
  }
 
  return $profiles;
}



function readMoviesByCategoryController() {
  $age = isset($_REQUEST['age']) ? intval($_REQUEST['age']) : 0; 
  $categories = getMoviesByCategory($age); 
  return $categories ? $categories : false;
} 

function updateProfileController() {
    $id = $_REQUEST['id'] ?? null;
    $name = $_REQUEST['name'] ?? null;
    $image = $_REQUEST['image'] ?? null;
    $age = $_REQUEST['age'] ?? null;

    if (empty($id) || empty($name) || empty($age)) {
        return "Erreur : Tous les champs obligatoires doivent être remplis.";
    }

    $ok = updateProfile($id, $name, $image, $age);
    return $ok ? "Le profil a été modifié avec succès." : "Erreur lors de la modification du profil.";
}