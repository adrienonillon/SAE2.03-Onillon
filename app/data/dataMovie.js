let HOST_URL = "https://mmi.unilim.fr/~onillon4/SAE2.03-Onillon";

let DataMovie = {};

DataMovie.requestMovies = async function(){
   
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
    
    
   
    let data = await answer.json();

    return data;
}

DataMovie.requestMovieDetails = async function(id){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieDetails&id=" + id);
    
    let movie = await answer.json();

    return movie;
}

export {DataMovie};