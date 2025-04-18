let templateFile = await fetch("./component/Featured/template.html");
let template = await templateFile.text();

let Featured = {};

Featured.format = function (movies) {
  if (!movies || movies.length === 0) {
    console.error("Aucun film disponible !");
    return "<p>Aucun film à la une.</p>";
  }

  console.log("Liste des films :", movies);

  // Étape 1 : construire les cartes des films
  let movieCards = "";
  movies.forEach((movie) => {
    let movieHtml = `
      <div class="featured-card__btn" onclick="C.handlerDetail(${movie.id})">
        <img
          class="featured-card__image"
          src="https://mmi.unilim.fr/~onillon4/SAE2.03-Onillon/sae203-iteration-surprise/server/images/${movie.image}"
          alt="${movie.name}"
        />
        <div class="featured-card__overlay">
          <h2 class="featured-card__title">${movie.name}</h2>
          <p class="featured-card__description">${movie.description}</p>
        </div>
      </div>
    `;
    movieCards += `<div class="featured-card">${movieHtml}</div>`;
  });

  // Étape 2 : chercher "The Dark Knight Rises"
  const TheDarkKnight = movies.find((movie) =>
    movie.name?.trim().toLowerCase() === "the dark knight rises"
  );

  console.log("Film 'The Dark Knight Rises' trouvé :", TheDarkKnight);

  let TheDarkKnightHighlight = "";
  if (TheDarkKnight) {
    TheDarkKnightHighlight = `
      <div class="featured-highlight" onclick="C.handlerDetail(${TheDarkKnight.id})">
        <img class="featured-highlight__image" src="https://mmi.unilim.fr/~onillon4/SAE2.03-Onillon/sae203-iteration-surprise/server/images/darkknight.jpg" alt="${TheDarkKnight.name}">
        <div class="featured-highlight__overlay">
          <h2 class="featured-highlight__title">${TheDarkKnight.name}</h2>
          <p class="featured-highlight__description">${TheDarkKnight.description}</p>
        </div>
      </div>
    `;
  } else {
    console.error("Le film 'The Dark Knight Rises' n'a pas été trouvé !");
    TheDarkKnightHighlight = "<p>Le film 'The Dark Knight Rises' n'a pas été trouvé.</p>";
  }

  // Étape 3 : injecter le highlight en haut de la section
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
