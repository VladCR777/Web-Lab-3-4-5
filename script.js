const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');
const movieCards = document.querySelectorAll('.card');
const countButton = document.querySelector('.bt_count');
const totalMinutesElement = document.querySelector('.section p'); 
const sortButton = document.querySelector('.bt_sort'); 
const movieCardsContainer = document.getElementById('moviesContainer'); 

function searchMovies() {
    const query = searchInput.value.toLowerCase().trim();
    let found = false;

    movieCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            card.classList.remove('hidden');
            found = true;
        } else {
            card.classList.add('hidden');
        }
    });

    if (!found && query) {
        alert("No movie found with the title: " + searchInput.value);
    }
}



function clearSearch() {
    searchInput.value = '';
    movieCards.forEach(card => {
        card.classList.remove('hidden');
    });
}

searchButton.addEventListener('click', searchMovies);
clearButton.addEventListener('click', clearSearch);


console.log("Search button initialized correctly");








function countTotalMinutes() {
    let totalMinutes = 0;

    movieCards.forEach(card => {
        if (!card.classList.contains('hidden')) { 
            const durationText = card.querySelector('.card-content p').textContent;
            const durationMatch = durationText.match(/Duration: (\d+) min/); 

            if (durationMatch) {
                totalMinutes += parseInt(durationMatch[1]); 
            }
        }
    });

    totalMinutesElement.textContent = `Total minutes: ${totalMinutes}`;
}

countButton.addEventListener('click', countTotalMinutes);

searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchMovies();
    }
});








function sortMovies() {
    const sortedCards = Array.from(movieCards) // Конвертуємо NodeList у масив
        .filter(card => !card.classList.contains('hidden')) // Фільтруємо тільки видимі картки
        .sort((a, b) => {
            const reviewsA = parseInt(a.querySelector('.card-content p:nth-child(3)').textContent.match(/Reviews: (\d+)/)[1]);
            const reviewsB = parseInt(b.querySelector('.card-content p:nth-child(3)').textContent.match(/Reviews: (\d+)/)[1]);
            return reviewsB - reviewsA; // Сортуємо від найбільшого до найменшого
        });

    // Очищаємо контейнер карток та додаємо відсортовані картки
    movieCardsContainer.innerHTML = '';
    sortedCards.forEach(card => {
        movieCardsContainer.appendChild(card);
    });
}


sortButton.addEventListener('click', sortMovies); // Додаємо обробник для кнопки Sort

searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchMovies();
    }
});


console.log("Search button initialized correctly");