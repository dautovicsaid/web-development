const moviesWrapper = document.getElementById("moviesWrapper");
const createMovieForm = document.getElementById("createMovieForm");

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

  return `<tr id="row${index}" class="notWatched">
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
  let movieRow = document.getElementById(`row${index}`);

  movies[index].watched = isChecked;
  movieRow.removeAttribute("class");

  if (movies[index].watched) {
    movieRow.classList.add("watched");
  } else {
    movieRow.classList.add("notWatched");
  }
}

function addMovie(event) {
  event.preventDefault();

  let formData = {
    title: document.getElementsByName("title")[0].value,
    year: document.getElementsByName("year")[0].value,
    country: document.getElementsByName("country")[0].value,
    note: document.getElementsByName("note")[0].value,
    actors: document.getElementsByName("actors")[0].value,
  };

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
  // moviesWrapper.innerHTML = moviesWrapper.innerHTML + movieRow(movie);
  showMovies();

  createMovieForm.reset();
  closeCreateMovieModal();
}

function validateMovieFormData(movie) {
  let errors = {
    title: undefined,
    year: undefined,
    country: undefined,
    note: undefined,
    actors: undefined,
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
    if (!(errors[property] === undefined)) {
      displayCreateMovieErrors(errors);
      return false;
    }
  }
  // if (Object.keys(errors).length > 0) {
  //   displayCreateMovieErrors(errors);
  //   return false;
  // }
  return true;
}

function displayCreateMovieErrors(errors) {
  for (let property of Object.keys(errors)) {
    let errorMessage = errors[property];
    let errorSpan = document.getElementById(`error-${property}`);

    if (!(errorMessage == undefined)) {
      errorSpan.removeAttribute("class");
      errorSpan.classList.add("d-inline", "invalid-feedback");
      errorSpan.innerHTML = errorMessage;
    } else {
      errorSpan.innerHTML = "";
      errorSpan.removeAttribute("class");
      errorSpan.classList.add("d-none");
    }
    // span#error-${property}.innerHtml = errorMEssage;
  }
}

function showCreateMovieModal() {
  document.getElementById("backdrop").style.display = "block";
  document.getElementById("createMovieModal").style.display = "block";
  document.getElementById("createMovieModal").classList.add("show");
}

function closeCreateMovieModal() {
  document.getElementById("backdrop").style.display = "none";
  document.getElementById("createMovieModal").style.display = "none";
  document.getElementById("createMovieModal").classList.remove("show");
}
