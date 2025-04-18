let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};
Movie.format = function (movies, isFavorisPage = false) {
  if (!movies || movies.length === 0) {
    return "<p>Aucun film disponible.</p>";
  }

  let html = "";
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    let movieHtml = template;
    movieHtml = movieHtml.replace("{{image}}", movie.image);
    movieHtml = movieHtml.replace("{{title}}", movie.name);
    movieHtml = movieHtml.replace("{{handler}}", `C.handlerDetail(${movie.id})`);

    if (isFavorisPage) {
      movieHtml = movieHtml.replace("{{buttonClass}}", "removeFavoris_button");
      movieHtml = movieHtml.replace("{{buttonAction}}", `C.removeFavoris(${movie.id})`);
      movieHtml = movieHtml.replace("{{buttonLabel}}", "Supprimer des favoris");
      movieHtml = movieHtml.replace("{{iconPath}}", "M6 18L18 6M6 6l12 12");
    } else {
      movieHtml = movieHtml.replace("{{buttonClass}}", "addFavoris_button");
      movieHtml = movieHtml.replace("{{buttonAction}}", `C.addFavoris(${movie.id})`);
      movieHtml = movieHtml.replace("{{buttonLabel}}", "Ajouter aux favoris");
      movieHtml = movieHtml.replace("{{iconPath}}", "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"); // Icône de bookmark    
    }

    html += movieHtml;
  }

  return html;
};

export { Movie };
