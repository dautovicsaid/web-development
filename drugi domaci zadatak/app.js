const moviesWrapper = document.getElementById("moviesWrapper");
const createMovieForm = document.getElementById("createMovieForm");

const movies = [
  {
    watched: true,
    title: "Interstellar",
    year: 2014,
    country: "SAD",
    note: "tekst",
    actors: ["Matthew McConaughey", "En Hatavej"],
  },
  {
    watched: false,
    title: "Shutter Island",
    year: 2010,
    country: "SAD",
    note: "tekst",
    actors: ["Leonardo di Caprio", "Chuck Aule"],
  },
];

function showMovies() {
  let movieRows = [];

  movies.forEach((movie, index) => movieRows.push(movieRow(movie, index)));

  moviesWrapper.innerHTML = movieRows.join("");
}

function movieRow(movie, index) {
  let watchedCheckboxChecked = movie.watched ? "checked" : "";

  return `<tr>
    <td><input type="checkbox" ${watchedCheckboxChecked} onchange="setWatched(event, ${index})"/></td>
    <td>${movie.title}</td>
    <td>${movie.year}</td>
    <td>${movie.country}</td>
    <td>${movie.note}</td>
    <td>${movie.actors}</td>
    </tr>`;
}

function setWatched(event, index) {
  let isChecked = event.target.checked;

  movies[index].watched = isChecked;
  console.log(movies);
}

function addMovie(event) {
  event.preventDefault();

  let movie = {
    watched: false,
    title: document.getElementById("title").value,
    year: document.getElementById("year").value,
    country: document.getElementById("country").value,
    note: document.getElementById("note").value,
    actors: document.getElementById("actors").value.split(","),
  };

  if (!validateMovie(movie)) {
    return;
  }

  movies.push(movie);
  // moviesWrapper.innerHTML = moviesWrapper.innerHTML + movieRow(movie);
  showMovies();
}

function validateMovie(movie) {
  let errors = {};

  if (movieData.title === "Greska") {
    errors.title = "Mora imati preko 10 karaktera";
  }

  if (movieData.year === 0) {
    errors.year = "Godina imati preko 10 karaktera";
  }

  if (Object.keys(errors).length > 0) {
    displayCreateMovieErrors(errors);
    return false;
  }

  return true;
}

function displayCreateMovieErrors(errors) {
  for (let [key, value] of errors) {
    console.log(key, value);
  }
}
