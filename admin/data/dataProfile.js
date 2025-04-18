let HOST_URL = "..";

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

DataProfile.update = async function (fdata) {
  let config = {
    method: "POST", 
    body: fdata, 
  };
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=updateProfile",
    config
  );
  let data = await answer.json();
  return data;
};

DataProfile.readProfile = async function () {
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=readProfile"
  );
  let data = await answer.json();
  return data;
};

export { DataProfile };

