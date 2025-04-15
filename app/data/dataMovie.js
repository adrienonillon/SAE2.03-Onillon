let HOST_URL = "https://mmi.unilim.fr/~onillon4/SAE2.03-Onillon";

let DataMovie = {};

DataMovie.requestMovies = async function (age = 99) {
    let answer = await fetch(HOST_URL + `/server/script.php?todo=readMoviesCategory&age=${age}`);
    let movies = await answer.json();
    return movies;
  };

DataMovie.requestMovieDetails = async function(id){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieDetail&id=" + id);
    
    let movie = await answer.json();

    return movie;
}

DataMovie.requestMoviesCategory = async function () {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMoviesCategory");
    let categories = await answer.json();
    return categories;
  };

DataMovie.addFavoris = async function (id_profil, id_movie) {
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=addFavoris&id_profil=" + id_profil + "&id_movie=" + id_movie
  );

  let data = await answer.json();
  return data;
};
DataMovie.removeFavoris = async function (id_profil, id_movie) {
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=removeFavoris&id_profil=" + id_profil + "&id_movie=" + id_movie
  );

  let data = await answer.json();
  return data;
};
DataMovie.requestFeaturedMovies = async function (age = 99) {
  let answer = await fetch(
    HOST_URL + `/server/script.php?todo=getFeaturedMovies&age=${age}`
  );
  let featuredMovies = await answer.json();
  return featuredMovies;
};
DataMovie.requestsearch = async function (valeur) {
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=searchMovie&title=" + valeur
  );
  let movies = await answer.json();
  return movies;
};


export {DataMovie};