let booksList = []; // Declare array for storing the bookList

const addBookForm = document.querySelector('#bookInfo');

const list = document.querySelector('.books_list');

// function for creating and display the list on the browser
function createListItem(item, booksListIndex) {
  const unOrderList = document.createElement('div');
  const li1 = document.createElement('h3');
  const li2 = document.createElement('h3');
  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove';
  removeBtn.type = 'button';
  const horzintalLine = document.createElement('hr');

  list.appendChild(unOrderList);
  // set innerHTML value
  li1.innerHTML = item.title;
  li2.innerHTML = item.author;
  unOrderList.appendChild(li1);
  unOrderList.appendChild(li2);
  unOrderList.appendChild(removeBtn);
  unOrderList.appendChild(horzintalLine);

  // remove button click listner
  removeBtn.addEventListener('click', (event) => {
    // Remove item from DOM
    event.target.parentElement.remove();
    // Remove item from booksList Array
    booksList.splice(booksListIndex, 1);
    // Remove iem from localStorage
    localStorage.setItem('list', JSON.stringify(booksList));
  });
}

// Loop over Array, create the element and append to the DOM
function renderBookList(lists) {
  lists.forEach((element, index) => {
    createListItem(element, index);
  });
}

// check is booksList exist in localStorage
const storedBookList = localStorage.getItem('list');
// //if Exist
if (storedBookList) {
  // JSON.parse booksList
  const previousList = JSON.parse(storedBookList);
  booksList = previousList;
  renderBookList(booksList);
}

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Access input tag values
  const bookName = addBookForm.bookTitle.value;
  const bookAuthorName = addBookForm.bookAuthor.value;

  class BookInfo {
    // create the object using constructor method
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

  const book = new BookInfo(bookName, bookAuthorName);

  // Add object to the array
  booksList.push(book);

  // clear the input field on browser
  addBookForm.bookTitle.value = '';
  addBookForm.bookAuthor.value = '';

  localStorage.setItem('list', JSON.stringify(booksList));

  createListItem(book);
});
