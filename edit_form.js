document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', function () {
        const card = button.closest('.card');
        const movieTitle = card.getAttribute('data-title');
        const movieDuration = card.getAttribute('data-duration');
        const movieReviews = card.getAttribute('data-reviews');

        // Зберігаємо інформацію про фільм в локальному сховищі або передаємо через URL
        localStorage.setItem('editMovieTitle', movieTitle);
        localStorage.setItem('editMovieDuration', movieDuration);
        localStorage.setItem('editMovieReviews', movieReviews);

        // Переходимо на сторінку редагування
        window.location.href = 'edit_film.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо дані з локального сховища
    const movieTitle = localStorage.getItem('editMovieTitle');
    const movieDuration = localStorage.getItem('editMovieDuration');
    const movieReviews = localStorage.getItem('editMovieReviews');

    // Заповнюємо поля форми
    document.getElementById('title').value = movieTitle;
    document.getElementById('duration').value = movieDuration;
    document.getElementById('reviews').value = movieReviews;

    // Додаємо обробник для збереження змін
    document.getElementById('editFilmForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const updatedTitle = document.getElementById('title').value.trim();
        const updatedDuration = document.getElementById('duration').value.trim();
        const updatedReviews = document.getElementById('reviews').value.trim();

        // Перевірка та оновлення даних (в реальному проекті тут може бути запит на сервер)
        if (updatedTitle === '' || isNaN(updatedDuration) || updatedDuration <= 0 || isNaN(updatedReviews) || updatedReviews < 0) {
            alert('Please provide valid data');
        } else {
            alert('Changes saved successfully!');
            // Додати логіку для збереження даних
        }
    });
});
