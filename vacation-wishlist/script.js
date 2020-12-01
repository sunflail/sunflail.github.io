// When the submit button (add to wishlist) is pressed, need to populate the wishlist area
// Need to create the elements for a carousel-indicator (li), as well as the full DOM setup for a carousel. First one needs to be active (if 0 items), and the rest need to just be carousel-item. If all are deleted need to change a flag to make sure that the defaults are active. If the first one is deleted, need to make sure that the next child is marked as active. Need to make sure that appropriate list item is also deleted. Super complicated so this is a feature upgrade.
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
document
  .getElementById("information")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submitted");
    let newName = event.target.name.value;
    let newLocation = event.target.location.value;
    let newPhotograph = event.target.photo.value;
    let newDescription = event.target.description.value;
    createCard(newName, newLocation, newPhotograph, newDescription);
    clearFields(event.target);
  });

function clearFields(form) {
  for (let i = 0; i < form.length; i++) {
    form.elements[i].value = "";
  }
}

function createCard(name, location, photo, description) {
  let newCard = document.createElement("div");
  newCard.classList = "card";
  let newImg = document.createElement("img");
  newImg.classList = "card-img-top";
  newImg.alt = location;
  newImg.src = photo;
  let newCardBody = document.createElement("div");
  newCardBody.classList = "card-body";
  let newCardTitle = document.createElement("h5");
  newCardTitle.classList = "card-title";
  newCardTitle.innerHTML = name;
  let newCardSubTitle = document.createElement("h6");
  newCardSubTitle.classList = "card-subtitle";
  newCardSubTitle.innerHTML = location;
  let newCardDescription = document.createElement("p");
  newCardDescription.classList = "card-text";
  newCardDescription.innerHTML = description;
  let newEditBtn = document.createElement("a");
  newEditBtn.classList = "btn btn-warning card-link";
  newEditBtn.href = "#";
  newEditBtn.innerHTML = "Edit";
  newEditBtn.onclick = editItem;
  let newDeleteBtn = document.createElement("a");
  newDeleteBtn.classList = "btn btn-danger card-link";
  newDeleteBtn.href = "#";
  newDeleteBtn.innerHTML = "Delete";
  newDeleteBtn.onclick = deleteItem;
  document
    .getElementById("savedDestinations")
    .appendChild(newCard)
    .appendChild(newImg);
  document
    .getElementById("savedDestinations")
    .appendChild(newCardBody)
    .appendChild(newCardTitle);
  document
    .getElementById("savedDestinations")
    .appendChild(newCardBody)
    .appendChild(newCardSubTitle);
  document
    .getElementById("savedDestinations")
    .appendChild(newCardBody)
    .appendChild(newCardDescription);
  document
    .getElementById("savedDestinations")
    .appendChild(newCardBody)
    .appendChild(newEditBtn);
  document
    .getElementById("savedDestinations")
    .appendChild(newCardBody)
    .appendChild(newDeleteBtn);
}

function editItem(event) {
  // When clicked, prompt the user through the 4 fields and give the option to change them.
  // Accept new values, if blank or cancel retain current values
  let cardBody = event.target.parentElement;
  let rename = (cardBody.children[0].innerHTML = prompt(
    "What is the new name?"
  ));
  cardBody.children[1].innerHTML = prompt("What is the new location?");
  cardBody.children[2].innerHTML = prompt("What is the new description?");
  let oldImg = event.target.parentElement.previousSibling.children[0];
  let wantNewImg = confirm("Do you want to change the picture?");
  if (wantNewImg) {
    oldImg.src = prompt("Please enter the new URL and press okay");
    oldImg.alt = rename;
  }
}

function deleteItem(event) {
  // When clicked, delete the entire card
  // Add an event listener, figure out how to target the entire parent card, and remove the whole parent html element.
  let cardBody = event.target.parentElement;
  // The img is a sibling card so needs to also be targeted and removed since the buttons only belong to card body as setup in this implementation of bootstrap
  let oldImg = event.target.parentElement.previousSibling;
  cardBody.remove();
  oldImg.remove();
}
