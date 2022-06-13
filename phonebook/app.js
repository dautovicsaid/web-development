var backendUrl = "http://localhost/phonebook_backend/";

async function getContacts() {
  let response = await fetch(backendUrl + "getContacts.php");
  let contacts = await response.json();

  displayContacts(contacts);
}

function displayContacts(contacts) {
  let list = document.getElementById("contactsList");
  contactsHTML = "";
  contacts.forEach((contact) => {
    contactsHTML += ` <li>${contact.first_name} ${contact.last_name} (${contact.email})</li>`;
  });
  list.innerHTML = contactsHTML;
}

getContacts();
