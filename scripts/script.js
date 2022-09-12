function Book(title, author = "Unknown", pages = undefined, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toBookCard = function () {
  return `<h3>${this.title}</h3>
          <p>${this.author}</p>
          <p>${this.pages} pages</p>
          <p>${this.read ? "Read" : "Not read"}`;
};

function addBookToLibrary(book) {
  library.push(book);
  displayBooks();
}

function displayBooks() {
  const bookDiv = document.querySelector("#books-grid");
  bookDiv.innerHTML = "";
  for (let index = 0; index < library.length; ++index) {
    const bookCard = createBookCard(library[index], index);
    bookDiv.appendChild(bookCard);
  }
}

function createBookCard(book, id) {
  const bookCard = document.createElement("div");
  bookCard.innerHTML = book.toBookCard();
  bookCard.classList.add("book-card");
  bookCard.id = "book-${id}";
  return bookCard;
}

let library = [];

const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", toggleBookForm);

const submitBookButton = document.querySelector("#submit-book");
// submitBookButton.addEventListener("click", submitBook);
const bookForm = document.querySelector("#book-form");
bookForm.addEventListener("submit", submitBook);

function toggleBookForm() {
  if (bookForm.getAttribute("hidden") === "true") {
    bookForm.removeAttribute("hidden");
  } else {
    bookForm.setAttribute("hidden", true);
  }
}

function submitBook(event) {
  event.preventDefault();

  const title = document.querySelector("#book-title");
  const author = document.querySelector("#author-name");
  const pages = document.querySelector("#number-pages");
  const read = Array.from(document.querySelectorAll("[name='read-yet']")).find(
    (radio) => radio.checked
  );

  addBookToLibrary(
    new Book(title.value, author.value, pages.value, read.value)
  );

  title.value = "";
  author.value = "";
  pages.value = "";
  Array.from(document.querySelectorAll("[name='read-yet']")).forEach(
    (radio) => (radio.checked = false)
  );

  toggleBookForm();
}
