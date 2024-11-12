export function showAlert(message, type) {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    document.body.prepend(alertBox);
    setTimeout(() => alertBox.remove(), 3000);
}
