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
