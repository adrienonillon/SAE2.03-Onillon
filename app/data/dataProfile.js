let HOST_URL = "https://mmi.unilim.fr/~onillon4/SAE2.03-Onillon";

let DataProfile = {};

DataProfile.readProfile = async function () {
    let answer = await fetch(
      HOST_URL + "/server/script.php?todo=readProfile" );
    let profile = await answer.json();
    return profile;
  };
  
  // DataProfile.requestMovies = async function () {
  //     let answer = await fetch(
  //       HOST_URL + "/server/script.php?todo=readMovies&age=7" );
  //     let profile = await answer.json();
  //     console.log(profile);
  //     return profile;
  //   };

  export { DataProfile };