/* eslint-disable no-restricted-globals */
const addBook = (books) => {
  document.getElementById('addbook').addEventListener('click', () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    if (title.length > 0 && author.length > 0) {
      const id = new Date().getTime();
      const book = { id, title, author };
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
      location.reload();
    }
  });
};

export default addBook;