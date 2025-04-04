
let HOST_URL = "https://mmi.unilim.fr/~onillon4/SAE2.03-Onillon";

let DataMovie = {}; 

  DataMovie.addMovie = async function (fdata) {
    let config = {
      method: "POST", // méthode HTTP à utiliser
      body: fdata, // données à envoyer sous forme d'objet FormData
    };
    let answer = await fetch(
      HOST_URL + "/server/script.php?todo=addMovie",
      config
    );
    let data = await answer.json();
    return data;
  };


export { DataMovie };