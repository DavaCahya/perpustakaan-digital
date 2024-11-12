import LibraryController from './controllers/LibraryController.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = new LibraryController();
    app.init();
});
