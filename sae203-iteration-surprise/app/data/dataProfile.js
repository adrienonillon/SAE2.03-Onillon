let HOST_URL = "https://mmi.unilim.fr/~onillon4/SAE2.03-Onillon/sae203-iteration-surprise";

let DataProfile = {};

DataProfile.readProfile = async function () {
    let answer = await fetch(
      HOST_URL + "/server/script.php?todo=readProfile" );
    let profile = await answer.json();
    return profile;
  };
  
  DataProfile.readOne = async function (id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfile&id=" + id);
    
    let res = await answer.json();
    return res;
  };
  

  export { DataProfile };