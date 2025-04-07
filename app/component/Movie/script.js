// let templateFile = await fetch("./component/Movie/template.html");
// let template = await templateFile.text();

// let templateFile2 = await fetch("./component/Movie/template-img.html");
// let template2 = await templateFile2.text();

// let Movie = {};
// Movie.format = function (movies) {
//   if (movies.length === 0) {
//     return "<p>Il n'y a pas de films disponibles.</p>";
//   }
  
//   let html = "";
//   movies.forEach((movie) => {
//     let mov=template2;
//     let movieHtml = template;
//     mov = mov.replace("{{image}}", mov.image);
//     mov = mov.replace("{{title}}", mov.name);
//     mov = mov.replace("{{description}}", mov.description);
//     mov = mov.replace("{{handler}}", `C.handlerDetail(${mov.id})`);
//     movieHtml = movieHtml.replace("{{movieimg}}", mov);
//     html += movieHtml;
//   });

//   return html;
// };

// export { Movie };

let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};
Movie.format = function (movies) {
  if (movies.length === 0) {
    return "<p>Il n'y a pas de films disponibles.</p>";
  }

  let html = "";
  movies.forEach((movie) => {
    let movieHtml = template;
    movieHtml = movieHtml.replace("{{image}}", movie.image);
    movieHtml = movieHtml.replace("{{title}}", movie.name);
    movieHtml = movieHtml.replace("{{description}}", movie.description);
    movieHtml = movieHtml.replace("{{handler}}", `C.handlerDetail(${movie.id})`);

    html += movieHtml;
  });

  return html;
};

export { Movie };
