let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function(movie) { 
    let html = template;
    html = html.replace('{{image}}', movie.image);
    html = html.replace('{{title}}', movie.name);
    html = html.replace('{{description}}', movie.description);
    html = html.replace('{{director}}', movie.director);
    html = html.replace('{{year}}', movie.year);
    html = html.replace('{{id_category}}', movie.id_category);
    html = html.replace('{{min_age}}', movie.min_age);


    return html;
}
export { MovieDetail };