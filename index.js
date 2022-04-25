import navigatepages from './modules/navigatepages.js';
import listAllBooks from './modules/listbooks.js';
import addBook from './modules/addbook.js';
import showDate from './modules/showdate.js';

const books = JSON.parse(localStorage.getItem('books')) || [];

navigatepages();
listAllBooks(books);
addBook(books);
showDate();