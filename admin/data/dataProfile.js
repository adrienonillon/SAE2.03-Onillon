let HOST_URL = "https://mmi.unilim.fr/~onillon4/SAE2.03-Onillon";

let DataProfile = {};


DataProfile.addProfile = async function (fdata) {
  let config = {
    method: "POST", 
    body: fdata, 
  };


  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=addProfile&",
    config
  );
  let data = await answer.json();
  return data;
};

DataProfile.modify = async function (fdata) {
  let config = {
    method: "POST",
    body: fdata,
  };

  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=updateProfile",
    config
  );

  let data = await answer.json();
  return data.message;
};

export { DataProfile };

