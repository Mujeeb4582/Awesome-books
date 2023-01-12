let booksList = []; // Declare a array for storing the bookList

function onDate() {
  document.querySelector('.date').innerHTML = Date();
}

onDate();

// grab all elements
const addBookForm = document.querySelector('#bookInfo');
const list = document.querySelector('.books_list');
const msg = document.querySelector('.message');

function emptyMessage() {
  if (booksList.length === 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
}

// nav section start here

function navItemColor(book, list, contact) {
  document.getElementById('addBook').style.color = book;
  document.getElementById('bookList').style.color = list;
  document.getElementById('contact').style.color = contact;
}

function navItemAttribute(list, add, contact, books, heading) {
  document.getElementById('list-section').setAttribute('class', list);
  document.getElementById('add-section').setAttribute('class', add);
  document.getElementById('contact-section').setAttribute('class', contact);
  document.getElementById('books').setAttribute('class', books);
  document.getElementById('heading').setAttribute('class', heading);
}

function showAddBook() {
  navItemAttribute('non-show', 'show', 'non-show', 'books', 'non-show');
  document.getElementById('addBook').style.color = 'green';
}

showAddBook();

function showList() {
  navItemAttribute('show', 'non-show', 'non-show', 'books', 'heading');
  navItemColor('black', '#daaa63', 'black');
}

function showAdd() {
  navItemColor('#daaa63', 'black', 'black');
  navItemAttribute('non-show', 'show', 'non-show', 'books', 'non-show');
}
function showContact() {
  navItemAttribute('non-show', 'non-show', 'show', 'non-show', 'non-show');
  navItemColor('black', 'black', '#daaa63');
}

document.getElementById('addBook').addEventListener('click', () => {
  showAdd();
});
document.getElementById('bookList').addEventListener('click', () => {
  showList();
});
document.getElementById('contact').addEventListener('click', () => {
  showContact();
});

// nav section ends here

// make object instance and its methods
class BookInfo {
  // create the object using constructor method
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  createListItem(booksListIndex) {
    const listWrapper = document.createElement('div');
    listWrapper.className = 'listWrapper';
    const unOrderList = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.type = 'button';

    list.appendChild(listWrapper);
    listWrapper.appendChild(unOrderList);
    // set innerHTML value
    li1.innerHTML = `'${this.title}'`;
    li2.innerHTML = this.author;
    li3.innerHTML = 'by';
    unOrderList.appendChild(li1);
    unOrderList.appendChild(li3);
    unOrderList.appendChild(li2);
    listWrapper.appendChild(removeBtn);

    // remove button click listener
    removeBtn.addEventListener('click', (event) => {
    // Remove item from DOM
      event.target.parentElement.remove();
      // Remove item from booksList Array
      booksList.splice(booksListIndex, 1);
      // Remove iem from localStorage
      localStorage.setItem('list', JSON.stringify(booksList));
      emptyMessage();
    });
  }
}

// Loop over Array, create the element and append to the DOM
function renderBookList(lists) {
  emptyMessage();
  lists.forEach((element, index) => {
    const book = new BookInfo(element.title, element.author);
    book.createListItem(element, index);
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

const success = document.querySelector('.success');
// form part
addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Message display when book added successfully
  success.innerHTML = 'Book added successfully!';
  success.style.opacity = 1;
  // Timer for removing message after some time
  setTimeout(() => {
    success.style.opacity = 0;
  }, 1000);

  // Access input tag values
  const bookName = addBookForm.bookTitle.value;
  const bookAuthorName = addBookForm.bookAuthor.value;

  const book = new BookInfo(bookName, bookAuthorName);

  // Add object to the array
  booksList.push(book);
  book.createListItem();

  // clear the input field on browser
  addBookForm.bookTitle.value = '';
  addBookForm.bookAuthor.value = '';
  // localStorage
  localStorage.setItem('list', JSON.stringify(booksList));
  emptyMessage();
});
