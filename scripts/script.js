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
  bookCard.data = "${id}";

  const bookCardButtons = document.createElement("div");
  bookCard.appendChild(bookCardButtons);
  const toggleButton = document.createElement("img");
  toggleButton.classList.add("book-button");
  let imgsrc = book.read
    ? "./icons/toggle-switch.png"
    : "./icons/toggle-switch-off.png";
  toggleButton.setAttribute("src", imgsrc);
  toggleButton.addEventListener("click", function () {
    book.read = !book.read;
    displayBooks();
  });
  bookCardButtons.appendChild(toggleButton);

  const deleteButton = document.createElement("img");
  deleteButton.setAttribute("src", "./icons/delete.png");
  bookCardButtons.appendChild(deleteButton);
  deleteButton.classList.add("book-button");
  deleteButton.addEventListener("click", function () {
    library = library
      .slice(0, id)
      .concat(library.slice(id + 1, library.length));
    displayBooks();
  });

  return bookCard;
}

const lotr = new Book("LOTR 1", "JRR Tolkien", 123, true);
const lotr2 = new Book("LOTR 2", "JRR Tolkien", 231, false);
const lotr3 = new Book("LOTR 3", "JRR Tolkien", 332, false);

let library = [];
addBookToLibrary(lotr);
addBookToLibrary(lotr2);
addBookToLibrary(lotr3);

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
