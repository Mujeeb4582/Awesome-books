const booksList = [];

class BookInfo {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function Add(title, author){
  const book = new BookInfo(title, author);
  booksList.push(book);
}


const books_list = document.getElementById('books_list');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelectorAll('#author');
console.log(bookTitle);
console.log(bookAuthor);
function addtion () {
  // const books = booksList[];
  Add(bookTitle, bookAuthor);
  books_list.innerHTML += `
  <h3>Title ${bookTitle}</h3>
  <h3>Auther ${bookAuthor}</h3>
  <button type="submit">Remove</button>
  <hr>
  `;
}

console.log(booksList);
