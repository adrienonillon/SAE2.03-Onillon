let templateFile = await fetch("./component/MovieForm/template.html"); // Chargement du template HTML
let template = await templateFile.text();

let MovieForm = {};

// Fonction pour formater les données du formulaire
MovieForm.format = function (movieData) {
    let html = template;

    // Remplacer les placeholders dans le template avec les données du formulaire
    html = html.replace('{{name}}', movieData.name);
    html = html.replace('{{director}}', movieData.director);
    html = html.replace('{{year}}', movieData.year);
    html = html.replace('{{length}}', movieData.length);
    html = html.replace('{{description}}', movieData.description);
    html = html.replace('{{categorie}}', movieData.categorie);
    html = html.replace('{{image}}', movieData.image);
    html = html.replace('{{trailer}}', movieData.trailer);
    html = html.replace('{{min_age}}', movieData.min_age);
    html = html.replace('{{handler}}', handler);

    return html;
};

// Fonction pour afficher les films ajoutés (ou un message de succès)
MovieForm.render = function (movieData) {
    let content = document.querySelector("#movieFormContainer"); // Cible l'élément où afficher le résultat
    content.innerHTML = MovieForm.format(movieData);  // Insère le HTML formaté
};

// Export du module
export { MovieForm };
