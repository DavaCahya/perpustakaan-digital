class BookForm {
    constructor(addBookCallback) {
        this.addBookCallback = addBookCallback;
    }

    render() {
        const form = document.createElement('form');
        form.innerHTML = `
            <input type="text" id="title" placeholder="Judul Buku" required>
            <input type="text" id="author" placeholder="Penulis" required>
            <input type="number" id="year" placeholder="Tahun" required>
            <button type="submit">Tambah Buku</button>
        `;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const bookData = {
                title: form.title.value,
                author: form.author.value,
                year: form.year.value,
            };
            this.addBookCallback(bookData);
            form.reset();
        });
        document.getElementById('app').appendChild(form);
    }
}

export default BookForm;
