import Book from '../models/Book.js';
import { showAlert } from '../utils/alert.js';
import BookForm from '../views/BookForm.js';
import BookList from '../views/BookList.js';

class LibraryController {
    constructor() {
        this.books = [];
        this.bookForm = new BookForm(this.addBook.bind(this));
        this.bookList = new BookList(this.books);
    }

    init() {
        this.bookForm.render();
        this.bookList.render();
    }

    addBook(bookData) {
        const book = new Book(bookData.title, bookData.author, bookData.year);
        this.books.push(book);
        this.bookList.render(this.books);
        showAlert('Buku berhasil ditambahkan!', 'success');
    }
}

export default LibraryController;
