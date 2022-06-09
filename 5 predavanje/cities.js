const cities = [
  {
    name: "Barcelona",
    countryName: "Spanija",
    population: 5321000,
    image: "barcelona.jpg",
  },
  {
    name: "Moskva",
    countryName: "Rusija",
    population: 1000000,
    image: "moskva.jpg",
  },
  {
    name: "Rim",
    countryName: "Italija",
    population: 732000,
    image: "rim.jpg",
  },
];

function displayCitiesAsTable() {
  let tableContent = "";
  cities.forEach((city) => {
    tableContent += `<tr>
                        <td>${city.name}</td>
                        <td>${city.countryName}</td>
                        <td>${city.population}</td>
                        <td></td>
                    </tr>`;
  });

  document.getElementById("cities_table_body").innerHTML = tableContent;
}

function displayCitiesAsCards() {
  let htmlContent = "";
  cities.forEach((city) => {
    htmlContent += `
    <div class="col-4">
        <div class="card">
            <img class="card-img-top" src="./images/${city.image}" alt="">
            <div class="card-body">
            <h5 class="card-title">${city.name}</h5>
            <p class="card-text">Broj stanovnika: ${city.population}</p>
            <p class="card-text">Drzava: ${city.countryName}</p>
        </div>
        </div>
    </div>

     `;
  });

  document.getElementById("cities_wrapper").innerHTML = htmlContent;
}

document
  .getElementById("add_city_button")
  .addEventListener("click", () => addNewCity());

displayCitiesAsTable();
