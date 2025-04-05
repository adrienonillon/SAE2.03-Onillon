let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function(movie) { 
    let html = template;
    html = html.replace('{{image}}', movie.image);
    html = html.replace('{{id}}', movie.id);
    html = html.replace('{{title}}', movie.name);
    return html;
}

Movie.formatMany = function(movies) { 
    let html = '';
    for (const movie of movies) {  
        html += Movie.format(movie);  
    }
    return html;
}

export { Movie };
