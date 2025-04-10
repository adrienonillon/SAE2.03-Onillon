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

export {DataMovie};