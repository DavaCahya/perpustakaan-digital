class BookList {
    constructor(books) {
        this.books = books;
    }

    render(books = this.books) {
        let bookListElement = document.getElementById('book-list');
        if (!bookListElement) {
            bookListElement = document.createElement('div');
            bookListElement.id = 'book-list';
            document.getElementById('app').appendChild(bookListElement);
        }
        
        bookListElement.innerHTML = '';
        
        books.forEach((book, index) => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book-item';
            bookElement.innerHTML = `
                <p><strong>Judul:</strong> ${book.title}</p>
                <p><strong>Penulis:</strong> ${book.author}</p>
                <p><strong>Tahun:</strong> ${book.year}</p>
            `;
            bookListElement.appendChild(bookElement);
        });
    }
}

export default BookList;
