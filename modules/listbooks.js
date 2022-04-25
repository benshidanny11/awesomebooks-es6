import removeBook from './removebook.js';

const listAllBooks = (books) => {
  const bookList = document.querySelector('#book-list');
  books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', 'book-item');
    listItem.classList.add('article-container');
    listItem.classList.add('d-flex');
    const bookData = document.createElement('h3');
    bookData.classList.add('title');
    bookData.innerHTML = `${book.title} by ${book.author}`;
    const btnRemove = document.createElement('button');
    btnRemove.innerHTML = 'Remove book';
    btnRemove.classList.add('book-remove');
    btnRemove.addEventListener('click', () => {
      removeBook(book.id);
    });
    listItem.appendChild(bookData);
    listItem.appendChild(btnRemove);
    bookList.appendChild(listItem);
  });
};

export default listAllBooks;