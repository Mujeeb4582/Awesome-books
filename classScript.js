let booksList = []; // Declare a array for storing the bookList

function ondate() {
  document.querySelector('.date').innerHTML = Date();
}

ondate();

// grab all elements
const addBookForm = document.querySelector('#bookInfo');
const list = document.querySelector('.books_list');

// nav section start here

function showAdddeff() {
  document.getElementById('list-section').setAttribute('class', 'non-show');
  document.getElementById('add-section').setAttribute('class', 'show');
  document.getElementById('contact-section').setAttribute('class', 'non-show');
  document.getElementById('books').setAttribute('class', 'books');
  document.getElementById('heading').setAttribute('class', 'non-show');
  document.getElementById('add').style.color = 'green';
}

showAdddeff();

function showList() {
  document.getElementById('list-section').setAttribute('class', 'show');
  document.getElementById('add-section').setAttribute('class', 'non-show');
  document.getElementById('contact-section').setAttribute('class', 'non-show');
  document.getElementById('books').setAttribute('class', 'books');
  document.getElementById('heading').setAttribute('class', 'heading');
  document.getElementById('add').style.color = 'black';
  document.getElementById('lis').style.color = 'green';
  document.getElementById('con').style.color = 'black';
}
function showAdd() {
  document.getElementById('add').style.color = 'green';
  document.getElementById('lis').style.color = 'black';
  document.getElementById('con').style.color = 'black';
  document.getElementById('list-section').setAttribute('class', 'non-show');
  document.getElementById('add-section').setAttribute('class', 'show');
  document.getElementById('contact-section').setAttribute('class', 'non-show');
  document.getElementById('books').setAttribute('class', 'books');
  document.getElementById('heading').setAttribute('class', 'non-show');
}
function showcontact() {
  document.getElementById('books').setAttribute('class', 'non-show');
  document.getElementById('heading').setAttribute('class', 'non-show');
  document.getElementById('contact-section').setAttribute('class', 'show');
  document.getElementById('add').style.color = 'black';
  document.getElementById('lis').style.color = 'black';
  document.getElementById('con').style.color = 'green';
}

document.getElementById('add').addEventListener('click', () => {
  showAdd();
});
document.getElementById('lis').addEventListener('click', () => {
  showList();
});
document.getElementById('con').addEventListener('click', () => {
  showcontact();
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
    li1.innerHTML = this.title;
    li2.innerHTML = this.author;
    li3.innerHTML = 'by';
    unOrderList.appendChild(li1);
    unOrderList.appendChild(li3);
    unOrderList.appendChild(li2);
    listWrapper.appendChild(removeBtn);

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
}

// Loop over Array, create the element and append to the DOM
function renderBookList(lists) {
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

// form part
addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();

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
  // localstorage
  localStorage.setItem('list', JSON.stringify(booksList));
});
