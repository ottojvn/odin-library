function Book(title, author = "Unknown", pages = undefined, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author},
  ${this.pages ? `${this.pages} pages` : "unknown number of pages"},
  ${this.read ? "already read" : "not read yet"}}`;
};

function addBookToLibrary(book) {
  library.push(book);
}

let library = [];
