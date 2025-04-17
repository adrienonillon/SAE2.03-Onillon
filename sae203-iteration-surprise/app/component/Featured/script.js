let templateFile = await fetch("./component/Featured/template.html");
let template = await templateFile.text();

let Featured = {};

Featured.format = function (movies) {
  if (!movies || movies.length === 0) {
    return "<p>Aucun film à la une.</p>";
  }

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

  const kingsman = movies.find((movie) =>
    movie.name.toLowerCase().includes("kingsman")
  );

  let kingsmanHighlight = "";
  if (kingsman) {
    kingsmanHighlight = `
      <div class="featured-highlight" onclick="C.handlerDetail(${kingsman.id})">
        <img class="featured-highlight__image" src="https://mmi.unilim.fr/~onillon4/SAE2.03-Onillon/sae203-iteration-surprise/server/images/kingsmanL.jpg" alt="${kingsman.name}">
        <div class="featured-highlight__overlay">
          <h2 class="featured-highlight__title">${kingsman.name}</h2>
          <p class="featured-highlight__description">${kingsman.description}</p>
        </div>
      </div>
    `;
  }

  // Étape 3 : injecter le highlight en haut de la section
  template = template.replace(
    '<div class="featured-section">',
    `<div class="featured-section">${kingsmanHighlight}`
  );

  const uniqueId = "carousel-track-" + Date.now();
  let featuredHtml = template
  .replace(/{{carouselId}}/g, uniqueId)
  .replace("{{movieCard}}", movieCards);

  return featuredHtml;
};

export { Featured };