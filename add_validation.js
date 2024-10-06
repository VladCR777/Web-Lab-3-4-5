document.getElementById('addFilmForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    // Отримуємо введені дані
    const title = document.getElementById('title').value.trim();
    const duration = parseInt(document.getElementById('duration').value.trim());
    const reviews = parseInt(document.getElementById('reviews').value.trim());

    // Валідація даних
    if (title === '') {
        alert('Title cannot be empty!');
        return;
    }

    if (isNaN(duration) || duration <= 0) {
        alert('Duration must be a positive number!');
        return;
    }

    if (isNaN(reviews) || reviews < 0) {
        alert('Reviews must be a non-negative number!');
        return;
    }

    // Якщо всі поля заповнено правильно
    alert('Film successfully added!');
    // Додатково можна тут додати логіку для збереження даних або переспрямування
});
