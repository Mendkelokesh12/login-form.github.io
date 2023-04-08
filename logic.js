var  nameV,emailV,passwordV;

function readFom() {
  nameV = document.getElementById("name").value;
  emailV = document.getElementById("email").value;
  passwordV = document.getElementById("password").value;
  console.log( nameV,emailV,passwordV);
}

document.getElementById("submit").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("instagram/" + nameV)
    .set({
      
      name: nameV,
      email: emailV,
      password: passwordV,
    });
  alert("Data submit");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
};


document.getElementById("clear").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("instagram/" + nameV)
    .remove();
  alert("Data clear");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
};
