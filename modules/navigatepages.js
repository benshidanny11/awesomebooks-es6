const navigatePages = () => {
  document.getElementById('list-books-item').addEventListener('click', () => {
    const list = document.getElementById('book-container');
    list.classList.remove('hide');
    const section = document.getElementById('section-addbook');
    section.classList.add('hide');
    section.classList.remove('d-flex');
    const contact = document.getElementById('contact-section');
    contact.classList.add('hide');
    contact.classList.remove('d-flex');
    document.getElementById('add-books-item').classList.remove('active');
    document.getElementById('list-books-item').classList.add('active');
    document.getElementById('add-contact-item').classList.remove('active');
  });

  document.getElementById('add-books-item').addEventListener('click', () => {
    const sectionAddBook = document.getElementById('section-addbook');
    sectionAddBook.classList.remove('hide');
    sectionAddBook.classList.add('d-flex');
    document.getElementById('add-books-item').classList.add('active');
    document.getElementById('list-books-item').classList.remove('active');
    document.getElementById('add-contact-item').classList.remove('active');
    const bookContainer = document.getElementById('book-container');
    bookContainer.classList.add('hide');
    bookContainer.classList.remove('d-flex');
    const contact = document.getElementById('contact-section');
    contact.classList.add('hide');
    contact.classList.remove('d-flex');
  });

  document.getElementById('add-contact-item').addEventListener('click', () => {
    const sectionAddBook = document.getElementById('section-addbook');
    sectionAddBook.classList.add('hide');
    sectionAddBook.classList.remove('d-flex');
    document.getElementById('add-books-item').classList.remove('active');
    document.getElementById('list-books-item').classList.remove('active');
    document.getElementById('add-contact-item').classList.add('active');
    const bookContainer = document.getElementById('book-container');
    bookContainer.classList.add('hide');
    bookContainer.classList.remove('d-flex');

    const contact = document.getElementById('contact-section');
    contact.classList.remove('hide');
    contact.classList.add('d-flex');
  });
};

export default navigatePages;