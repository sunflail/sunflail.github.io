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
document.getElementById("information").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log('submitted');
    let newName = event.target.name.value;
    let newLocation = event.target.location.value;
    let newPhotograph = event.target.photo.value;
    let newDescription = event.target.description.value;
    console.log(`${newName}, ${newLocation}, ${newPhotograph}, ${newDescription}`);
    createCard(newName, newLocation, newPhotograph, newDescription);
});

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
    newEditBtn.href = "#"
    newEditBtn.innerHTML = "Edit"
    let newDeleteBtn = document.createElement("a");
    newDeleteBtn.classList = "btn btn-danger card-link";
    newDeleteBtn.href = "#"
    newDeleteBtn.innerHTML = "Delete"
    document.getElementById("savedDestinations")
        .appendChild(newCard)
        .appendChild(newImg);
    document.getElementById("savedDestinations")
        .appendChild(newCardBody)
        .appendChild(newCardTitle)
    document.getElementById("savedDestinations")
        .appendChild(newCardBody)
        .appendChild(newCardSubTitle)
    document.getElementById("savedDestinations")
        .appendChild(newCardBody)
        .appendChild(newCardDescription)
    document.getElementById("savedDestinations")
        .appendChild(newCardBody)
        .appendChild(newEditBtn)
    document.getElementById("savedDestinations")
        .appendChild(newCardBody)
        .appendChild(newDeleteBtn);
}

function addEditButton() {
    //    <a href="#" class="btn btn-warning"> Edit button prompts for new elements for the above </a>
    let newEdit = document.createElement("button");
    newEdit.classList = "btn btn-warning";
    newEdit.innerHTML = "Edit";
    document.getElementById("savedDestination")
        .appendChild(newCardBody)
        .appendChild()
}

function addDeleteButton() {
    //   <a href="#" class = "btn btn-danger"> Delete button removes all of the elements / tags from the DOM </a>
}