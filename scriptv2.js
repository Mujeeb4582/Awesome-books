const booksList = []; // Declear array for storing the bookList

class BookInfo {
  // create the object using constructor method
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class UI {
  // To display the title and name of the author on the browser
  static DisplayBooks() {
    const books = BookInfo;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const books_list = document.getElementById('books_list');
    books_list.innerHTML += `
    <h3>${book.title}</h3>
    <h3>${book.author}</h3>
    <button type="submit">Remove</button>
    <hr>
    `;
  }
}

// clear the input field
function clearInput() {
  document.getElementById('bookInfo').reset();
}

document.addEventListener('DOMContinentLoaded', UI.DisplayBooks); // eventListner

document.querySelector('.bookInfo').addEventListener('submit', (e) => {
  // for loop for reading input field
  e.preventDefault();

  const Title = document.querySelector('.title').value;
  const Author = document.querySelector('.author').value;

  const book = new BookInfo(Title, Author); // creating the new object
  booksList.push(book); // storing in the array
  console.log(booksList);

  UI.addBookToList(book); // call the function for display the objects on the browser
  clearInput(); // function call of clearing the input field
});
