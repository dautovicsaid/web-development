var loginButton = document.getElementById("login_button");
loginButton.addEventListener("click", () => checkLogin());

const users = [
  {
    username: "test",
    password: "sifra",
    name: "Marko Markovic",
  },
  {
    username: "filip",
    password: "sifra123",
    name: "Filip Filipovic",
  },
];

function login(username, password) {
  let result = false;

  users.forEach((user) => {
    if (user.username == username && user.password == password) result = true;
  });

  return result;
}
// login("filip1", "sifra123");

//DOM

function getUserInputs() {
  let usernameInput = document.getElementById("username_input");
  let username = usernameInput.value;
  let passwordInput = document.getElementById("password_input");
  let password = passwordInput.value;

  if (!validate(username, password)) return false;
  return {
    username: username,
    password: password,
  };
}

function checkLogin() {
  let userInputs = getUserInputs();

  if (!userInputs) return false;

  let loginResult = login(userInputs.username, userInputs.password);

  //   if (loginResult) {
  //     alert("Welcome");
  //   } else {
  //     alert("Wrong credentials");

  //     loginResult ? alert("Welcome") : alert("Wrong credentials...");
  let resultText = "";
  let resultClass = "";
  let loginResultDiv = document.getElementById("loginResultDiv");
  if (loginResult) {
    // loginResultDiv.classList.remove("alert-danger");
    // resultText = "<b>Dobrodosli!</b> Ispravni kredincijali!";
    // resultClass = "alert-success";
    window.location.href = "./cities.html";
  } else {
    // loginResultDiv.classList.remove("alert-success");
    // resultText = "<b>Greska!</b> Pogresni kredincijali!";
    // resultClass = "alert-danger";
  }

  loginResultDiv.innerHTML = resultText;
  loginResultDiv.classList.add(resultClass);
}

function validate(username, password) {
  let inputs = document.getElementsByClassName("login-input");
  for (input of inputs) {
    input.classList.remove("is-invalid");
  }
  let res = true;
  if (username == "") {
    document.getElementById("username_input").classList.add("is-invalid");
    res = false;
  }
  if (password == "") {
    document.getElementById("password_input").classList.add("is-invalid");
    res = false;
  }
  return res;
}
