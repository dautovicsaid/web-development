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

  console.log(`username:${username}, password:${password}`);

  users.forEach(function (user) {
    if (user.username == username && user.password == password)
      alert("Welcome");
    result = true;
  });

  return result;
}
// login("filip1", "sifra123");

//DOM

let usernameInput = document.getElementById("username_input");
console.dir(usernameInput);
