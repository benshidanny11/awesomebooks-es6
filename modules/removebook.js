const removeBook = (id) => {
  const mBooks = JSON.parse(localStorage.getItem('books'));
  const remainingBooks = mBooks.filter((book) => book.id !== id);
  const removedBooks = JSON.stringify(remainingBooks);
  localStorage.setItem('books', removedBooks);
  window.location.reload();
};

export default removeBook;