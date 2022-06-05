const moviesWrapper = document.getElementById("moviesWrapper");
const createMovieForm = document.getElementById("createMovieForm");
const createMovieSuccess = document.getElementById("createMovieSuccess");
const createMovieModal = document.getElementById("createMovieModal");
const backdrop = document.getElementById("backdrop");

const createMovieInputs = {
  title: document.getElementsByName("title")[0],
  year: document.getElementsByName("year")[0],
  country: document.getElementsByName("country")[0],
  note: document.getElementsByName("note")[0],
  actors: document.getElementsByName("actors")[0],
};

const movies = [
  {
    watched: false,
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
  {
    watched: false,
    title: "The Invisible Guest",
    year: 2016,
    country: "SAD",
    note: "tekst",
    actors: ["Ana Wagener", "Tomas Garido"],
  },
];

function showMovies() {
  let movieRows = [];

  movies.forEach((movie, index) => movieRows.push(movieRow(movie, index)));

  moviesWrapper.innerHTML = movieRows.join("");
}

function movieRow(movie, index) {
  let watchedCheckboxChecked = movie.watched ? "checked" : "";
  let rowClassNames = "movie-row";

  if (movie.watched) {
    rowClassNames += " watched";
  }

  return `<tr id="row${index}" class="${rowClassNames}">
    <td><input type="checkbox" ${watchedCheckboxChecked} onchange="setWatched(event, ${index})"/></td>
    <td>${movie.title}</td>
    <td>${movie.year}</td>
    <td>${movie.country}</td>
    <td>${movie.note}</td>
    <td>${movie.actors.join("<br>")}</td>
    </tr>`;
}

function setWatched(event, index) {
  let isChecked = event.target.checked;
  let movieRow = document.getElementById(`row${index}`);

  movies[index].watched = isChecked;

  if (movies[index].watched) {
    movieRow.classList.add("watched");
  } else {
    movieRow.classList.remove("watched");
  }
}

function addMovie(event) {
  event.preventDefault();

  let formData = {};

  Object.keys(createMovieInputs).forEach(
    (inputName) => (formData[inputName] = createMovieInputs[inputName].value)
  );

  if (!validateMovieFormData(formData)) {
    return;
  }

  let movie = {
    watched: false,
    title: formData.title,
    year: parseInt(formData.year),
    country: formData.country,
    note: formData.note,
    actors: formData.actors.split(","),
  };

  movies.push(movie);
  showMovies();

  createMovieForm.reset();
  closeCreateMovieModal(false);

  showCreateMovieSuccess();
}

function validateMovieFormData(movie) {
  let errors = {
    title: null,
    year: null,
    actors: null,
  };

  if (movie.title.length < 1) {
    errors.title = "Morate unijeti naziv filma";
  }

  if (isNaN(movie.year)) {
    errors.year = "Film mora biti broj";
  } else if (!(parseInt(movie.year) > 1930 && parseInt(movie.year) < 2021)) {
    errors.year = "Film mora biti napravljen u periodu od 1930-2021";
  }

  if (movie.actors === "") {
    errors.actors = "Film mora imati makar 1 glumca";
  }

  for (let property of Object.keys(errors)) {
    if (!(errors[property] === null)) {
      displayCreateMovieErrors(errors);
      return false;
    }
  }

  return true;
}

function displayCreateMovieErrors(errors) {
  for (let property of Object.keys(errors)) {
    let errorMessage = errors[property];
    let errorSpan = document.getElementById(`error-${property}`);

    if (!(errorMessage == null)) {
      errorSpan.classList.remove("d-none");
      errorSpan.innerHTML = errorMessage;
    } else {
      errorSpan.innerHTML = "";
      errorSpan.classList.add("d-none");
    }
  }
}

function showCreateMovieModal() {
  backdrop.classList.remove("d-none");
  createMovieModal.style.display = "block";
  createMovieModal.classList.add("show");
}

function closeCreateMovieModal(resetErrorInputs) {
  backdrop.classList.add("d-none");
  createMovieModal.style.display = "none";
  createMovieModal.classList.remove("show");

  if (resetErrorInputs) {
    let inputs = document.getElementsByClassName("input-error");

    for (let input of inputs) {
      input.innerHTML = "";
      input.classList.add("d-none");
    }
  }
}

function showCreateMovieSuccess() {
  createMovieSuccess.classList.remove("d-none");

  setTimeout(() => {
    createMovieSuccess.classList.add("d-none");
  }, 3000);
}
