var deleteCountryModal = document.getElementById("deleteCountryModal");

deleteCountryModal.addEventListener("show.bs.modal", function (event) {
  // Button that triggered the modal
  let button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  let countryId = button.getAttribute("data-bs-country-id");

  let deleteButton = deleteCountryModal.querySelector(".modal-footer a");

  deleteButton.setAttribute("href", `delete.php?id=${countryId}`);
});
