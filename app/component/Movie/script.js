let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};
Movie.format = function (movies, isFavorisPage = false) {
  if (!movies || movies.length === 0) {
    return "<p>Aucun film disponible.</p>";
  }

  let html = "";
  movies.forEach((movie) => {
    let movieHtml = template;
    movieHtml = movieHtml.replace("{{image}}", movie.image);
    movieHtml = movieHtml.replace("{{title}}", movie.name);
    movieHtml = movieHtml.replace("{{handler}}", `C.handlerDetail(${movie.id})`);

    if (isFavorisPage) {
      // Bouton pour supprimer des favoris
      movieHtml = movieHtml.replace("{{buttonClass}}", "removeFavoris_button");
      movieHtml = movieHtml.replace("{{buttonAction}}", `C.removeFavoris(${movie.id})`);
      movieHtml = movieHtml.replace("{{buttonLabel}}", "Supprimer des favoris");
      movieHtml = movieHtml.replace("{{iconPath}}", "M6 18L18 6M6 6l12 12"); // Icône de croix
    } else {
      // Bouton pour ajouter aux favoris
      movieHtml = movieHtml.replace("{{buttonClass}}", "addFavoris_button");
      movieHtml = movieHtml.replace("{{buttonAction}}", `C.addFavoris(${movie.id})`);
      movieHtml = movieHtml.replace("{{buttonLabel}}", "Ajouter aux favoris");
      movieHtml = movieHtml.replace("{{iconPath}}", "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"); // Icône de bookmark
    }

    html += movieHtml;
  });

  return html;
};

export { Movie };
