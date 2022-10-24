const booksList = []; // Declear array for storing the bookList
const body = document.querySelector('body');
const retrieveData = localStorage.getItem('info');

// load the body on browser refresh and pre-fill the browser
body.onload = () => {
  if (retrieveData) {
    const previousData = JSON.parse(retrieveData);
    for (let i = 0; i < previousData.length; i++) {
      // loop for retriveve data from array
      UI.addBookToList(previousData[i]);
    }
  }
};

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
    const row = document.createElement('div')
    row.innerHTML += `
    <h3>${book.title}</h3>
    <h3>${book.author}</h3>
   <button type="submit" class= "delete">Remove</button>
    <hr>
    `;
    books_list.appendChild(row)
  }

  static deleteBook(el) {
    // function for deleting objects
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
      // el.index.localStorage.removeItem()
    }
  }




}

// function remove() {
//   const filtered = greetings.filter(item => item !== 'Hello');
//   localStorage.removeItem("info", JSON.stringify(filtered));
//  }

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

  localStorage.setItem('info', JSON.stringify(booksList));

  clearInput(); // function call of clearing the input field
});

document.querySelector('.books_list').addEventListener('click', (e) => {
  // for calling remove button

  UI.deleteBook(e.target);
  UI.removeBook(index);
});



