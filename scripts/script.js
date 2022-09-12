const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", showBookForm);

const submitBookButton = document.querySelector("#submit-book");
submitBookButton.addEventListener("click", showBookForm);

function showBookForm(event) {
  const bookForm = document.querySelector("#book-form");
  let hide;
  if (event.target.id === "add-book-button") {
    bookForm.removeAttribute("hidden");
  } else {
    bookForm.setAttribute("hidden", true);
  }
}
