<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require("controller.php");


if ( isset($_REQUEST['todo']) ){


  header('Content-Type: application/json');


  $todo = $_REQUEST['todo'];


  switch($todo){

    case 'searchMovie':
      $data = readSearchMovieController();
    break;

    case 'getFeaturedMovies':
      $data = getFeaturedMoviesController();
    break;

    case 'removeFavoris':
      $data = removeFavorisController();
    break;
      
    case 'addFavoris': 
      $data = addFavorisController();
    break;
        
    case 'readFavoris':
      $data = readFavorisController();
    break;

    case 'updateProfile':
      $data = updateProfileController();
    break;

    case 'readProfile':
      $data = readProfileController();
    break;

    case 'addProfile':
      $data = addProfileController();
    break;

    case'readMovieDetail':
      $data = readMovieDetailController();
    break;

    case 'addMovie':
      $data = addController();
    break;

    case 'readmovies':
      $data = readMoviesController(); 
    break;

    case 'readMoviesCategory': 
      $data = readMoviesByCategoryController();
    break;

    
        default: 
      echo json_encode('[error] Unknown todo value');
      http_response_code(400); 
      exit();
  }

  if ($data===false){
    echo json_encode('[error] Controller returns false');
    http_response_code(500); 
    exit();
  }

  echo json_encode($data);
  http_response_code(200); 
  exit();

   
}



http_response_code(404); 



?>