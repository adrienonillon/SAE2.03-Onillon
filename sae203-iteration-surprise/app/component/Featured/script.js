let templateFile = await fetch("./component/Featured/template.html");
let template = await templateFile.text();

let Featured = {};

Featured.format = function (movies) {
  if (!movies || movies.length === 0) {
    console.error("Aucun film disponible !");
    return "<p>Aucun film à la une.</p>";
  }


  let movieCards = "";
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    let movieHtml = `
      <div class="featured-card__btn" onclick="C.handlerDetail(${movie.id})">
        <img
          class="featured-card__image"
          src="../../server/images/${movie.image}" loading="lazy"
          alt="${movie.name}"
        />
        <div class="featured-card__overlay">
          <h2 class="featured-card__title">${movie.name}</h2>
          <p class="featured-card__description">${movie.description}</p>
        </div>
      </div>
    `;
    movieCards += `<div class="featured-card">${movieHtml}</div>`;
  }


  let TheDarkKnight = null;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].name?.trim().toLowerCase() === "the dark knight rises") {
      TheDarkKnight = movies[i];
      break;
    }
  }

  let TheDarkKnightHighlight = "";
  if (TheDarkKnight) {
    TheDarkKnightHighlight = `
      <div class="featured-highlight" onclick="C.handlerDetail(${TheDarkKnight.id})">
        <img class="featured-highlight__image" src="../../server/images/darkknight.webp" alt="${TheDarkKnight.name}" loading="lazy">
        <div class="featured-highlight__overlay">
          <h2 class="featured-highlight__title">${TheDarkKnight.name}</h2>
          <p class="featured-highlight__description">${TheDarkKnight.description}</p>
        </div>
      </div>
    `;
  }


  template = template.replace(
    '<div class="featured-section">',
    `<div class="featured-section">${TheDarkKnightHighlight}`
  );

  const uniqueId = "carousel-track-" + Date.now();
  let featuredHtml = template
    .replace(/{{carouselId}}/g, uniqueId)
    .replace("{{movieCard}}", movieCards);

  return featuredHtml;
};

export { Featured };
