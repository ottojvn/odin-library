const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", showBookForm);

function showBookForm() {
  const bookForm = document.querySelector("#book-form");
  bookForm.removeAttribute("hidden");
}

const submitBookButton = document.querySelector("#submit-book");
submitBookButton.addEventListener("click", hideBookForm);

function hideBookForm() {
  const bookForm = document.querySelector("#book-form");
  bookForm.setAttribute("hidden", true);
}
