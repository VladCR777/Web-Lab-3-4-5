// document.addEventListener('DOMContentLoaded', function () {
//     const searchInput = document.getElementById('searchInput');
//     const searchButton = document.getElementById('searchButton');
//     const clearButton = document.getElementById('clearButton');
//     const movieCards = document.querySelectorAll('.card');
//     const countButton = document.querySelector('.bt_count');
//     const totalMinutesElement = document.querySelector('.section p');
//     const sortButton = document.querySelector('.bt_sort');
//     // const movieCardsContainer = document.getElementById('moviesContainer');

//     // if (!searchInput || !searchButton || !clearButton || !movieCardsContainer) {
//     //     console.error('Some elements are missing from the DOM.');
//     //     return; 
//     // }



//     function searchMovies() {
//         const query = searchInput.value.toLowerCase().trim();
//         let found = false;

//         movieCards.forEach(card => {
//             const title = card.getAttribute('data-title').toLowerCase();
//             if (title.includes(query)) {
//                 card.classList.remove('hiden');
//                 found = true;
//             } else {
//                 card.classList.add('hiden');
//             }
//         });

//         if (!found && query) {
//             alert("No movie found with the title: " + searchInput.value);
//         }
//     }



//     function clearSearch() {
//         searchInput.value = '';
//         movieCards.forEach(card => {
//             card.classList.remove('hidden');
//         });
//     }

//     searchButton.addEventListener('click', searchMovies);
//     clearButton.addEventListener('click', clearSearch);

//     searchInput.addEventListener('keydown', function (event) {
//         if (event.key === 'Enter') {
//             searchMovies();
//         }
//     });




//     function countTotalMinutes() {
//         let totalMinutes = 0;

//         movieCards.forEach(card => {
//             if (!card.classList.contains('hidden')) {
//                 const durationText = card.querySelector('.card-content p').textContent;
//                 const durationMatch = durationText.match(/Duration: (\d+) min/);

//                 if (durationMatch) {
//                     totalMinutes += parseInt(durationMatch[1]);
//                 }
//             }
//         });

//         totalMinutesElement.textContent = `Total minutes: ${totalMinutes}`;
//     }

//     countButton.addEventListener('click', countTotalMinutes);

//     searchInput.addEventListener('keydown', function (event) {
//         if (event.key === 'Enter') {
//             searchMovies();
//         }
//     });




//     function sortMovies() {
//         const sortedCards = Array.from(movieCards)
//             .filter(card => !card.classList.contains('hidden'))
//             .sort((a, b) => {
//                 const reviewsA = parseInt(a.querySelector('.card-content p:nth-child(3)').textContent.match(/Reviews: (\d+)/)[1]);
//                 const reviewsB = parseInt(b.querySelector('.card-content p:nth-child(3)').textContent.match(/Reviews: (\d+)/)[1]);
//                 return reviewsB - reviewsA;
//             });

//         movieCardsContainer.innerHTML = '';
//         sortedCards.forEach(card => {
//             movieCardsContainer.appendChild(card);
//         });
//     }


//     sortButton.addEventListener('click', sortMovies);

//     searchInput.addEventListener('keydown', function (event) {
//         if (event.key === 'Enter') {
//             searchMovies();
//         }
//     });


//     console.log("Search button initialized correctly");
// });




    // document.addEventListener('DOMContentLoaded', function () {
    //     fetchMovies(); 
    // });

    

    // function fetchMovies() {
    //     fetch('http://localhost:5050/api/items')
    //         .then(response => response.json())
    //         .then(data => {
        
    //             // movieCardsContainer.innerHTML = '';

                
    //             data.forEach(item => {
    //                 const card = document.createElement('div');
    //                 card.className = 'card';
    //                 card.setAttribute('data-title', item.title); 

                    
    //                 card.innerHTML = `
    //                     <div class="card-content">
    //                         <img src="${item.imageUrl || 'https://via.placeholder.com/235x150'}" alt="${item.name}" class="movie-image"> <!-- Додаємо картинку -->
    //                         <h3>${item.name}</h3>
    //                         <p>Duration: ${item.duration} min</p>
    //                         <p>Reviews: ${item.reviews}</p>
    //                         <div class="card-buttons"> <!-- Контейнер для кнопок -->
    //                             <button data-id="${item.id}" class="edit-button">Edit</button>
    //                             <button data-id="${item.id}" class="delete-button">Delete</button>
    //                         </div>
    //                     </div>
    //                 `;

    //                 movieCardsContainer.appendChild(card);

                    
                    
    //                 card.querySelector('.edit-button').addEventListener('click', editMovie);
        
    //             });
    //         })
    //         .catch(err => {
    //             console.error(err);
    //             alert('Error fetching movies');
    //         });
    // }

    
    // fetchMovies();



    
    // deleteButton.addEventListener('click', function() {
    //     const movieId = card.getAttribute('data-id'); 
    
    //     fetch(`http://localhost:5050/api/items/${movieId}`, {
    //         method: 'DELETE'
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('Film deleted successfully:', data);
    //         movieCardsContainer.removeChild(card); 
    //         alert(movie.name + ' has been deleted!'); 
    //     })
    //     .catch(error => {
    //         console.error('There was a problem with the fetch operation:', error);
    //     });
    // });
    

    
// function editMovie(event) {
//     const card = event.target.closest('.card');
//     if (!card) {
//         console.error('Movie card not found.');
//         return;
//     }

    
//     const movieId = card.getAttribute('data-id');
//     const movieNameElement = card.querySelector('h3');
//     const movieDurationElement = card.querySelector('p:nth-child(2)');
//     const movieReviewsElement = card.querySelector('p:nth-child(3)');

    
//     if (!movieId) {
//         console.error('Movie ID not found in the card.');
//         return;
//     }
//     if (!movieNameElement) {
//         console.error('Movie name element not found in the card.');
//         return;
//     }
//     if (!movieDurationElement) {
//         console.error('Movie duration element not found in the card.');
//         return;
//     }
//     if (!movieReviewsElement) {
//         console.error('Movie reviews element not found in the card.');
//         return;
//     }

    
//     const movieName = movieNameElement.innerText;
//     const movieDuration = movieDurationElement.innerText.split(': ')[1].replace(' min', '');
//     const movieReviews = movieReviewsElement.innerText.split(': ')[1];

    
//     localStorage.setItem('editMovieId', movieId);
//     localStorage.setItem('editMovieName', movieName);
//     localStorage.setItem('editMovieDuration', movieDuration);
//     localStorage.setItem('editMovieReviews', movieReviews);

    
//     window.location.href = `edit_film.html?id=${movieId}`;
// }

    
    
//     window.onload = fetchMovies;

// });
