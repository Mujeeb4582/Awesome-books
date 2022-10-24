
class BookInfo {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// function Add(title, author){
//   const book = new BookInfo(title, author);
//   booksList.push(book);
// }

class UI {
    static DisplayBooks() { 
   const booksList = [];
  const books = BookInfo;
  
  books.forEach((book) =>UI.addBookToList(book))
  }
  
  static addBookToList(book) {
    const books_list = document.getElementById('books_list');
      books_list.innerHTML += `
    <h3>Title ${book.title}</h3>
    <h3>Auther ${book.author}</h3>
    <button type="submit">Remove</button>
    <hr>
    `;
  }
}

document.addEventListener("DOMContinentLoaded", UI.DisplayBooks)

 document.querySelector('.bookInfo').addEventListener ("submit" , (e) =>  {

 e.preventDefault();


    const Title = document.querySelector('.title').value;
    const Author = document.querySelector('.author').value;
    // const newtitle = Title
    // const newauthor = Author

const book = new BookInfo(Title,Author);

UI.addBookToList(book)

});
