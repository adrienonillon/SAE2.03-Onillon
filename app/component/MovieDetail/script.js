let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function(movie) { 
    let html = template;
    html = html.replace('{{image}}', movie.image);
    html = html.replace('{{titre}}', movie.name);
    html = html.replace('{{desc}}', movie.description);
    html = html.replace('{{director}}', movie.director);
    html = html.replace('{{year}}', movie.year);
    html = html.replace('{{length}}', movie.length);
    html = html.replace('{{id_category}}', movie.category_name);
    html = html.replace('{{min_age}}', movie.min_age);
    html = html.replace('{{trailer}}', movie.trailer);


    return html;
}
export { MovieDetail };
