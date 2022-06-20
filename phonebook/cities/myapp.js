var deleteCityModal = document.getElementById("deleteCityModal");

deleteCityModal.addEventListener("show.bs.modal", function (event) {
  console.log("Otvoren modal");
  // Button that triggered the modal
  let button = event.relatedTarget;
  console.log(button);
  // Extract info from data-bs-* attributes
  let cityId = button.getAttribute("data-bs-city-id");

  let deleteButton = deleteCityModal.querySelector(".modal-footer a");

  deleteButton.setAttribute("href", `delete.php?id=${cityId}`);
});
