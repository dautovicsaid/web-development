const baseUrl = "https://reqres.in/api/";
function loadUsers(page = 1) {
  fetch(baseUrl + "users?page=" + page)
    .then((response) => response.json())
    .then((responseJSON) => {
      let users = responseJSON.data;
      let totalPages = responseJSON.total_pages;
      displayUsers(users);
      displayPagination(totalPages);
    });
}

function displayUsers(users) {
  let usersArray = [];
  users.forEach((user) => {
    usersArray.push(`
      <tr>
        <td>${user.id}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.email}</td>
        <td>
            <img alt="Avatar" src="${user.avatar}" class="userAvatar" />
        </td>
        <td>
            <a class="btn btn-sm btn-primary" onclick="loadUserDetails(${user.id})"> detalji </a>
        </td>
      </tr>
      `);
  });

  document.getElementById("usersTableBody").innerHTML = usersArray.join("");
}

function displayPagination(total_pages) {
  if (total_pages > 1) {
    document.getElementById("pagination").classList.remove("d-none");
    document
      .getElementById("lastPageButton")
      .setAttribute("onclick", `loadUsers(${total_pages})`);
  }
}

function loadUserDetails(userId) {
  fetch(baseUrl + "users/" + userId)
    .then((response) => response.json())
    .then((responseJSON) => showSingleUserDetails(responseJSON.data));
}

function showSingleUserDetails(user) {
  document.getElementById("singleUserDetails").classList.remove("d-none");
  document.getElementById("userImage").src = user.avatar;

  document.getElementById("userDetails").innerHTML = `
    <p>Ime : ${user.first_name}</p>
    <p>Prezime : ${user.last_name}</p>
    <p>Email : ${user.email}</p>
  `;
}
loadUsers();
