let templateFile = await fetch("./component/Featured/template.html");
let template = await templateFile.text();

let Featured = {};
Featured.format = function (movies) {
  if (!movies || movies.length === 0) {
    return "<p>Aucun film à la une.</p>";
  }

  let html = "";
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    let movieHtml = template;
    movieHtml = movieHtml.replace("{{image}}", movie.image);
    movieHtml = movieHtml.replace("{{title}}", movie.name);
    movieHtml = movieHtml.replace("{{description}}", movie.description);
    movieHtml = movieHtml.replace("{{handler}}", `C.handlerDetail(${movie.id})`);
    html += movieHtml;
  }

  return "<p class='featured-card__title'> A l'affiche </p>" + html;
};

export { Featured };