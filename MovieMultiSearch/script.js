// use the omdbapi or the imdbapi
// Card creation and manipulation
// When the submit button (for either option) is pressed, need to populate the results area
{
  /* This is the information that needs to be filled in by the form input and saved to each spot
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."> photo goes here, default if none entered
            <div class="card-body">
                <h5 class="card-title">Name innerHTML</h5>
                <h6 class="card-subtitle"> Location gets fed to this innerHTML</h6>
                <p class="card-text">Description innerHTML</p>
                <a href="#" class="btn btn-warning">Edit button prompts for new elements for the above </a>
                <a href="#" class="btn btn-danger">Delete button removes all of the elements/tags from the DOM</a>
            </div>
    </div> */
}

// Get the information from the form and store it by each id
// Add in another button for IMDB and handle via functions
let user_search_terms;

document.querySelector("#search_form").addEventListener("submit", (event) => {
  if (event.submitter.id === "omdb_submit") {
    event.target.querySelector("#omdb_submit").onclick = clickButton(event);
  } else if (event.submitter.id === "imdb_submit") {
    event.target.querySelector("#imdb_submit").onclick = clickButton(event);
  }
});
// document
//   .querySelector("#search_form")
//   .querySelector("#omdb_submit")
//   .addEventListener("click", clickButton);

// document
//   .querySelector("#search_form")
//   .querySelector("#imdb_submit")
//   .addEventListener("click", clickButton);

function clickButton(event) {
  event.preventDefault();
  user_search_terms = event.target.search_terms.value;
  // Create the card
  createCard();
  // Clear the form
  event.target.reset();
}

function createSearchByTitleButton(divLocation, buttonName) {
  let searchButton = document.createElement("a");
  searchButton.href = "#";
  searchButton.type = "submit";
  searchButton.classList = `${buttonName.toLowerCase()} btn btn-primary`;
  searchButton.value = user_search_terms;
  searchButton.innerHTML = `${buttonName} By Title`;
  searchButton.onclick = clickByTitleButton;
  // This makes sure the button is created in the correct, new card
  divLocation.appendChild(searchButton);
}

function clickByTitleButton(event) {
  event.preventDefault();
  if (event.target.classList.contains("omdb")) {
    getOMDBResults(event.target.value);
  } else if (event.target.classList.contains("imdb")) {
    getIMDBResults(event.target.value);
  }
}

function createSearchGiphyButton(divLocation) {
  let searchButton = document.createElement("a");
  searchButton.href = "#";
  searchButton.classList = "btn btn-primary";
  searchButton.innerHTML = "Search Giphy";
  searchButton.value = user_search_terms;
  searchButton.onclick = clickSearchGiphyButton;
  divLocation.appendChild(searchButton);
}

function clickSearchGiphyButton(event) {
  event.preventDefault();
  getGiphyGif(event.target.value);
}

// Clears the div containing all of the results and recreates it - called on every button push
function clearResults() {
  document.querySelector("#sub_results_card").remove();
  let subResultsCard = document.createElement("div");
  subResultsCard.id = "sub_results_card";
  subResultsCard.classList = "card-body border border-danger";
  document.querySelector("#sub_results_container").appendChild(subResultsCard);
}

function createCard() {
  let newCard = document.createElement("div");
  newCard.classList = "card border border-danger";
  newCard.id = "movies_card";
  let newCardBody = document.createElement("div");
  newCardBody.classList = "card-body border border-primary";
  let newCardTitle = document.createElement("h3");
  newCardTitle.classList = "card-title";
  newCardTitle.innerHTML = user_search_terms;
  let newCardBtnContainer = document.createElement("div");
  newCardBtnContainer.classList = "btn_container card-subtitle";
  document.getElementById("result_card").appendChild(newCard);
  document
    .getElementById("result_card")
    .appendChild(newCardBody)
    .appendChild(newCardTitle);
  document
    .getElementById("result_card")
    .appendChild(newCardBody)
    .appendChild(newCardBtnContainer);
  let buttonName = event.submitter.innerHTML;
  createSearchByTitleButton(newCardBtnContainer, buttonName);
  createSearchGiphyButton(newCardBtnContainer);
}

// Giphy button
function getGiphyGif(terms) {
  clearResults();
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=3yV73wM1M4ory5C4ecWSfltT8brbZH71&q=${terms}&limit=12/`
    )
    .then(function (response) {
      const gifs = response.data.data;
      gifs.map((gif) => {
        const image = gif.images.downsized.url;
        const title = gif.title;

        finishMap(image, title);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

// OMDB button
function getOMDBResults(terms) {
  clearResults();
  axios
    .get(`https://www.omdbapi.com/?apikey=967682e&s=${terms}&type=movie/`)
    .then(function (response) {
      if (response.data.Response === "False") {
        poster =
          "https://pucksandpuzzlepieces.files.wordpress.com/2012/12/filenotfound404.jpg";
        movieTitle = response.data.Error;
        finishMap(poster, movieTitle);
      } else {
        const titles = response.data.Search;
        if (titles.length > 12) {
          titles = titles.slice(0, 11);
        }
        titles.map((title) => {
          const poster = title.Poster; // url to direct jpg - CAPITAL Poster
          const movieTitle = title.Title; // url to title - CAPITAL Title

          finishMap(poster, movieTitle);
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

// IMDB button
function getIMDBResults(terms) {
  clearResults();
  axios
    .get(`https://imdb-api.com/en/API/SearchMovie/k_qdx7memh/${terms}/`)
    .then(function (response) {
      const titles = response.data.results;
      if (titles.length > 12) {
        titles = titles.slice(0, 11);
      }
      titles.map((title) => {
        const poster = title.image; // url to direct jpg
        const movieTitle = title.title; // url to title

        finishMap(poster, movieTitle);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Utility function to finish the mapping once the correct values are assigned based on each API's json structure
function finishMap(image, imageTitle) {
  const photo = document.createElement("img");
  photo.src = image;

  const titleP = document.createElement("p");
  titleP.innerHTML = imageTitle;
  document.querySelector("#sub_results_card").appendChild(titleP);
  document.querySelector("#sub_results_card").appendChild(photo);
}
