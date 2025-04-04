let templateFile = await fetch("./component/MovieForm/template.html"); // Chargement du template HTML
let template = await templateFile.text();

let MovieForm = {};

// Fonction pour formater les données du formulaire
MovieForm.format = function (handler) {
    let html = template;
    html = html.replace('{{handler}}', handler);
    return html;
};



// Export du module
export { MovieForm };
